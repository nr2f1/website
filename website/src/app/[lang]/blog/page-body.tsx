import NewsCard from '@components/news-card';
import styles from './page-body.module.scss';

import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import type { CollectionPage, WithContext } from 'schema-dts';

interface BlogPageBodyProps {
  lang: AvailableLocale;
  page?: string | string[] | undefined;
}
const { query } = getClient();

const getSkipPagination = (page: BlogPageBodyProps['page'], limit: number) => {
  if (!page) {
    return 0;
  }

  const pageNumber = Number(page) - 1;

  if (pageNumber < 0) {
    return 0;
  }

  return pageNumber * limit;
};

const BlogPageBody: React.FC<BlogPageBodyProps> = async ({ lang, page }) => {
  const LIMIT = 12;

  const {
    data: { blogPageCollection },
    error,
  } = await query<GetPostsQuery>({
    query: GetPostsDocument,
    variables: {
      locale: lang,
      skip: page ? getSkipPagination(page, LIMIT) : 0,
      limit: LIMIT,
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
          <ul className={styles.blog__articles}>
            {posts.map(({ title, slug, date, imageUrl }) => (
              <NewsCard
                date={date}
                imageUrl={imageUrl}
                key={crypto.randomUUID()}
                lang={lang}
                slug={slug}
                title={title}
              />
            ))}
          </ul>
        </nav>

        <Pagination
          totalCount={total}
          currentPage={page ? Number(page) : 0}
          pageSize={LIMIT}
          siblingCount={0}
        />

        {/* https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/ */}
      </div>
    </section>
  );
};

export default BlogPageBody;
