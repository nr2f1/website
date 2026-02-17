import FundrasingCampaigns from '@components/fundraising-campaigns';
import StoreBanner from '@components/store-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { volunteerPageMetadataId } from '@models/metadata';
import { getAlternateUrls, routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import VolunteerBody from './page-body';
import VolunteerHeader from './page-header';


const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { query } = getClient();
  const { lang } = await params;

  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: volunteerPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    name: title,
    url: `https://nr2f1.org${routes.volunteer(lang)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VolunteerHeader lang={lang} />
      <VolunteerBody lang={lang} />
      <StoreBanner lang={lang} />
      <FundrasingCampaigns lang={lang} />
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
      id: volunteerPageMetadataId,
      locale: lang,
    },
  });

  const title = data?.htmlHeadMetadata?.title || '';
  const description = data?.htmlHeadMetadata?.description || '';
  const keywords = data?.htmlHeadMetadata?.keywords || '';

  const alternates = getAlternateUrls({
    locale: lang,
    route: 'volunteer',
  });

  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}

export default Page;
