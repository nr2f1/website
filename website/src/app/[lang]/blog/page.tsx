import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  const { query } = getClient();

  const {
    data: { blogPageCollection },
    error,
  } = await query<GetPostsQuery>({
    query: GetPostsDocument,
    variables: {
      locale: lang,
    },
  });

  if (error || !blogPageCollection || !blogPageCollection?.items) {
    return null;
  }

  const posts = blogPageCollection.items.map((item) => ({
    content: item?.title ?? '',
    slug: item?.slug ?? '',
  }));

  return (
    <section className={styles.blog}>
      <div className="content-wrapper">
        <h1>Blog</h1>
        <nav>
          <ul>
            {posts.map(({ content, slug }) => (
              <li key={crypto.randomUUID()}>
                <Link href={`/blog/${slug}`}>{content}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Page;
