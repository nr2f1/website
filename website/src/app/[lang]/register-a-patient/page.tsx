import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { registerPatientPageMetadataId } from '@models/metadata';
import { getAlternateUrls } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { Graph, MedicalStudy, WebPage, WithContext } from 'schema-dts';
import RegisterPageBody from './page-body';
import RegisterPageHeader from './page-header';


const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: registerPatientPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';

  const medicalStudy: WithContext<MedicalStudy> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalStudy',
    description,
    name: title,
    potentialAction: [
      {
        '@type': 'RegisterAction',
        name: title,
        target: `https://nr2f1.org/${lang}/register-patient`,
      },
    ],
  };

  const webPage: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    name: title,
    url: `https://nr2f1.org/${lang}/register-a-patient`,
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [medicalStudy, webPage],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RegisterPageHeader lang={lang} />
      <RegisterPageBody lang={lang} />
      <SupportBanner lang={lang} />
    </>
  );
};

export default Page;

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: registerPatientPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';
  const keywords = data?.htmlHeadMetadata?.keywords || '';

  const alternates = getAlternateUrls({
    locale: lang,
    route: 'register-a-patient',
  });
  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}
