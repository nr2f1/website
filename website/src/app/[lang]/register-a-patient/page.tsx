import SupportBanner from '@components/support-banner';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import RegisterPageBody from './page-body';
import RegisterPageHeader from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <RegisterPageHeader lang={lang} />
      <RegisterPageBody lang={lang} />
      <SupportBanner lang={lang} />
    </>
  );
};

export default Page;
