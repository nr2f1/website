import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { registerPatientPageHeaderId } from '@models/page-header';

interface RegisterPageHeaderProps {
  lang: AvailableLocale;
}

const RegisterPageHeader: React.FC<RegisterPageHeaderProps> = async ({
  lang,
}) => {
  const { query } = getClient();

  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      locale: lang,
      id: registerPatientPageHeaderId,
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

export default RegisterPageHeader;
