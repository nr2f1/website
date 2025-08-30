'use client';

import { News } from '@shared/types/news';
import {
  type NewsCardProps,
  newsTypeLocale,
} from '@shared/utils/from-news-items-to-news-cards';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  imageUrl,
  lang,
  url,
  type = News.BLOG,
}) => {
  const { dateTime, publishedString } = getIntlDateStrings({
    date,
    locale: lang,
  });

  const router = useRouter();

  switch (type) {
    case News.PODCAST:
      return (
        <li className={styles.article}>
          <a href={url}>
            <article>
              <div className={styles.article__podcast_img} />
              <div className={styles.article__content}>
                <h2>{title}</h2>
                <div className={styles.article__text_wrapper}>
                  <button
                    className={styles.article__label}
                    onClick={() => router.push(`/${lang}/news/podcast`)}
                    type="button"
                  >
                    Podcast
                  </button>
                  <p className={styles.article__date}>
                    <span className={styles.article__separator}>&#8226;</span>
                    <time dateTime={dateTime}>{publishedString}</time>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
      );
    case News.NEWSLETTER:
      return (
        <li className={styles.article}>
          <a href={url}>
            <article>
              <div className={styles.article__newsletter_img} />
              <div className={styles.article__content}>
                <h2>{title}</h2>
                <div className={styles.article__text_wrapper}>
                  <button
                    className={styles.article__label}
                    onClick={() => router.push(`/${lang}/news/newsletter`)}
                    type="button"
                  >
                    {newsTypeLocale[lang][News.NEWSLETTER]}
                  </button>
                  <p className={styles.article__date}>
                    <span className={styles.article__separator}>&#8226;</span>
                    <time dateTime={dateTime}>{publishedString}</time>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
      );
    default:
      return (
        <li className={styles.article}>
          <Link href={`/news/blog/${url}`}>
            <article>
              <div
                className={styles.article__img}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <div className={styles.article__content}>
                <h2>{title}</h2>
                <div className={styles.article__text_wrapper}>
                  <button
                    className={styles.article__label}
                    type="button"
                    onClick={() => router.push(`/${lang}/news/blog`)}
                  >
                    {newsTypeLocale[lang][News.BLOG]}
                  </button>
                  <p className={styles.article__date}>
                    <span className={styles.article__separator}>&#8226;</span>
                    <time dateTime={dateTime}>{publishedString}</time>
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </li>
      );
  }
};

export default NewsCard;
