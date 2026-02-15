import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { volunteerPageHeaderId } from '@models/page-header';

interface VolunteerHeaderProps {
  lang: AvailableLocale;
}

const VolunteerHeader: React.FC<VolunteerHeaderProps> = async ({ lang }) => {
  const { query } = getClient();

  // TODO: Change query
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: volunteerPageHeaderId,
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

export default VolunteerHeader;
