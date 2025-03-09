import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import WhatIsBbsoasBody from './page-body';
import WhatIsBbsoas from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <WhatIsBbsoas lang={lang} />
      <WhatIsBbsoasBody lang={lang} />
    </>
  );
};

export default Page;
