import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { ourFinancialsPageHeaderId } from '@models/page-header';

interface OurFinancialsPageHeaderProps {
  lang: AvailableLocale;
}

const OurFinancialsPageHeader: React.FC<OurFinancialsPageHeaderProps> = async ({
  lang,
}) => {
  const { query } = getClient();

  // TODO: Change query
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: ourFinancialsPageHeaderId,
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

  const {
    title,

    lastUpdated,
  } = data.pageHeader;

  return <PageHeader lang={lang} pageTitle={title} lastUpdated={lastUpdated} />;
};

export default OurFinancialsPageHeader;
