import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import BlogIndexPageBody from './page-body';
import NewsletterPageHeader from './page-header';

export const metadata: Metadata = {
  // Todo: update i18n title and description
  title: 'NR2F1 Foundation | Newsletters',
  description: 'Newsletters',
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
      <NewsletterPageHeader lang={lang} />
      <BlogIndexPageBody lang={lang} page={page} />
    </>
  );
};

export default Page;
