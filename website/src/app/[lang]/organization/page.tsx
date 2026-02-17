import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { organizationPageMetadataId } from '@models/metadata';
import { BASE_URL, getAlternateUrls, routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import OrganizationPageBody from './page-body';
import OrganizationHeader from './page-header';


const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: organizationPageMetadataId,
      locale: lang,
    },
  });

  const htmlHeadMetadata = data?.htmlHeadMetadata;

  const title = htmlHeadMetadata?.title || '';
  const description = htmlHeadMetadata?.description || '';
  const keywords = htmlHeadMetadata?.keywords || '';

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    keywords,
    name: title,
    url: `${BASE_URL}${routes.organization(lang)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OrganizationHeader lang={lang} />
      <OrganizationPageBody lang={lang} />
      <SupportBanner lang={lang} />
    </>
  );
};

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: organizationPageMetadataId,
      locale: lang,
    },
  });

  const htmlHeadMetadata = data?.htmlHeadMetadata;

  const title = htmlHeadMetadata?.title || '';
  const description = htmlHeadMetadata?.description || '';
  const keywords = htmlHeadMetadata?.keywords || '';

  const alternates = getAlternateUrls({ locale: lang, route: 'organization' });

  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}
export default Page;
