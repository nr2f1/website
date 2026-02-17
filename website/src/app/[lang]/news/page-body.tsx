import NewsCard from '@components/news-card';
import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetAllNewsDocument,
  type GetAllNewsQuery,
} from '@graphql/queries/news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import { BASE_URL } from '@routes/index';
import { News } from '@shared/types/news';
import { fromNewsToNewsCards } from '@shared/utils/from-news-items-to-news-cards';
import {
  getSkipPagination,
  type NewsPageBodyProps,
} from '@shared/utils/pagination';
import type { CollectionPage, WithContext } from 'schema-dts';
import styles from './page-body.module.scss';


const NewsPageBody: React.FC<NewsPageBodyProps> = async ({ lang, page }) => {
  const { query } = getClient();
  const LIMIT = 12;

  const { data, error } = await query<GetAllNewsQuery>({
    query: GetAllNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (error || !data) {
    return null;
  }

  const { posts, podcasts, newsletters } = data;

  if (
    !posts ||
    !posts.items ||
    !posts.items.length ||
    !newsletters ||
    !newsletters.items ||
    !newsletters.items.length ||
    !podcasts ||
    !podcasts.items ||
    !podcasts.items.length
  ) {
    return null;
  }

  const total =
    posts.items.length + newsletters.items.length + podcasts.items.length;
  const start = getSkipPagination(page, LIMIT);
  const end = start + LIMIT;

  const allNews = fromNewsToNewsCards({
    end,
    lang,
    newsletters: newsletters.items as NewsletterCollection['items'],
    podcasts: podcasts.items as PodcastCollection['items'],
    posts: posts.items as BlogPageCollection['items'],
    start,
  });

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: allNews.map(({ title, url, imageUrl, type }) => ({
      '@type': 'BlogPosting',
      headline: title,
      image: imageUrl ?? undefined,
      url: type === News.BLOG ? `${BASE_URL}/${lang}/news/blog/${url}` : url,
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
            {allNews.map(({ title, url, date, imageUrl, type }) => (
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

        {total > LIMIT ? (
          <Pagination
            totalCount={total}
            currentPage={page ? Number(page) : 0}
            pageSize={LIMIT}
            siblingCount={1}
            lang={lang}
          />
        ) : null}
        {total > LIMIT ? (
          <Pagination
            totalCount={total}
            currentPage={page ? Number(page) : 0}
            pageSize={LIMIT}
            siblingCount={0}
            lang={lang}
            className="mobile"
          />
        ) : null}
      </div>
    </section>
  );
};

export default NewsPageBody;
