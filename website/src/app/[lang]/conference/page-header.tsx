import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import { conferencePageHeaderId } from '@models/page-header';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';

const ConferenceHeader: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const { query } = getClient();

  // TODO: Change query
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      id: conferencePageHeaderId,
      locale: lang,
    },
  });

  if (
    error ||
    !data.pageHeader ||
    !data.pageHeader.title ||
    !data.pageHeader.lastUpdated ||
    !data.pageHeader?.image?.url
  ) {
    return null;
  }

  const {
    title,
    lastUpdated,
    image: { url: imageUrl },
  } = data.pageHeader;

  return (
    <PageHeader
      lang={lang}
      pageTitle={title}
      lastUpdated={lastUpdated}
      imageUrl={imageUrl}
    />
  );
};

export default ConferenceHeader;
