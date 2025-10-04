import SupportBanner from '@components/support-banner';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import { livingWithBbsoasPageMetadataId } from '@models/metadata';
import { getAlternateUrls, routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata, NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import LivingWithBbsoasBottomBody from './page-bottom-body';
import LivingWithBbsoasHeader from './page-header';
import LivingWithBbsoasUpperBody from './page-upper-body';
import SupportGroupBanner from './support-group-banner';

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
      id: livingWithBbsoasPageMetadataId,
      locale: lang,
    },
  });

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    description,
    inLanguage: lang,
    keywords,
    name: title,
    url: `https://nr2f1.org${routes['living-with-bbsoas'](lang)}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LivingWithBbsoasHeader lang={lang} />
      <LivingWithBbsoasUpperBody lang={lang} />
      <SupportGroupBanner lang={lang} />
      <LivingWithBbsoasBottomBody lang={lang} />
      <SupportBanner lang={lang} />
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
      id: livingWithBbsoasPageMetadataId,
      locale: lang,
    },
  });

  const alternates = getAlternateUrls({
    locale: lang,
    route: 'living-with-bbsoas',
  });

  return {
    alternates,
    description,
    keywords,
    title: `NR2F1 Foundation | ${title}`,
  };
}
export default Page;
