// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getCampaigns } from './campaigns';

const givebutterCampaign = (index: number) => ({
  cover: { url: `https://cdn.example.com/${index}.jpg` },
  created_at: '2026-01-01T00:00:00Z',
  currency: 'USD',
  raised: 10,
  title: `Campaign ${index}`,
  url: `https://givebutter.com/c/${index}`,
});

const respondWith = (data: unknown) =>
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(Response.json({ data })));

describe('getCampaigns', () => {
  beforeEach(() => {
    vi.stubEnv('GIVEBUTTER_API_KEY', 'test-key');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('returns at most six campaigns with the fields the cards render', async () => {
    respondWith(Array.from({ length: 8 }, (_, i) => givebutterCampaign(i)));

    const campaigns = await getCampaigns();

    expect(campaigns).toHaveLength(6);
    expect(campaigns[0]).toEqual({
      coverUrl: 'https://cdn.example.com/0.jpg',
      createdAt: '2026-01-01T00:00:00Z',
      title: 'Campaign 0',
      url: 'https://givebutter.com/c/0',
    });
    expect(fetch).toHaveBeenCalledWith(
      'https://api.givebutter.com/v1/campaigns',
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer test-key' }),
      }),
    );
  });

  it('tolerates a campaign without a cover image', async () => {
    respondWith([{ ...givebutterCampaign(1), cover: null }]);

    await expect(getCampaigns()).resolves.toEqual([
      expect.objectContaining({ coverUrl: '' }),
    ]);
  });

  it('throws when Givebutter does not answer 2xx', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response('nope', { status: 401 })),
    );

    await expect(getCampaigns()).rejects.toThrow(
      'Givebutter responded with 401',
    );
  });

  it('throws when the API key is missing', async () => {
    vi.stubEnv('GIVEBUTTER_API_KEY', '');

    await expect(getCampaigns()).rejects.toThrow('GIVEBUTTER_API_KEY');
  });
});
