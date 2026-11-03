import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import { GetMetadataDocument } from '@graphql/queries/metadata/index.generated';
import { drugRepurposingStudyPageMetadataId } from '@models/metadata';
import { BASE_URL, getAlternateUrls, routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type {
  Graph,
  MedicalObservationalStudy,
  WebPage,
  WithContext,
} from 'schema-dts';
import DrugRepurposingStudyPageBody from './page-body';
import DrugRepurposingStudyPageHeader from './page-header';

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query({
    query: GetMetadataDocument,
    variables: {
      id: drugRepurposingStudyPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';
  const url = `${BASE_URL}${routes['drug-repurposing-observational-study'](lang)}`;

  const study: WithContext<MedicalObservationalStudy> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalObservationalStudy',
    description,
    name: title,
    sponsor: {
      '@type': 'Organization',
      name: 'NR2F1 Foundation',
      url: BASE_URL,
    },
    url,
  };

  const webPage: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    name: title,
    url,
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [study, webPage],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DrugRepurposingStudyPageHeader lang={lang} />
      <DrugRepurposingStudyPageBody lang={lang} />
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

  const { data } = await query({
    query: GetMetadataDocument,
    variables: {
      id: drugRepurposingStudyPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';
  const keywords = data?.htmlHeadMetadata?.keywords || '';

  const alternates = getAlternateUrls({
    locale: lang,
    route: 'drug-repurposing-observational-study',
  });

  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}
