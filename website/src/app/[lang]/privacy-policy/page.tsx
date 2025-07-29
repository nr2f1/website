import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import PrivacyPolicyPageBody from './page-body';
import PrivacyPolicyPageHeader from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <PrivacyPolicyPageHeader lang={lang} />
      <PrivacyPolicyPageBody lang={lang} />
    </>
  );
};

export default Page;
