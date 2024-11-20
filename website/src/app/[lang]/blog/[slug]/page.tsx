import { getClient } from '@graphql/client';
import {
  GetPostsDocument,
  type GetPostsQuery,
} from '@graphql/queries/posts/index.generated';
import type { BlogPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';

export async function generateStaticParams() {
  const { query } = getClient();
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

  return (
    <>
      {/* <p>{lang}</p> */}
      <p>hola</p>
    </>
  );
};

export default Page;
