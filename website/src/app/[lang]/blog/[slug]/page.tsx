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

  console.log({ post });

  const publishedDate = new Date(post?.date);

  const publishedString = new Intl.DateTimeFormat(lang, {
    dateStyle: 'long',
  }).format(publishedDate);

  return (
    <div className="content-wrapper">
      <section>
        <h2>{post?.title}</h2>
        <p>Published: {publishedString}</p>
      </section>
    </div>
  );
};

export default Page;
