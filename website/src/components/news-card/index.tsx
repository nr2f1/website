import { News } from '@shared/types/news';
import {
  type NewsCardProps,
  newsTypeLocale,
} from '@shared/utils/from-news-items-to-news-cards';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';
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
                  <Link
                    className={styles.article__label}
                    href={`/${lang}/news/podcast`}
                  >
                    Podcast
                  </Link>
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
                <h2>{title}</h2>
                <p className={styles.article__date}>
                  <Link
                    className={styles.article__label}
                    href={`/${lang}/news/newsletter`}
                  >
                    {newsTypeLocale[lang][News.NEWSLETTER]}
                  </Link>
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
          <Link href={`/news/blog/${url}`}>
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
                  <Link
                    className={styles.article__label}
                    href={`/${lang}/news/blog`}
                  >
                    {newsTypeLocale[lang][News.BLOG]}
                  </Link>
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
