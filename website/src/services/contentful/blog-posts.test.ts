// @vitest-environment node
import { getClient } from '@graphql/client';
import { describe, expect, it, vi } from 'vitest';
import { BLOG_POSTS_PAGE_SIZE, getAllBlogPosts } from './blog-posts';

vi.mock('@graphql/client', () => ({ getClient: vi.fn() }));

const post = (index: number) => ({
  slug: `post-${index}`,
  sys: {
    publishedAt: `2026-01-${String((index % 28) + 1).padStart(2, '0')}T00:00:00Z`,
  },
});

const contentfulWith = (
  total: number,
  items = Array.from({ length: total }, (_, i) => post(i)),
) => {
  const query = vi.fn(async ({ variables }) => ({
    data: {
      blogPageCollection: {
        items: items.slice(variables.skip, variables.skip + variables.limit),
        total,
      },
    },
  }));
  vi.mocked(getClient).mockReturnValue({ query } as never);

  return query;
};

describe('getAllBlogPosts', () => {
  it('pages past the Contentful default of 100 items', async () => {
    const total = BLOG_POSTS_PAGE_SIZE * 2 + 5;
    const query = contentfulWith(total);

    const posts = await getAllBlogPosts();

    expect(posts).toHaveLength(total);
    expect(query).toHaveBeenCalledTimes(3);
    expect(query.mock.calls.map(([{ variables }]) => variables.skip)).toEqual([
      0,
      BLOG_POSTS_PAGE_SIZE,
      BLOG_POSTS_PAGE_SIZE * 2,
    ]);
  });

  it('returns the slug and the last published date', async () => {
    contentfulWith(1);

    await expect(getAllBlogPosts()).resolves.toEqual([
      { publishedAt: '2026-01-01T00:00:00Z', slug: 'post-0' },
    ]);
  });

  it('drops entries without a slug', async () => {
    contentfulWith(3, [
      post(0),
      { slug: null, sys: { publishedAt: null } },
      post(2),
    ]);

    const posts = await getAllBlogPosts();

    expect(posts.map(({ slug }) => slug)).toEqual(['post-0', 'post-2']);
  });

  it('throws when a page fails, so a partial list never ships', async () => {
    vi.mocked(getClient).mockReturnValue({
      query: vi
        .fn()
        .mockResolvedValue({ data: undefined, error: { message: 'boom' } }),
    } as never);

    await expect(getAllBlogPosts()).rejects.toThrow('boom');
  });
});
