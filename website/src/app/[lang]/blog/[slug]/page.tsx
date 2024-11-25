import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPostDocument,
  type GetPostQuery,
} from '@graphql/queries/post/index.generated';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { BlogPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { getIntlDateStrings } from '@shared/utils/intl-date';
import type { NextPage } from 'next';

const { query } = getClient();

export async function generateStaticParams() {
  const { data } = await query<GetPostsQuery>({
    query: GetPostsDocument,
  });

  if (
    !data ||
    !data?.blogPageCollection ||
    !data?.blogPageCollection?.items ||
    !data?.blogPageCollection?.items.length
  ) {
    return [];
  }

  return data.blogPageCollection.items.map((post) => ({
    slug: post?.slug ?? '',
  }));
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

  return (
    <article className={styles.post}>
      <div className="content-wrapper">
        <h1>{post?.title}</h1>
        <p>
          Published: <time dateTime={dateTime}>{publishedString}</time>
        </p>
        {documentToReactComponents(post?.body?.json)}
      </div>
    </article>
  );
};

export default Page;
