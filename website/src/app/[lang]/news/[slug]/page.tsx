import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPostDocument,
  type GetPostQuery,
} from '@graphql/queries/post/index.generated';
import type { BlogPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import { renderNode } from '@shared/utils/rich-text';
import type { Metadata, NextPage } from 'next';
import type { Blog, WithContext } from 'schema-dts';

const { query } = getClient();

export async function generateMetadata({
  params,
}: BlogPagePropsWithLocale): Promise<Metadata> {
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

const Page: NextPage<BlogPagePropsWithLocale> = async ({ params }) => {
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
      <div className="content-wrapper">
        <h1>{post?.title}</h1>
        <p>
          Published: <time dateTime={dateTime}>{publishedString}</time>
        </p>
        {documentToReactComponents(post?.body?.json, { renderNode })}
      </div>
    </article>
  );
};

export default Page;
