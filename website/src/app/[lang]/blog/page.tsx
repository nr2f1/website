import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';
import type { CollectionPage, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: 'NR2F1 Foundation | Blog',
  description: 'Blog',
};

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
    excerpt: item?.excerpt ?? '',
  }));

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: posts.map(({ content, slug, excerpt }) => ({
      '@type': 'BlogPosting',
      headline: content,
      url: `https://nr2f1.org/${lang}/blog/${slug}`,
      abstract: excerpt,
    })),
  };

  return (
    <section className={styles.blog}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
