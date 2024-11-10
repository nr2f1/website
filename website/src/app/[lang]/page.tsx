import HomePageHero from '@components/homepage-hero';
import SupportBanner from '@components/support-banner';
import WhatWeDo from '@components/what-we-do';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import HomePageBanner from './banner';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <HomePageHero lang={lang} />
      <WhatWeDo lang={lang} />
      <HomePageBanner lang={lang} />
      <SupportBanner lang={lang} />
    </>
  );
};

export default Page;
