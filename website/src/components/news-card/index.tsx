import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';
import { News } from '@shared/types/news';
import { firstLetterCapital } from '@shared/utils/first-letter-capital';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';

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

  return firstLetterCapital(
    new Intl.DateTimeFormat(lang, {
      month: 'long',
      year: 'numeric',
    }).format(dateObj),
  );
};

interface NewsType {
  [News.BLOG]: string;
  [News.NEWSLETTER]: string;
}

const newsTypeLocale: Record<AvailableLocale, NewsType> = {
  en: {
    blog: 'Blog post',
    newsletter: 'Newsletter',
  },
  fr: {
    blog: 'Article de blog',
    newsletter: "Bulletin d'information",
  },
  de: {
    blog: 'Blogbeitrag',
    newsletter: 'Newsletter',
  },
  es: {
    blog: 'Entrada de blog',
    newsletter: 'Boletín informativo',
  },
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
    case News.PODCAST:
      return (
        <li className={styles.article}>
          <a href={url}>
            <article>
              <div className={styles.article__podcast_img} />
              <div>
                <h2>{title}</h2>
                <p className={styles.article__date}>
                  <span className={styles.article__label}>Podcast</span>
                  <span className={styles.article__separator}>&#8226;</span>
                  <time dateTime={dateTime}>{publishedString}</time>
                </p>
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
              <div>
                <h2>{getNewsLetterTitle({ date: title, lang })}</h2>
                <p className={styles.article__date}>
                  <span className={styles.article__label}>
                    {newsTypeLocale[lang][News.NEWSLETTER]}
                  </span>
                  <span className={styles.article__separator}>&#8226;</span>
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
          <Link href={`/news/${url}`}>
            <article>
              <div
                className={styles.article__img}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <div>
                <h2>{title}</h2>
                <p className={styles.article__date}>
                  <span className={styles.article__label}>
                    {newsTypeLocale[lang][News.BLOG]}
                  </span>
                  <span className={styles.article__separator}>&#8226;</span>
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
