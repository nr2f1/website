import HomePageHero from '@components/homepage-hero';
import LatestNews from '@components/latest-news';
import MembershipsPartners from '@components/memberships-partners';
import SupportBanner from '@components/support-banner';
import WhatWeDo from '@components/what-we-do';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { homepageMetadataId } from '@models/metadata';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { Graph } from 'schema-dts';
import HomePageBanner from './banner';
import styles from './index.module.scss';

export async function generateMetadata({
  params,
}: PagePropsWithLocale): Promise<Metadata> {
  const { lang } = await params;

  const { query } = getClient();
  const { data, error } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: homepageMetadataId,
      locale: lang,
    },
  });

  if (
    error ||
    !data?.htmlHeadMetadata ||
    !data?.htmlHeadMetadata?.title ||
    !data?.htmlHeadMetadata?.description
  ) {
    return {
      description:
        'These rare mutations cause a neurodevelopmental disorder called BBSOAS - Bosch-Boonstra-Schaaf optic atrophy syndrome',
      title: 'NR2F1 Foundation | Homepage',
    };
  }

  const { title, description } = data.htmlHeadMetadata;

  return {
    description,
    title: `NR2F1 Foundation | ${title}`,
  };
}

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  const { query } = getClient();
  const { data } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      id: homepageMetadataId,
      locale: lang,
    },
  });

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        inLanguage: lang,
        name: data?.htmlHeadMetadata?.title || 'NR2F1 Foundation',
        url: 'https://nr2f1.org',
      },
      {
        '@type': 'Organization',
        description: data?.htmlHeadMetadata?.description || '',
        name: data?.htmlHeadMetadata?.title || 'NR2F1 Foundation',
        url: 'https://nr2f1.org',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className={styles['visibility-hidden']}>NR2F1 Foundation</h1>
      <HomePageHero lang={lang} />
      <WhatWeDo lang={lang} />
      <HomePageBanner lang={lang} />
      <SupportBanner lang={lang} />
      <LatestNews lang={lang} />
      <MembershipsPartners lang={lang} />
    </>
  );
};

export default Page;
