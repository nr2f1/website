import AsideNewsCards from '@components/aside-news-cards';
import { getClient } from '@graphql/client';
import {
  GetPageLatestNewsDocument,
  type GetPageLatestNewsQuery,
} from '@graphql/queries/page-latest-news/index.generated';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import { fromNewsToNewsCards } from '@shared/utils/from-news-items-to-news-cards';
import Link from 'next/link';
import styles from './index.module.scss';

interface PageLatestNewsProps {
  lang: AvailableLocale;
}

const latestNewsTitle: LocalisedString = {
  de: 'Neueste Nachrichten',
  en: 'Latest news',
  es: 'Últimas noticias',
  fr: 'Dernières nouvelles',
  it: 'Ultime notizie',
  'pt-BR': 'Últimas notícias',
  'zh-CN': '最新消息',
};

const PageLatestNews: React.FC<PageLatestNewsProps> = async ({ lang }) => {
  const latestNewsTitleText = latestNewsTitle[lang];

  const { query } = getClient();

  const {
    data: { posts, podcasts, newsletters },
    error,
  } = await query<GetPageLatestNewsQuery>({
    query: GetPageLatestNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (
    !posts ||
    !posts.items ||
    !posts.items.length ||
    !newsletters ||
    !newsletters.items ||
    !newsletters.items.length ||
    !podcasts ||
    !podcasts.items ||
    !podcasts.items.length ||
    error
  ) {
    return null;
  }

  const allNews = fromNewsToNewsCards({
    end: 3,
    lang,
    newsletters: newsletters.items as NewsletterCollection['items'],
    podcasts: podcasts.items as PodcastCollection['items'],
    posts: posts.items as BlogPageCollection['items'],
  });

  return (
    <div className={styles['latest-news-content']}>
      <h3 className={styles['latest-news-content__title']}>
        {latestNewsTitleText}
      </h3>

      <ul className={styles['latest-news-content__list']}>
        {allNews.map(({ title, url, date, type }) => (
          <li key={crypto.randomUUID()}>
            <AsideNewsCards
              title={title}
              url={url}
              published={date}
              lang={lang}
              type={type}
            />
          </li>
        ))}
      </ul>
      <Link
        href={`/${lang}/news`}
        className={styles['latest-news-content__see-all']}
      >
        See all
      </Link>
    </div>
  );
};

export default PageLatestNews;
