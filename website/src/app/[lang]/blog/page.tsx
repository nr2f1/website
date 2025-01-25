import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import BlogPageBody from './page-body';
import BlogPageHeader from './page-header';

export const metadata: Metadata = {
  title: 'NR2F1 Foundation | Blog',
  description: 'Blog',
};

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <BlogPageHeader lang={lang} />
      <BlogPageBody lang={lang} />
    </>
  );
};

export default Page;
