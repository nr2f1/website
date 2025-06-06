import styles from './page-body.module.scss';

import NewsCard from '@components/news-card';
import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetNewslettersDocument,
  type GetNewslettersQuery,
} from '@graphql/queries/news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { News } from '@shared/types/news';

import type { CollectionPage, WithContext } from 'schema-dts';

interface NewslettersPageBodyProps {
  lang: AvailableLocale;
  page?: string | string[] | undefined;
}
const { query } = getClient();

const getSkipPagination = (
  page: NewslettersPageBodyProps['page'],
  limit: number,
) => {
  if (!page) {
    return 0;
  }

  const pageNumber = Number(page) - 1;

  if (pageNumber < 0) {
    return 0;
  }

  return pageNumber * limit;
};

const NewsPageBody: React.FC<NewslettersPageBodyProps> = async ({
  lang,
  page,
}) => {
  const LIMIT = 12;

  const {
    data: { newsletterCollection },
    error,
  } = await query<GetNewslettersQuery>({
    query: GetNewslettersDocument,
    variables: {
      locale: lang,
      limit: LIMIT,
      skip: getSkipPagination(page, LIMIT),
    },
  });

  if (error || !newsletterCollection || !newsletterCollection.items) {
    return null;
  }

  const { items, total } = newsletterCollection;

  const newsletters = items
    .filter((x) => Boolean(x))
    .map((item) => {
      return {
        date: item?.date ?? ('' as string),
        title: item?.date ?? ('' as string),
        url: item?.newsletterContent?.url ?? '',
        type: News.NEWSLETTER,
      };
    });

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: newsletters.map(({ title }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url: `https://nr2f1.org/${lang}/news/newsletter`,
    })),
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
            {newsletters.map(({ title, url, date, type }) => (
              <NewsCard
                date={date}
                key={crypto.randomUUID()}
                lang={lang}
                url={url}
                title={title}
                type={type}
              />
            ))}
          </ul>
        </nav>

        {total > LIMIT ? (
          <Pagination
            totalCount={total}
            currentPage={page ? Number(page) : 0}
            pageSize={LIMIT}
            siblingCount={1}
            lang={lang}
            paginationPath={'/news/newsletter'}
          />
        ) : null}
      </div>
    </section>
  );
};

export default NewsPageBody;
