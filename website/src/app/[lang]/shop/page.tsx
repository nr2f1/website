import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { shopPageMetadataId } from '@models/metadata';
import { routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import ShopBody from './page-body';
import ShopHeader from './page-header';

const { query } = getClient();

const Page: NextPage<PagePropsWithLocale> = async ({ params }) => {
  const { lang } = await params;

  const {
    data: {
      // @ts-ignore
      htmlHeadMetadata: { title, description, keywords },
    },
  } = await query<GetMetadataQuery>({
    query: GetMetadataDocument,
    variables: {
      locale: lang,
      id: shopPageMetadataId,
    },
  });

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `https://nr2f1.org${routes.shop(lang)}`,
    name: title,
    description,
    inLanguage: lang,
    keywords,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShopHeader lang={lang} />
      <ShopBody lang={lang} />
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
      locale: lang,
      id: shopPageMetadataId,
    },
  });

  return {
    title: `NR2F1 Foundation | ${title}`,
    description,
    keywords,
  };
}

export default Page;
