import NewsCard from '@components/news-card';
import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import {
  GetNewsDocument,
  type GetNewsQuery,
} from '@graphql/queries/news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
import { fromBlogNewsletterToNews } from '@shared/utils/from-blog-newsletter-to-news';
import Link from 'next/link';
import styles from './index.module.scss';

interface LatestNewsProps {
  lang: AvailableLocale;
}

const LatestNews: React.FC<LatestNewsProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: { entryCollection },
    error,
  } = await query<GetNewsQuery>({
    query: GetNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (error || !entryCollection?.items) {
    return null;
  }

  const { total, items } = entryCollection;

  const rawPosts = items.filter((item) => item?.__typename === 'BlogPage');

  const rawNewsletter = items.filter(
    (item) => item?.__typename === 'Newsletter',
  );

  const rawPodcast = items.filter((item) => item?.__typename === 'Podcast');

  const allNews = fromBlogNewsletterToNews({
    limit: total,
    newsletters: rawNewsletter as NewsletterCollection['items'],
    podcasts: rawPodcast as PodcastCollection['items'],
    posts: rawPosts as BlogPageCollection['items'],
  });

  const news = allNews.slice(0, 6);

  const {
    data: { title, cta },
    error: getLatestNewsError,
  } = await query<GetLatestNewsQuery>({
    query: GetLatestNewsDocument,
    variables: {
      latestNewsCtaId,
      latestNewsTitleId,
      locale: lang,
    },
  });

  if (getLatestNewsError || !title || !cta) {
    return null;
  }

  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <h2>{title.content}</h2>
        <ul className={styles.news__articles}>
          {news.map((news) => (
            <NewsCard
              date={news.date ?? ''}
              imageUrl={news.imageUrl}
              key={crypto.randomUUID()}
              lang={lang}
              title={news?.title}
              url={news.url}
              type={news.type}
            />
          ))}
        </ul>
        <Link
          href={cta.target?.url ?? '/'}
          className={`${styles.news__more} button button--on-light`}
        >
          {cta.text?.content}
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
