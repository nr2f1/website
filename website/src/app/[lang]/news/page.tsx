import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import NewsPageBody from './page-body';
import NewsPageHeader from './page-header';

export const metadata: Metadata = {
  description: 'News',
  // Todo: update i18n title and description
  title: 'NR2F1 Foundation | News',
};

interface NewsPageProps extends PagePropsWithLocale {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// todo: create getStaticProps

const Page: NextPage<NewsPageProps> = async ({ params, searchParams }) => {
  const { lang } = await params;
  const { page } = await searchParams;

  return (
    <>
      <NewsPageHeader lang={lang} />
      <NewsPageBody lang={lang} page={page} />
    </>
  );
};

export default Page;
