import { getClient } from '@graphql/client';
import { GetMetadataDocument } from '@graphql/queries/metadata/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { blogIndexPageMetadataId } from '@models/metadata';
import { getAlternateUrls } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import { Suspense } from 'react';
import BlogIndexPageBody from './page-body';
import BlogIndexPageHeader from './page-header';

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query({
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

// Awaits searchParams inside the Suspense boundary so the shell
// (header) stays prerendered and only the paginated list streams in
const PaginatedBody: React.FC<{
  lang: AvailableLocale;
  searchParams: NewsPageProps['searchParams'];
}> = async ({ lang, searchParams }) => {
  const { page } = await searchParams;

  return <BlogIndexPageBody lang={lang} page={page} />;
};

const Page: NextPage<NewsPageProps> = async ({ params, searchParams }) => {
  const { lang } = await params;

  return (
    <>
      <BlogIndexPageHeader lang={lang} />
      <Suspense fallback={null}>
        <PaginatedBody lang={lang} searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default Page;
