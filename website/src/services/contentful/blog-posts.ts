import { getClient } from '@graphql/client';
import { GetBlogPostsSlugsDocument } from '@graphql/queries/news/index.generated';

// Contentful returns 100 items unless asked for more, so read every page.
export const BLOG_POSTS_PAGE_SIZE = 100;

export interface BlogPostSummary {
  slug: string;
  publishedAt: string | null;
}

export const getAllBlogPosts = async (): Promise<BlogPostSummary[]> => {
  const { query } = getClient();
  const posts: BlogPostSummary[] = [];
  let skip = 0;
  let total = 0;

  do {
    const { data, error } = await query({
      query: GetBlogPostsSlugsDocument,
      variables: { limit: BLOG_POSTS_PAGE_SIZE, skip },
    });

    if (error || !data?.blogPageCollection) {
      throw new Error(error?.message ?? 'Could not load blog posts');
    }

    const { items } = data.blogPageCollection;
    total = data.blogPageCollection.total;

    for (const item of items) {
      if (item?.slug) {
        posts.push({ publishedAt: item.sys.publishedAt, slug: item.slug });
      }
    }

    // Stop on an empty page too, in case total changes between requests.
    if (items.length === 0) break;
    skip += BLOG_POSTS_PAGE_SIZE;
  } while (skip < total);

  return posts;
};
