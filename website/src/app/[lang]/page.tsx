import HomePageHero from '@components/homepage-hero';
import WhatWeDo from '@components/what-we-do';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <HomePageHero lang={lang} />
      <WhatWeDo lang={lang} />
    </>
  );
};

export default Page;
