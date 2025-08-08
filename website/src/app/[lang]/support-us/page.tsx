import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { ourFinancialsPageMetadataId } from '@models/metadata';
import { routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import SupportUsPageBody from './page-body';
import SupportUsHeader from './page-header';
import SupportUsCards from '@components/support-us-cards';
import StoreBanner from '@components/store-banner';
import FundrasingCampaigns from '@components/fundraising-campaigns';

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
      id: ourFinancialsPageMetadataId,
      locale: lang,
    },
  });

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    name: title,
    url: `https://nr2f1.org${routes['support-us'](lang)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupportUsHeader lang={lang} />
      <SupportUsPageBody lang={lang} />
      <SupportUsCards lang={lang} />
      <StoreBanner lang={lang} />
      <FundrasingCampaigns lang={lang} />
    </>
  );
};

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { lang } = await params;

  const {
    data: {
      // @ts-ignore
      htmlHeadMetadata: { title, description, keywords },
    },
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: ourFinancialsPageMetadataId,
      locale: lang,
    },
  });

  return {
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}

export default Page;
