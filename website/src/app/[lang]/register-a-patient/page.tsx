import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { registerPatientPageMetadataId } from '@models/metadata';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { Graph, MedicalStudy, WebPage, WithContext } from 'schema-dts';
import RegisterPageBody from './page-body';
import RegisterPageHeader from './page-header';

const { query } = getClient();

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  const {
    data: {
      // @ts-ignore
      htmlHeadMetadata: { title, description },
    },
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      locale: lang,
      id: registerPatientPageMetadataId,
    },
  });

  const medicalStudy: WithContext<MedicalStudy> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalStudy',
    name: title,
    description,
    potentialAction: [
      {
        '@type': 'RegisterAction',
        target: `https://nr2f1.org/${lang}/register-patient`,
        name: title,
      },
    ],
  };

  const webPage: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `https://nr2f1.org/${lang}/register-a-patient`,
    name: title,
    description,
    inLanguage: lang,
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
  const { lang } = await params;

  const {
    data: {
      // @ts-ignore
      htmlHeadMetadata: { title, description, keywords },
    },
    error,
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      locale: lang,
      id: registerPatientPageMetadataId,
    },
  });

  return {
    title: `NR2F1 Foundation | ${title}`,
    description,
    keywords,
  };
}
