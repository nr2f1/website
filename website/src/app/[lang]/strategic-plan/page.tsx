import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import StrategicPlanBody from './page-body';
import StrategicPlanHeader from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <StrategicPlanHeader lang={lang} />
      <StrategicPlanBody lang={lang} />
    </>
  );
};

export default Page;
