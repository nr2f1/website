import { getClient } from '@graphql/client';
import {
  GetPageLatestNewsDocument,
  type GetPageLatestNewsQuery,
} from '@graphql/queries/page-latest-news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import { News } from '@shared/types/news';
import {
  fromNewsToNewsCards,
  type NewsCardProps,
  newsTypeLocale,
} from '@shared/utils/from-news-items-to-news-cards';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';
import styles from './index.module.scss';

interface PageLatestNewsProps {
  lang: AvailableLocale;
}

const latestNewsTitle: LocalisedString = {
  de: 'Neueste Nachrichten',
  en: 'Latest news',
  es: 'Últimas noticias',
  fr: 'Dernières nouvelles',
};

interface AsideNewsCardsProps {
  title: string;
  url: string;
  published: string;
  lang: AvailableLocale;
  type: NewsCardProps['type'];
}

const AsideNewsCards: React.FC<AsideNewsCardsProps> = ({
  title,
  url,
  published,
  lang,
  type,
}) => {
  const { publishedString, dateTime } = getIntlDateStrings({
    date: published,
    locale: lang,
  });

  switch (type) {
    case News.BLOG:
      return (
        <Link href={`/${lang}/news/blog/${url}`}>
          <article>
            <h4>{title}</h4>
            <Link
              href={`/${lang}/news/blog`}
              className={styles['latest-news-content__type']}
            >
              {newsTypeLocale[lang][News.BLOG]}
            </Link>
            <p>
              <time dateTime={dateTime}>{publishedString}</time>
            </p>
          </article>
        </Link>
      );
    case News.NEWSLETTER:
      return (
        <a href={url}>
          <article>
            <h4>{title}</h4>
            <p> {newsTypeLocale[lang][News.NEWSLETTER]}</p>
            <p>
              <time dateTime={dateTime}>{publishedString}</time>
            </p>
          </article>
        </a>
      );
    case News.PODCAST:
      return (
        <a href={url}>
          <article>
            <h4>{title}</h4>
            <p>Podcast</p>
            <p>
              <time dateTime={dateTime}>{publishedString}</time>
            </p>
          </article>
        </a>
      );
    default:
      return null;
  }
};

const PageLatestNews: React.FC<PageLatestNewsProps> = async ({ lang }) => {
  const latestNewsTitleText = latestNewsTitle[lang];

  const { query } = getClient();

  const {
    data: { posts, podcasts, newsletters },
    error,
  } = await query<GetPageLatestNewsQuery>({
    query: GetPageLatestNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (
    !posts ||
    !posts.items ||
    !posts.items.length ||
    !newsletters ||
    !newsletters.items ||
    !newsletters.items.length ||
    !podcasts ||
    !podcasts.items ||
    !podcasts.items.length ||
    error
  ) {
    return null;
  }

  const allNews = fromNewsToNewsCards({
    end: 3,
    lang,
    newsletters: newsletters.items as NewsletterCollection['items'],
    podcasts: podcasts.items as PodcastCollection['items'],
    posts: posts.items as BlogPageCollection['items'],
  });

  return (
    <div className={styles['latest-news-content']}>
      <h3 className={styles['latest-news-content__title']}>
        {latestNewsTitleText}
      </h3>

      <ul className={styles['latest-news-content__list']}>
        {allNews.map(({ title, url, date, type }) => (
          <li key={crypto.randomUUID()}>
            <AsideNewsCards
              title={title}
              url={url}
              published={date}
              lang={lang}
              type={type}
            />
          </li>
        ))}
      </ul>
      <Link
        href={`/${lang}/news`}
        className={styles['latest-news-content__see-all']}
      >
        See all
      </Link>
    </div>
  );
};

export default PageLatestNews;
