import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import BlogPageBody from './page-body';
import BlogPageHeader from './page-header';

export const metadata: Metadata = {
  title: 'NR2F1 Foundation | Blog',
  description: 'Blog',
};

interface BlogPageProps extends PagePropsWithLocale {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// todo: create getStaticProps

const Page: NextPage<BlogPageProps> = async ({ params, searchParams }) => {
  const { lang } = await params;
  const { page } = await searchParams;

  return (
    <>
      <BlogPageHeader lang={lang} />
      <BlogPageBody lang={lang} page={page} />
    </>
  );
};

export default Page;
