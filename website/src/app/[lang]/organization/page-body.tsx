import Member from '@components/member';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetOrganizationPageDocument,
  type GetOrganizationPageQuery,
} from '@graphql/queries/pages/organization/index.generated';
import {
  boardHeadingId,
  organizationResearchHeadingId,
  scientificHeadingId,
  volunteersHeadingId,
} from '@models/headings';
import {
  boardParagraphsId,
  organizationResearchParagraphsId,
  scientificParagraphsId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import type { NGO, WithContext } from 'schema-dts';
import styles from './index.module.scss';

const { query } = getClient();

export const OrganizationPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const {
    data: {
      boardHeading,
      boardParagraphs,
      volunteersHeading,
      scientificHeading,
      researchHeading,
      scientificParagraphs,
      researchParagraphs,
      boardMembers,
      volunteersMembers,
      scientificMembers,
      researchMembers,
    },
    error,
  } = await query<GetOrganizationPageQuery>({
    query: GetOrganizationPageDocument,
    variables: {
      boardHeadingId,
      boardParagraphsId,
      locale: lang,
      organizationResearchHeadingId,
      organizationResearchParagraphsId,
      scientificHeadingId,
      scientificParagraphsId,
      volunteersHeadingId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    boardHeading?.content ?? '',
    volunteersHeading?.content ?? '',
    scientificHeading?.content ?? '',
    researchHeading?.content ?? '',
  ];

  const allMembers = [
    ...(boardMembers?.items || []),
    ...(volunteersMembers?.items || []),
    ...(scientificMembers?.items || []),
    ...(researchMembers?.items || []),
  ].map((member) => ({
    '@type': 'Person' as const,
    email: member?.email || undefined,
    image: member?.image?.url || undefined,
    jobTitle: member?.title || undefined,
    name: member?.name || undefined,
  }));

  const jsonLd: WithContext<NGO> = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    members: allMembers,
  };

  return (
    <PageBody lang={lang} headings={headings}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <h2 id={createHashLink(boardHeading?.content ?? '')}>
          {boardHeading?.content}
        </h2>
        {documentToReactComponents(boardParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {boardMembers?.items?.map((member) => {
            return (
              <Member
                key={crypto.randomUUID()}
                name={member?.name}
                image={member?.image ?? null}
                title={member?.title ?? null}
                email={member?.email ?? null}
                lang={lang}
                about={documentToReactComponents(member?.about?.json)}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(volunteersHeading?.content ?? '')}>
          {volunteersHeading?.content}
        </h2>

        <div className={styles.organization__members}>
          {volunteersMembers?.items?.map((member) => {
            return (
              <Member
                key={crypto.randomUUID()}
                name={member?.name}
                image={member?.image ?? null}
                email={member?.email ?? null}
                lang={lang}
                about={documentToReactComponents(member?.about?.json)}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(scientificHeading?.content ?? '')}>
          {scientificHeading?.content}
        </h2>
        {documentToReactComponents(scientificParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {scientificMembers?.items?.map((member) => {
            return (
              <Member
                key={crypto.randomUUID()}
                name={member?.name}
                image={member?.image ?? null}
                email={member?.email ?? null}
                lang={lang}
                about={documentToReactComponents(member?.about?.json)}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(researchHeading?.content ?? '')}>
          {researchHeading?.content}
        </h2>
        {documentToReactComponents(researchParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {researchMembers?.items?.map((member) => {
            return (
              <Member
                key={crypto.randomUUID()}
                name={member?.name}
                image={member?.image ?? null}
                email={member?.email ?? null}
                lang={lang}
                about={documentToReactComponents(member?.about?.json)}
              />
            );
          })}
        </div>
      </section>
    </PageBody>
  );
};

export default OrganizationPageBody;
