import NewsCard, { type NewsCardProps } from '@components/news-card';
import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
import { News } from '@shared/types/news';
import Link from 'next/link';

interface LatestNewsProps {
  lang: AvailableLocale;
}

const LatestNews: React.FC<LatestNewsProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetLatestNewsQuery>({
    query: GetLatestNewsDocument,
    variables: {
      locale: lang,
      latestNewsTitleId,
      latestNewsCtaId,
    },
  });

  if (error || !data || !data.cta || !data.posts || !data.title) {
    return null;
  }

  const { title, cta, posts, newsletters } = data;

  if (!posts.items || !newsletters?.items) {
    return null;
  }

  type NewsCard = Omit<NewsCardProps, 'lang'>;

  const blogPostsAsNews: NewsCard[] = posts.items.map((post) => ({
    date: post?.date ?? ('' as string),
    imageUrl: post?.image?.url,
    title: post?.title ?? '',
    url: post?.slug ?? '',
    type: News.BLOG,
  }));

  const newslettersAsNews: NewsCard[] = newsletters.items.map((newsletter) => ({
    date: newsletter?.date ?? ('' as string),
    title: newsletter?.date ?? '',
    url: newsletter?.newsletterContent?.url ?? '',
    type: News.NEWSLETTER,
  }));

  const allNewsSorted = [...blogPostsAsNews, ...newslettersAsNews].sort(
    (newsA, newsB) =>
      new Date(newsA.date).getTime() - new Date(newsB.date).getTime(),
  );

  const news = allNewsSorted.slice(0, 6);

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
          href={cta.href ?? '/'}
          className={`${styles.news__more} button button--on-light`}
        >
          {cta.content}
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
