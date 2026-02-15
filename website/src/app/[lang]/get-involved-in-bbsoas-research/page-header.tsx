import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { getInvolvedInBbsoasResearchHeaderPageHeaderId } from '@models/page-header';

interface GetInvolvedInBbsoasResearchHeaderProps {
  lang: AvailableLocale;
}

const GetInvolvedInBbsoasResearchHeader: React.FC<
  GetInvolvedInBbsoasResearchHeaderProps
> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: getInvolvedInBbsoasResearchHeaderPageHeaderId,
      locale: lang,
    },
  });

  if (
    error ||
    !data ||
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

export default GetInvolvedInBbsoasResearchHeader;
