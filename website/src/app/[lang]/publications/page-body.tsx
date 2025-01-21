import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPublicationsPageDocument,
  type GetPublicationsPageQuery,
} from '@graphql/queries/publications-page/index.generated';
import type { Maybe } from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import {
  geneResearchHeadingId,
  patientResearchHeadingId,
} from '@models/headings';
import {
  geneResearchContentId,
  patientResearchContentId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

type PublicationWithLink = {
  __typename?: 'Publication';
  title?: string | null;
  // biome-ignore lint/suspicious/noExplicitAny: that is how is auto generated
  dateOfPublication?: any | null;
  link?: string | null;
  asset?: { __typename?: 'Asset'; url?: string | null } | null;
} | null;

const publicationWithLink = (publication: Maybe<PublicationWithLink>) => {
  if (!publication) {
    return;
  }
  const { title, dateOfPublication, link, asset } = publication;
  return {
    title: title ?? '',
    year: new Date(dateOfPublication).getFullYear(),
    link: link ?? asset?.url ?? '',
  };
};

const RegisterPageBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const {
    data: {
      patientResearchHeading,
      patientResearchContent,
      patientPublications,
      geneResearchHeading,
      geneResearchContent,
      genePublications,
    },
    error,
  } = await query<GetPublicationsPageQuery>({
    query: GetPublicationsPageDocument,
    variables: {
      locale: lang,
      patientResearchHeadingId,
      patientResearchContentId,
      geneResearchHeadingId,
      geneResearchContentId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    patientResearchHeading?.content ?? '',
    geneResearchHeading?.content ?? '',
  ];

  const patientResearchContentWithLinks = patientPublications?.items
    .map(publicationWithLink)
    .filter(Boolean);

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(patientResearchHeading?.content ?? '')}>
          {patientResearchHeading?.content}
        </h2>
        {documentToReactComponents(patientResearchContent?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(geneResearchHeading?.content ?? '')}>
          {geneResearchHeading?.content}
        </h2>
        {documentToReactComponents(geneResearchContent?.content?.json)}
      </section>
    </PageBody>
  );
};

export default RegisterPageBody;
