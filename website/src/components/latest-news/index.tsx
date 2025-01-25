import NewsCard from '@components/news-card';
import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
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
            <NewsCard
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
