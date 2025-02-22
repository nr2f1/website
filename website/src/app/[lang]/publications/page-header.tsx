import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { publicationsPageHeaderId } from '@models/page-header';

interface RegisterPageHeaderProps {
  lang: AvailableLocale;
}

const PublicationsPageHeader: React.FC<RegisterPageHeaderProps> = async ({
  lang,
}) => {
  const { query } = getClient();

  // TODO: Change query
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      locale: lang,
      id: publicationsPageHeaderId,
    },
  });

  if (
    error ||
    !data.pageHeader ||
    !data.pageHeader.title ||
    !data.pageHeader.sectionTitle ||
    !data.pageHeader.lastUpdated ||
    !data.pageHeader.image
  ) {
    return null;
  }

  const {
    title,
    sectionTitle,
    lastUpdated,
    image: { url },
  } = data.pageHeader;

  return (
    <PageHeader
      lang={lang}
      pageTitle={title}
      sectionTitle={sectionTitle}
      lastUpdated={lastUpdated}
      imageUrl={url ?? ''}
    />
  );
};

export default PublicationsPageHeader;
