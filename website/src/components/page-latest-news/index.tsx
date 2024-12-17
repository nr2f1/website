import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetPageLatestNewsDocument,
  type GetPageLatestNewsQuery,
} from '@graphql/queries/page-latest-news/index.generated';
import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import Link from 'next/link';

interface PageLatestNewsProps {
  lang: AvailableLocale;
}

const latestNewsTitle: LocalisedString = {
  en: 'Latest news',
  es: 'Últimas noticias',
  fr: 'Dernières nouvelles',
  de: 'Neueste Nachrichten',
};

interface BlogPostCardsProps {
  title: string;
  slug: string;
  published: string;
  lang: AvailableLocale;
}

const BlogPostCards: React.FC<BlogPostCardsProps> = ({
  title,
  slug,
  published,
  lang,
}) => {
  const { publishedString, dateTime } = getIntlDateStrings({
    locale: lang,
    date: published,
  });

  return (
    <article>
      <p>Blog</p>
      <h4>
        <Link href={`/${lang}/blog/${slug}`}>{title}</Link>
      </h4>
      <p>
        <time dateTime={dateTime}>{publishedString}</time>
      </p>
    </article>
  );
};

const PageLatestNews: React.FC<PageLatestNewsProps> = async ({ lang }) => {
  const latestNewsTitleText = latestNewsTitle[lang];

  const { query } = getClient();

  const {
    data: { blogPageCollection },
    error,
  } = await query<GetPageLatestNewsQuery>({
    query: GetPageLatestNewsDocument,
    variables: {
      locale: lang,
    },
  });

  if (error || !blogPageCollection || !blogPageCollection?.items) {
    return null;
  }

  const posts = blogPageCollection.items.map((item) => ({
    title: item?.title ?? '',
    slug: item?.slug ?? '',
    published: (item?.date ?? '') as string,
  }));

  return (
    <div className={styles['latest-news-content']}>
      <h3>{latestNewsTitleText}</h3>

      {posts.map(({ title, slug, published }) => (
        <BlogPostCards
          title={title}
          slug={slug}
          published={published}
          lang={lang}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
};

export default PageLatestNews;
