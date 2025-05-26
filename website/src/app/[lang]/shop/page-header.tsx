import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { shopPageHeaderId } from '@models/page-header';

interface ShopHeaderProps {
  lang: AvailableLocale;
}

const ShopHeader: React.FC<ShopHeaderProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      locale: lang,
      id: shopPageHeaderId,
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

export default ShopHeader;
