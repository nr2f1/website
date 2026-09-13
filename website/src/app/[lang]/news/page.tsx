import type { AvailableLocale } from '@i18n/locales';
import { getAlternateUrls } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import { Suspense } from 'react';
import NewsPageBody from './page-body';
import NewsPageHeader from './page-header';

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { lang } = await params;
  const alternates = getAlternateUrls({ locale: lang, route: 'news' });

  return {
    alternates,
    title: 'NR2F1 Foundation | News',
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

  return <NewsPageBody lang={lang} page={page} />;
};

const Page: NextPage<NewsPageProps> = async ({ params, searchParams }) => {
  const { lang } = await params;

  return (
    <>
      <NewsPageHeader lang={lang} />
      <Suspense fallback={null}>
        <PaginatedBody lang={lang} searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default Page;
