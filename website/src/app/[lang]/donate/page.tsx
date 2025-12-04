import FundrasingCampaigns from '@components/fundraising-campaigns';
import StoreBanner from '@components/store-banner';

import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { donatePageMetadataId } from '@models/metadata';
import { getAlternateUrls, routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { validateLocale } from '@shared/utils/validate-locale';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import DonatePageBody from './page-body';
import DonateHeader from './page-header';

const { query } = getClient();

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  // Validate locale before any GraphQL queries
  validateLocale(lang);

  const {
    data: {
      // @ts-expect-error
      htmlHeadMetadata: { title, description },
    },
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: donatePageMetadataId,
      locale: lang,
    },
  });

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    name: title,
    url: `https://nr2f1.org${routes.donate(lang)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DonateHeader lang={lang} />
      <DonatePageBody lang={lang} />

      <StoreBanner lang={lang} />
      <FundrasingCampaigns lang={lang} />
    </>
  );
};

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { lang } = await params;

  // Validate locale before any GraphQL queries
  validateLocale(lang);

  const {
    data: {
      // @ts-expect-error
      htmlHeadMetadata: { title, description, keywords },
    },
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: donatePageMetadataId,
      locale: lang,
    },
  });

  const alternates = getAlternateUrls({ locale: lang, route: 'donate' });

  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}

export default Page;
