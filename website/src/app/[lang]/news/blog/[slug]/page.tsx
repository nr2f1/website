import PageHeader from '@components/page-header';
import PageLatestNews from '@components/page-latest-news';
import SupportBanner from '@components/support-banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPostDocument,
  type GetPostQuery,
} from '@graphql/queries/post/index.generated';
import { blogPostUrl } from '@routes/index';
import type { NewsPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import { Links, renderNode, renderOptions } from '@shared/utils/rich-text';
import type { Metadata, NextPage } from 'next';
import type { Blog, WithContext } from 'schema-dts';
import styles from './index.module.scss';

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
    description,
    openGraph: {
      description,
      images: {
        url: imgUrl,
      },
      locale: lang,
      title,
      type: 'article',
      url: blogPostUrl({ locale: lang, slug }),
    },
    title,
  };
}

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

  const { publishedString } = getIntlDateStrings({
    date: post?.date ?? '',
    locale: lang,
  });

  const jsonLd: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    abstract: post?.excerpt ?? '',
    datePublished: publishedString,
    headline: post?.title ?? '',
    url: `https://nr2f1.org/news/blog/${slug}`,
  };

  return (
    <>
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
      />
      <article className={styles.post}>
        <div className={styles.post__layout}>
          <div className={styles.post__row}>
            <div className={styles.post__content}>
              {documentToReactComponents(post?.body?.json, renderOptions(post?.body?.links as Links))}
            </div>
            <div className={styles.post__aside}>
              <PageLatestNews lang={lang} />
            </div>
          </div>
        </div>
      </article>
      <SupportBanner lang={lang} />
    </>
  );
};

export default Page;
