import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';
import Link from 'next/link';

import { getIntlDateStrings } from '@shared/utils/intl-date';

interface NewsCardProps {
  date: string;
  imageUrl: string;
  lang: AvailableLocale;
  slug: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  imageUrl,
  lang,
  slug,
}) => {
  const { dateTime, publishedString } = getIntlDateStrings({
    date,
    locale: lang,
  });

  return (
    <li className={styles.article}>
      <Link href={`/blog/${slug}`}>
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
};

export default NewsCard;
