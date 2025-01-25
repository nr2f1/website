import styles from './page-body.module.scss';

import { getClient } from '@graphql/client';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import Link from 'next/link';
import type { CollectionPage, WithContext } from 'schema-dts';

interface BlogPageBodyProps {
  lang: AvailableLocale;
}
const { query } = getClient();

const BlogPageBody: React.FC<BlogPageBodyProps> = async ({ lang }) => {
  const {
    data: { blogPageCollection },
    error,
  } = await query<GetPostsQuery>({
    query: GetPostsDocument,
    variables: {
      locale: lang,
      skip: 0,
      limit: 12,
    },
  });

  if (error || !blogPageCollection || !blogPageCollection?.items) {
    return null;
  }

  const { total } = blogPageCollection;

  const posts = blogPageCollection.items.map((item) => ({
    title: item?.title ?? '',
    slug: item?.slug ?? '',
    date: item?.date ?? '',
    excerpt: item?.excerpt ?? '',
    imageUrl: item?.image?.url ?? '',
  }));

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: posts.map(({ title, slug, excerpt, imageUrl }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url: `https://nr2f1.org/${lang}/blog/${slug}`,
      abstract: excerpt,
      image: imageUrl,
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
        <nav>
          <ul>
            {posts.map(({ title, slug, date, excerpt, imageUrl }) => (
              <li key={crypto.randomUUID()}>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BlogPageBody;
