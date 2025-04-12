import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetMetadataDocument,
  type GetMetadataQuery,
} from '@graphql/queries/metadata/index.generated';
import {
  GetSupportGroupsPageDocument,
  type GetSupportGroupsPageQuery,
} from '@graphql/queries/pages/support-groups/index.generated';
import { supportGroupsPageMetadataId } from '@models/metadata';
import { supportGroupsIntroParagraphsId } from '@models/paragraphs';
import { routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { NextPage } from 'next';
import type { WebPage, WithContext } from 'schema-dts';
import SupportGroupsHeader from './page-header';

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
      id: supportGroupsPageMetadataId,
    },
  });

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `https://nr2f1.org${routes['support-groups'](lang)}`,
    name: title,
    description,
    inLanguage: lang,
    keywords,
  };

  const {
    data: { intropParagraphs },
    error,
  } = await query<GetSupportGroupsPageQuery>({
    query: GetSupportGroupsPageDocument,
    variables: {
      locale: lang,
      supportGroupsIntroParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    'Support Groups',
    'Find a Support Group',
    'Start a Support Group',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupportGroupsHeader lang={lang} />
      <PageBody lang={lang} headings={headings}>
        <section>
          {documentToReactComponents(intropParagraphs?.content?.json)}
        </section>
      </PageBody>
    </>
  );
};

export default Page;
