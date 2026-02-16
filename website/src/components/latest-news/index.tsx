import NewsCard from '@components/news-card';
import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
import { fromNewsToNewsCards } from '@shared/utils/from-news-items-to-news-cards';
import Link from 'next/link';
import styles from './index.module.scss';

interface LatestNewsProps {
  lang: AvailableLocale;
}

const LatestNews: React.FC<LatestNewsProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetLatestNewsQuery>({
    query: GetLatestNewsDocument,
    variables: {
      latestNewsCtaId,
      latestNewsTitleId,
      locale: lang,
    },
  });

  if (error || !data) {
    return null;
  }

  const { title, cta, posts, newsletters, podcasts } = data;

  if (
    !title ||
    !posts ||
    !posts.items ||
    !posts.items.length ||
    !newsletters ||
    !newsletters.items ||
    !newsletters.items.length ||
    !podcasts ||
    !podcasts.items ||
    !podcasts.items.length ||
    !cta
  ) {
    return null;
  }

  const allNews = fromNewsToNewsCards({
    end: 6,
    lang,
    newsletters: newsletters.items as NewsletterCollection['items'],
    podcasts: podcasts.items as PodcastCollection['items'],
    posts: posts.items as BlogPageCollection['items'],
  });

  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <h2>{title.content}</h2>
        <ul className={styles.news__articles}>
          {allNews.map((news) => (
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
