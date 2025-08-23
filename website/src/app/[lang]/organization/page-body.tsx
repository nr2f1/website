import PageBody from '@components/page-body';
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
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';

const { query } = getClient();

export const OrganizationPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const {
    data: {
      boardHeading,
      volunteersHeading,
      scientificHeading,
      researchHeading,
    },
    error,
  } = await query<GetOrganizationPageQuery>({
    query: GetOrganizationPageDocument,
    variables: {
      boardHeadingId,
      locale: lang,
      organizationResearchHeadingId,
      scientificHeadingId,
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

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(boardHeading?.content ?? '')}>
          {boardHeading?.content}
        </h2>
      </section>
      <section>
        <h2 id={createHashLink(volunteersHeading?.content ?? '')}>
          {volunteersHeading?.content}
        </h2>
      </section>
      <section>
        <h2 id={createHashLink(scientificHeading?.content ?? '')}>
          {scientificHeading?.content}
        </h2>
      </section>
      <section>
        <h2 id={createHashLink(researchHeading?.content ?? '')}>
          {researchHeading?.content}
        </h2>
      </section>
    </PageBody>
  );
};

export default OrganizationPageBody;
