import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fundraisePageHeaderId } from '@models/page-header';

interface FundraiseHeaderProps {
  lang: AvailableLocale;
}

const FundraiseHeader: React.FC<FundraiseHeaderProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: fundraisePageHeaderId,
      locale: lang,
    },
  });

  if (
    error ||
    !data.pageHeader ||
    !data.pageHeader.title ||
    !data.pageHeader.lastUpdated ||
    !data.pageHeader.image
  ) {
    return null;
  }

  const {
    title,
    lastUpdated,
    image: { url },
  } = data.pageHeader;

  return (
    <PageHeader
      lang={lang}
      pageTitle={title}
      lastUpdated={lastUpdated}
      imageUrl={url ?? ''}
    />
  );
};

export default FundraiseHeader;
