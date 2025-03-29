import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import StrategicPlanHeader from './page-header';
import StrategicPlanUpperBody from './page-upper-body';
import ResearchBanner from './research-banner';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <StrategicPlanHeader lang={lang} />
      <StrategicPlanUpperBody lang={lang} />
      <ResearchBanner lang={lang} />
    </>
  );
};

export default Page;
