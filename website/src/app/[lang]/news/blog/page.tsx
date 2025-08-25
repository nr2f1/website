import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import BlogIndexPageBody from './page-body';
import BlogIndexPageHeader from './page-header';

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { lang } = await params;

  return {
    alternates: {
      types: {
        'application/rss+xml': `/${lang}/news/blog/rss.xml`,
      },
    },
    // Todo: update i18n title and description
    description: 'News',
    title: 'NR2F1 Foundation | News',
  };
}

interface NewsPageProps extends PagePropsWithLocale {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// todo: create getStaticProps

const Page: NextPage<NewsPageProps> = async ({ params, searchParams }) => {
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
