import styles from './page-body.module.scss';

import NewsCard from '@components/news-card';
import Pagination from '@components/pagination';
import { getClient } from '@graphql/client';
import {
  GetNewsDocument,
  type GetNewsQuery,
} from '@graphql/queries/news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { News } from '@shared/types/news';
import { fromBlogNewsletterToNews } from '@shared/utils/from-blog-newsletter-to-news';
import type { CollectionPage, WithContext } from 'schema-dts';

interface NewsPageBodyProps {
  lang: AvailableLocale;
  page?: string | string[] | undefined;
}
const { query } = getClient();

const getSkipPagination = (page: NewsPageBodyProps['page'], limit: number) => {
  if (!page) {
    return 0;
  }

  const pageNumber = Number(page) - 1;

  if (pageNumber < 0) {
    return 0;
  }

  return pageNumber * limit;
};

const NewsPageBody: React.FC<NewsPageBodyProps> = async ({ lang, page }) => {
  const LIMIT = 12;

  const {
    data: { entryCollection },
    error,
  } = await query<GetNewsQuery>({
    query: GetNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (error || !entryCollection?.items) {
    return null;
  }

  const { total, items } = entryCollection;

  const rawPosts = items.filter((item) => item?.__typename === 'BlogPage');

  const rawNewsletter = items.filter(
    (item) => item?.__typename === 'Newsletter',
  );

  const rawPodcast = items.filter((item) => item?.__typename === 'Podcast');

  const allNews = fromBlogNewsletterToNews({
    posts: rawPosts as BlogPageCollection['items'],
    newsletters: rawNewsletter as NewsletterCollection['items'],
    podcasts: rawPodcast as PodcastCollection['items'],
    limit: total,
  });

  const start = getSkipPagination(page, LIMIT);
  const end = start + LIMIT;

  const news = allNews.slice(start, end);

  const newsPosts = news.filter((item) => item.type === News.BLOG);

  const jsonLd: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    mainEntity: newsPosts.map(({ title, url, imageUrl }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url: `https://nr2f1.org/${lang}/news/${url}`,
      image: imageUrl ?? undefined,
    })),
  };

  return (
    <section className={styles.news}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="content-wrapper">
        <nav>
          <ul className={styles.news__articles}>
            {news.map(({ title, url, date, imageUrl, type }) => (
              <NewsCard
                date={date}
                imageUrl={imageUrl}
                key={crypto.randomUUID()}
                lang={lang}
                url={url}
                title={title}
                type={type}
              />
            ))}
          </ul>
        </nav>

        {total > LIMIT ? (
          <Pagination
            totalCount={total}
            currentPage={page ? Number(page) : 0}
            pageSize={LIMIT}
            siblingCount={1}
            lang={lang}
          />
        ) : null}
      </div>
    </section>
  );
};

export default NewsPageBody;
