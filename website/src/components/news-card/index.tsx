import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';
import Link from 'next/link';

import { News } from '@shared/types/news';
import { getIntlDateStrings } from '@shared/utils/intl-date';

export interface NewsCardProps {
  date: string;
  imageUrl?: string | null;
  lang: AvailableLocale;
  url: string;
  title: string;
  type?: News;
}

interface GetNewsLetterTitleProps {
  date: string;
  lang: AvailableLocale;
}

const getNewsLetterTitle = ({ date, lang }: GetNewsLetterTitleProps) => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat(lang, {
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
};

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

  switch (type) {
    case News.NEWSLETTER:
      return (
        <li className={styles.article}>
          <a href={url}>
            <article>
              <div className={styles.article__newsletter_img} />
              <div>
                <p className={styles.article__label}>Newsletter</p>
                <h3>{getNewsLetterTitle({ date: title, lang })}</h3>
                <p className={styles.article__date}>
                  <time dateTime={dateTime}>{publishedString}</time>
                </p>
              </div>
            </article>
          </a>
        </li>
      );
    default:
      return (
        <li className={styles.article}>
          <Link href={`/blog/${url}`}>
            <article>
              <div
                className={styles.article__img}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <div>
                <p className={styles.article__label}>Blog post</p>
                <h3>{title}</h3>
                <p className={styles.article__date}>
                  <time dateTime={dateTime}>{publishedString}</time>
                </p>
              </div>
            </article>
          </Link>
        </li>
      );
  }
};

export default NewsCard;
