import NewsCard from '@components/news-card';
import styles from './page-body.module.scss';

import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetNewsDocument,
  type GetNewsQuery,
} from '@graphql/queries/news/index.generated';
import type { BlogPageCollection, NewsletterCollection } from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { News } from '@shared/types/news';
import { fromBlogNewsletterToNews } from '@shared/utils/from-blog-newsletter-to-news';
import type { CollectionPage, WithContext } from 'schema-dts';

interface NewsPageBodyProps {
  lang: AvailableLocale;
  page?: string | string[] | undefined;
}
const { query } = getClient();

const getSkipPagination = (page: NewsPageBodyProps['page'], limit: number) => {
  if (!page) {
    return 0;
  }

  const pageNumber = Number(page) - 1;

  if (pageNumber < 0) {
    return 0;
  }

  return pageNumber * limit;
};

const NewsPageBody: React.FC<NewsPageBodyProps> = async ({ lang, page }) => {
  const LIMIT = 12;

  const {
    data: { posts, newsletters },
    error,
  } = await query<GetNewsQuery>({
    query: GetNewsDocument,
    variables: {
      locale: lang,
      skip: page ? getSkipPagination(page, LIMIT) : 0,
      limit: LIMIT,
    },
  });

  if (error || !posts?.items || !newsletters?.items) {
    return null;
  }

  const { total: postTotal } = posts;
  const { total: newsletterTotal } = newsletters;

  const total = postTotal + newsletterTotal;

  const news = fromBlogNewsletterToNews({
    posts: posts.items as BlogPageCollection['items'],
    newsletters: newsletters.items as NewsletterCollection['items'],
    limit: LIMIT,
  });

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    // @ts-ignore
    mainEntity: news
      .map(({ title, url, type, imageUrl }) => {
        if (type === News.NEWSLETTER) {
          return {
            '@type': 'BlogPosting',
            headline: title,
            url: `https://nr2f1.org/${lang}/news/${url}`,
            image: imageUrl || '',
            abstract: '',
          };
        }
        return undefined;
      })
      .filter(Boolean) as Array<Record<string, unknown>>,
  };

  return (
    <section className={styles.news}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="content-wrapper">
        <nav>
          <ul className={styles.news__articles}>
            {news.map(({ title, url, date, imageUrl, type }) => (
              <NewsCard
                date={date}
                imageUrl={imageUrl}
                key={crypto.randomUUID()}
                lang={lang}
                url={url}
                title={title}
                type={type}
              />
            ))}
          </ul>
        </nav>

        <Pagination
          totalCount={total}
          currentPage={page ? Number(page) : 0}
          pageSize={LIMIT}
          siblingCount={1}
          lang={lang}
        />
      </div>
    </section>
  );
};

export default NewsPageBody;
