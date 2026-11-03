import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import { GetPageHeaderDocument } from '@graphql/queries/page-header/index.generated';
import { drugRepurposingStudyPageHeaderId } from '@models/page-header';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';

const DrugRepurposingStudyPageHeader: React.FC<
  ComponentPropsWithLocale
> = async ({ lang }) => {
  const { query } = getClient();

  const { data, error } = await query({
    query: GetPageHeaderDocument,
    variables: {
      id: drugRepurposingStudyPageHeaderId,
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

export default DrugRepurposingStudyPageHeader;
