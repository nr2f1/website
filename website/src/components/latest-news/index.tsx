import styles from './index.module.scss';

import NewsCard from '@components/news-card';
import { getClient } from '@graphql/client';
import {
  GetLatestNewsDocument,
  type GetLatestNewsQuery,
} from '@graphql/queries/latest-news/index.generated';
import type { BlogPageCollection, NewsletterCollection } from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { latestNewsTitleId } from '@models/headings';
import { latestNewsCtaId } from '@models/links';
import { fromBlogNewsletterToNews } from '@shared/utils/from-blog-newsletter-to-news';
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

  const { title, cta, posts, newsletters } = data;

  if (!posts.items || !newsletters?.items) {
    return null;
  }

  const news = fromBlogNewsletterToNews({
    posts: posts.items as BlogPageCollection['items'],
    newsletters: newsletters.items as NewsletterCollection['items'],
    limit: 6,
  });

  return (
    <section className={styles.news}>
      <div className="content-wrapper">
        <h2>{title.content}</h2>
        <ul className={styles.news__articles}>
          {news.map((news) => (
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
