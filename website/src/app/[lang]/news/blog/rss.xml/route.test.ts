// @vitest-environment node
import { getClient } from '@graphql/client';
import type { NextRequest } from 'next/server';
import { describe, expect, it, vi } from 'vitest';
import { GET } from './route';

vi.mock('@graphql/client', () => ({ getClient: vi.fn() }));

const feedFor = async (excerpt: string | null) => {
  vi.mocked(getClient).mockReturnValue({
    query: vi.fn().mockResolvedValue({
      data: {
        blogPageCollection: {
          items: [
            { date: '2026-09-02', excerpt, slug: 'a-post', title: 'A post' },
          ],
        },
      },
    }),
  } as never);

  return GET({} as NextRequest, { params: Promise.resolve({ lang: 'en' }) });
};

describe('GET /[lang]/news/blog/rss.xml', () => {
  it('serves RSS with a self link and a PNG channel image', async () => {
    const response = await feedFor('Summary');
    const body = await response.text();

    expect(response.headers.get('content-type')).toBe(
      'application/rss+xml; charset=utf-8',
    );
    expect(body).toContain(
      '<atom:link href="https://www.nr2f1.org/en/news/blog/rss.xml" rel="self" type="application/rss+xml" />',
    );
    // RSS 2.0 allows GIF, JPEG or PNG, at most 144 px wide, with integer sizes.
    expect(body).toContain('<url>https://www.nr2f1.org/rss-logo.png</url>');
    expect(body).toContain('<width>144</width>');
    expect(body).toContain('<height>133</height>');
    expect(body).toContain('<description><![CDATA[Summary]]></description>');
  });

  it('writes an empty description when a post has no excerpt', async () => {
    const body = await (await feedFor(null)).text();

    expect(body).not.toContain('null');
    expect(body).toContain('<description><![CDATA[]]></description>');
  });
});
