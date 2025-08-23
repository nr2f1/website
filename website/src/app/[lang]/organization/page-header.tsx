import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import { organizationPageHeaderId } from '@models/page-header';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';

const OrganizationHeader: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const { query } = getClient();

  // TODO: Change query
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: organizationPageHeaderId,
      locale: lang,
    },
  });

  if (
    error ||
    !data.pageHeader ||
    !data.pageHeader.title ||
    !data.pageHeader.lastUpdated
  ) {
    return null;
  }

  const { title, lastUpdated } = data.pageHeader;

  return <PageHeader lang={lang} pageTitle={title} lastUpdated={lastUpdated} />;
};

export default OrganizationHeader;
