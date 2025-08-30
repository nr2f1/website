import NewsCard from '@components/news-card';
import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetPodcastsDocument,
  type GetPodcastsQuery,
} from '@graphql/queries/news/index.generated';
import { News } from '@shared/types/news';
import {
  getSkipPagination,
  type NewsPageBodyProps,
} from '@shared/utils/pagination';
import type { CollectionPage, WithContext } from 'schema-dts';
import styles from '../page-body.module.scss';

const { query } = getClient();

const NewsPageBody: React.FC<NewsPageBodyProps> = async ({ lang, page }) => {
  const LIMIT = 12;

  const {
    data: { podcastCollection },
    error,
  } = await query<GetPodcastsQuery>({
    query: GetPodcastsDocument,
    variables: {
      limit: LIMIT,
      locale: lang,
      skip: getSkipPagination(page, LIMIT),
    },
  });

  if (error || !podcastCollection || !podcastCollection.items) {
    return null;
  }

  const { items, total } = podcastCollection;

  const podcasts = items
    .filter((x) => Boolean(x))
    .map((item) => {
      return {
        date: item?.date ?? ('' as string),
        title: item?.title ?? '',
        type: News.PODCAST,
        url: item?.url ?? '',
      };
    });

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: podcasts.map(({ title, url }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url,
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
            {podcasts.map(({ title, url, date, type }) => (
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
            paginationPath={'/news/podcast'}
          />
        ) : null}

        {total > LIMIT ? (
          <Pagination
            totalCount={total}
            currentPage={page ? Number(page) : 0}
            pageSize={LIMIT}
            siblingCount={0}
            lang={lang}
            paginationPath={'/news/podcast'}
            className="mobile"
          />
        ) : null}
      </div>
    </section>
  );
};

export default NewsPageBody;
