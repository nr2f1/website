import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';

interface LatestNewsProps {
  lang: AvailableLocale;
}

interface CardProps {
  date: string;
  imageUrl: string;
  lang: AvailableLocale;
  slug: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ title, date, imageUrl, lang, slug }) => {
  const { dateTime, publishedString } = getIntlDateStrings({
    date,
    locale: lang,
  });

  return (
    <li className={styles.article}>
      <Link href={`/blog/${slug}`}>
        <article className={styles.article}>
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

  const { title, cta, posts } = data;

  if (!posts.items) {
    return null;
  }

  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <h2>{title.content}</h2>

        <ul className={styles.news__articles}>
          {posts.items.map((post) => (
            <Card
              date={post?.date ?? ''}
              imageUrl={post?.image?.url ?? ''}
              key={crypto.randomUUID()}
              lang={lang}
              title={post?.title ?? ''}
              slug={post?.slug ?? ''}
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
