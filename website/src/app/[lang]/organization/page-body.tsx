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
  const { data, error } = await query<GetOrganizationPageQuery>({
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

  if (error || !data) {
    return null;
  }

  const headings = [
    data.boardHeading?.content ?? '',
    data.volunteersHeading?.content ?? '',
    data.scientificHeading?.content ?? '',
    data.researchHeading?.content ?? '',
  ];

  const allMembers = [
    ...(data.boardMembers?.items || []),
    ...(data.volunteersMembers?.items || []),
    ...(data.scientificMembers?.items || []),
    ...(data.researchMembers?.items || []),
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
        <h2 id={createHashLink(data.boardHeading?.content ?? '')}>
          {data.boardHeading?.content}
        </h2>
        {documentToReactComponents(data.boardParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {data.boardMembers?.items?.map((member) => {
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
        <h2 id={createHashLink(data.volunteersHeading?.content ?? '')}>
          {data.volunteersHeading?.content}
        </h2>

        <div className={styles.organization__members}>
          {data.volunteersMembers?.items?.map((member) => {
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
        <h2 id={createHashLink(data.scientificHeading?.content ?? '')}>
          {data.scientificHeading?.content}
        </h2>
        {documentToReactComponents(data.scientificParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {data.scientificMembers?.items?.map((member) => {
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
        <h2 id={createHashLink(data.researchHeading?.content ?? '')}>
          {data.researchHeading?.content}
        </h2>
        {documentToReactComponents(data.researchParagraphs?.content?.json)}

        <div className={styles.organization__members}>
          {data.researchMembers?.items?.map((member) => {
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
