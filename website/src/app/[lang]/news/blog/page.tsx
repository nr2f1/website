import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { blogIndexPageMetadataId } from '@models/metadata';
import { getAlternateUrls } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import BlogIndexPageBody from './page-body';
import BlogIndexPageHeader from './page-header';


export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: blogIndexPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';

  const alternates = getAlternateUrls({
    locale: lang,
    route: 'blog',
  });

  return {
    alternates: {
      ...alternates,
      types: {
        'application/rss+xml': `/${lang}/news/blog/rss.xml`,
      },
    },
    description,
    title: `NR2F1 Foundation | ${title}`,
  };
}

interface NewsPageProps extends PagePropsWithLocale {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page: NextPage<NewsPageProps> = async ({ params, searchParams }) => {
  const { query } = getClient();
  const { lang } = await params;
  const { page } = await searchParams;

  return (
    <>
      <BlogIndexPageHeader lang={lang} />
      <BlogIndexPageBody lang={lang} page={page} />
    </>
  );
};

export default Page;
