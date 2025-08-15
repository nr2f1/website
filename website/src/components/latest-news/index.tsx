import NewsCard, { type NewsCardProps } from '@components/news-card';
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
import styles from './index.module.scss';

interface LatestNewsProps {
  lang: AvailableLocale;
}

const LatestNews: React.FC<LatestNewsProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: { title, cta, posts, newsletters, podcasts },
    error,
  } = await query<GetLatestNewsQuery>({
    query: GetLatestNewsDocument,
    variables: {
      latestNewsCtaId,
      latestNewsTitleId,
      locale: lang,
    },
  });

  console.log({ podcasts });

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
    !cta ||
    error
  ) {
    return null;
  }

  const postAsNews: NewsCardProps[] = posts.items
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, image, slug }) => ({
      date,
      imageUrl: image?.url ?? null,
      lang,
      title: title ?? '',
      type: News.BLOG,
      url: slug ?? '',
    }));

  const newslettersAsNews: NewsCardProps[] = newsletters.items
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, newsletterContent }) => ({
      date,
      lang,
      title: title ?? '',
      type: News.NEWSLETTER,
      url: newsletterContent?.url ?? '',
    }));

  const podcastsAsNews: NewsCardProps[] = podcasts.items
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, url }) => ({
      date,
      lang,
      title: title ?? '',
      type: News.PODCAST,
      url: url ?? '',
    }));

  const allNews = [...postAsNews, ...newslettersAsNews, ...podcastsAsNews]
    .sort((newsA, newsB) => {
      const dateA = newsA.date ? new Date(newsA.date) : new Date(0);
      const dateB = newsB.date ? new Date(newsB.date) : new Date(0);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 6);

  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <p>Pedro</p>
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
