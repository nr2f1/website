import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import { registerPatientPageHeaderId } from '@models/page-header';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage, ResolvingMetadata } from 'next';
import RegisterPageBody from './page-body';
import RegisterPageHeader from './page-header';

const { query } = getClient();

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

export async function generateMetadata(
  { params }: PagePropsWithLocale,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { lang } = await params;
  const {
    // @ts-ignore
    title: { absolute },
  } = await parent;

  const {
    data: {
      // @ts-ignore
      pageHeader: { title, sectionTitle },
    },
    error,
  } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      locale: lang,
      id: registerPatientPageHeaderId,
    },
  });

  if (error || !title || !sectionTitle || !absolute) {
    return {
      title: 'NR2F1 FOUNDATION | Register a patient',
    };
  }

  return {
    title: `${absolute} | ${title}`,
    description: sectionTitle,
  };
}
