import PageBody from '@components/page-body';

import SupportBanner from '@components/support-banner';
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
import {
  caregiversHeadingId,
  dadsHeadingId,
  dadsUkHeadingId,
  facebookHeadingId,
  spanishParentsHeadingId,
  virtualParentsHeadingId,
} from '@models/headings';
import { supportGroupsPageMetadataId } from '@models/metadata';
import {
  caregiverParagraphsId,
  dadsParagraphsId,
  dadsUkParagraphsId,
  facebookParagraphsId,
  spanishParentsParagraphsId,
  supportGroupsIntroParagraphsId,
  virtualParentsParagraphsId,
} from '@models/paragraphs';
import { routes } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import type { Metadata, NextPage } from 'next';
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
      id: supportGroupsPageMetadataId,
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
    url: `https://nr2f1.org${routes['support-groups'](lang)}`,
  };

  const {
    data: {
      intropParagraphs,
      virtualParentsHeading,
      virtualParentsParagraphs,
      dadsHeading,
      dadsParagraphs,
      caregiversHeading,
      caregiverParagraphs,
      spanishParentsHeading,
      spanishParentsParagraphs,
      facebookHeading,
      facebookParagraphs,
      dadsUkHeading,
      dadsUkParagraphs,
    },
    error,
  } = await query<GetSupportGroupsPageQuery>({
    query: GetSupportGroupsPageDocument,
    variables: {
      caregiverParagraphsId,
      caregiversHeadingId,
      dadsHeadingId,
      dadsParagraphsId,
      dadsUkHeadingId,
      dadsUkParagraphsId,
      facebookHeadingId,
      facebookParagraphsId,
      locale: lang,
      spanishParentsHeadingId,
      spanishParentsParagraphsId,
      supportGroupsIntroParagraphsId,
      virtualParentsHeadingId,
      virtualParentsParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    virtualParentsHeading?.content ?? '',
    dadsHeading?.content ?? '',
    caregiversHeading?.content ?? '',
    spanishParentsHeading?.content ?? '',
    facebookHeading?.content ?? '',
    dadsUkHeading?.content ?? '',
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
        <section>
          <h2 id={createHashLink(virtualParentsHeading?.content ?? '')}>
            {virtualParentsHeading?.content}
          </h2>
          {documentToReactComponents(virtualParentsParagraphs?.content?.json)}
        </section>
        <section>
          <h2 id={createHashLink(dadsHeading?.content ?? '')}>
            {dadsHeading?.content}
          </h2>
          {documentToReactComponents(dadsParagraphs?.content?.json)}
        </section>
        <section>
          <h2 id={createHashLink(caregiversHeading?.content ?? '')}>
            {caregiversHeading?.content}
          </h2>
          {documentToReactComponents(caregiverParagraphs?.content?.json)}
        </section>
        <section>
          <h2 id={createHashLink(spanishParentsHeading?.content ?? '')}>
            {spanishParentsHeading?.content}
          </h2>
          {documentToReactComponents(spanishParentsParagraphs?.content?.json)}
        </section>
        <section>
          <h2 id={createHashLink(facebookHeading?.content ?? '')}>
            {facebookHeading?.content}
          </h2>
          {documentToReactComponents(facebookParagraphs?.content?.json)}
        </section>
        <section>
          <h2 id={createHashLink(dadsUkHeading?.content ?? '')}>
            {dadsUkHeading?.content}
          </h2>
          {documentToReactComponents(dadsUkParagraphs?.content?.json)}
        </section>
      </PageBody>
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
      id: supportGroupsPageMetadataId,
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
