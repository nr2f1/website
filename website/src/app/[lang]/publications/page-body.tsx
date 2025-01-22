import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPublicationsPageDocument,
  type GetPublicationsPageQuery,
} from '@graphql/queries/publications-page/index.generated';
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

interface CleanedPublication {
  __typename: 'Publication';
  title: string;
  dateOfPublication: string;
  link: string | null;
  asset: {
    __typename: 'Asset';
    url: string;
  } | null;
}

interface PublicationWithLink {
  title: string;
  year: number;
  link: string;
}

type GroupedPublicationsByYear = Record<number, PublicationWithLink[]>;

const getPublicationWithLink = (
  publication: CleanedPublication,
): PublicationWithLink => {
  const { title, dateOfPublication, link, asset } = publication;
  return {
    title: title ?? '',
    year: new Date(dateOfPublication).getFullYear(),
    link: link ?? asset?.url ?? '',
  };
};

const getPublicationsByYear = (
  acc: GroupedPublicationsByYear,
  { title, year, link }: PublicationWithLink,
) => {
  if (!acc[year]) {
    acc[year] = [];
  }

  acc[year].push({ title, link, year });
  return acc;
};

interface PublicationsByYearProps {
  publications: CleanedPublication[];
}

const PublicationsByYear: React.FC<PublicationsByYearProps> = ({
  publications,
}) => {
  const publicationsByYear = publications
    .map(getPublicationWithLink)
    .reduce(getPublicationsByYear, {} as GroupedPublicationsByYear);

  return Object.entries(publicationsByYear).map(([year, publications]) => (
    <div key={crypto.randomUUID()}>
      <h3>{year}</h3>
      <ul>
        {publications.map(({ title, link }) => (
          <li key={crypto.randomUUID()}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  ));
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

  const patientResearchContentGroupByYear = (
    patientPublications?.items as CleanedPublication[]
  )
    .map(getPublicationWithLink)
    .reduce(getPublicationsByYear, {} as GroupedPublicationsByYear);

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(patientResearchHeading?.content ?? '')}>
          {patientResearchHeading?.content}
        </h2>
        {documentToReactComponents(patientResearchContent?.content?.json)}
        <PublicationsByYear
          publications={patientPublications?.items as CleanedPublication[]}
        />
      </section>
      <section>
        <h2 id={createHashLink(geneResearchHeading?.content ?? '')}>
          {geneResearchHeading?.content}
        </h2>
        {documentToReactComponents(geneResearchContent?.content?.json)}
        <PublicationsByYear
          publications={genePublications?.items as CleanedPublication[]}
        />
      </section>
    </PageBody>
  );
};

export default RegisterPageBody;
