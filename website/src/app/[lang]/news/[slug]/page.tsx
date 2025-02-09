import PageHeader from '@components/page-header';
import styles from './index.module.scss';

import PageLatestNews from '@components/page-latest-news';
import SupportBanner from '@components/support-banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPostDocument,
  type GetPostQuery,
} from '@graphql/queries/post/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import type { NewsPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import { renderNode } from '@shared/utils/rich-text';
import type { Metadata, NextPage } from 'next';
import type { Blog, WithContext } from 'schema-dts';

const { query } = getClient();

export async function generateMetadata({
  params,
}: NewsPagePropsWithLocale): Promise<Metadata> {
  const { lang, slug } = await params;

  const { data } = await query<GetPostQuery>({
    query: GetPostDocument,
    variables: { locale: lang, slug },
  });

  const title = data?.blogPageCollection?.items[0]?.title ?? '';
  const description = data?.blogPageCollection?.items[0]?.excerpt ?? '';
  const imgUrl = data?.blogPageCollection?.items[0]?.image?.url ?? '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://nr2f1.org/${lang}/news/${slug}`,
      locale: lang,
      images: {
        url: imgUrl,
      },
    },
  };
}

const blogPostLoale: Record<AvailableLocale, string> = {
  en: 'Blog post',
  es: 'Entrada de blog',
  fr: 'Article de blog',
  de: 'Blogbeitrag',
};

const Page: NextPage<NewsPagePropsWithLocale> = async ({ params }) => {
  const { lang, slug } = await params;

  const { data } = await query<GetPostQuery>({
    query: GetPostDocument,
    variables: { locale: lang, slug },
  });

  if (
    !data ||
    !data.blogPageCollection ||
    data.blogPageCollection.items.length === 0
  ) {
    return null;
  }

  const [post] = data.blogPageCollection.items;

  const { dateTime, publishedString } = getIntlDateStrings({
    date: post?.date ?? '',
    locale: lang,
  });

  const jsonLd: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: post?.title ?? '',
    datePublished: publishedString,
    url: `https://nr2f1.org/news/${slug}`,
    abstract: post?.excerpt ?? '',
  };

  return (
    <article className={styles.post}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        pageTitle={post?.title ?? ''}
        imageUrl={post?.image?.url ?? undefined}
        lang={lang}
        lastUpdated={post?.date ?? ''}
        sectionTitle={blogPostLoale[lang]}
      />

      <div className={styles.post__layout}>
        <div className={styles.post__row}>
          <div className={styles.post__content}>
            {documentToReactComponents(post?.body?.json, { renderNode })}
          </div>
          <div className={styles.post__aside}>
            <PageLatestNews lang={lang} />
          </div>
        </div>
      </div>

      <SupportBanner lang={lang} />
    </article>
  );
};

export default Page;
