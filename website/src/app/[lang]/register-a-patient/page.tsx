import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import RegisterPageHeader from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return <RegisterPageHeader lang={lang} />;
};

export default Page;
