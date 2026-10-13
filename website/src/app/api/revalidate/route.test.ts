// @vitest-environment node
import { revalidateTag } from 'next/cache';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { POST } from './route';

vi.mock('next/cache', () => ({
  revalidateTag: vi.fn(),
}));

const request = (headers: Record<string, string> = {}) =>
  new Request('http://localhost/api/revalidate', { headers, method: 'POST' });

describe('POST /api/revalidate', () => {
  beforeEach(() => {
    vi.stubEnv('CONTENTFUL_REVALIDATE_SECRET', 'test-secret');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.mocked(revalidateTag).mockClear();
  });

  it('expires the contentful tag when the secret matches', async () => {
    const response = await POST(
      request({ 'x-revalidate-secret': 'test-secret' }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      revalidated: true,
    });
    expect(revalidateTag).toHaveBeenCalledWith('contentful', { expire: 0 });
  });

  it('rejects a missing or wrong secret without revalidating', async () => {
    const missing = await POST(request());
    const wrong = await POST(request({ 'x-revalidate-secret': 'nope' }));

    expect(missing.status).toBe(401);
    expect(wrong.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it('fails closed when the secret is not configured', async () => {
    vi.stubEnv('CONTENTFUL_REVALIDATE_SECRET', '');

    const response = await POST(request({ 'x-revalidate-secret': '' }));

    expect(response.status).toBe(500);
    expect(revalidateTag).not.toHaveBeenCalled();
  });
});
