'use client';

import type { AvailableLocale } from '@i18n/locales';
import { routes } from '@routes/index';
import { News } from '@shared/types/news';
import {
  type NewsCardProps,
  newsTypeLocale,
} from '@shared/utils/from-news-items-to-news-cards';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';

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

  const router = useRouter();

  switch (type) {
    case News.BLOG:
      return (
        <Link href={`/${lang}/news/blog/${url}`}>
          <article>
            <h4>{title}</h4>
            <button
              onClick={() => router.push(`${routes.blog(lang)}`)}
              className={styles['latest-news-content__type']}
              type="button"
            >
              {newsTypeLocale[lang][News.BLOG]}
            </button>
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
            <button
              onClick={() => router.push(`${routes.newsletter(lang)}`)}
              className={styles['latest-news-content__type']}
              type="button"
            >
              {newsTypeLocale[lang][News.NEWSLETTER]}
            </button>
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
            <button
              onClick={() => router.push(`${routes.podcast(lang)}`)}
              className={styles['latest-news-content__type']}
              type="button"
            >
              Podcast
            </button>

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

export default AsideNewsCards;
