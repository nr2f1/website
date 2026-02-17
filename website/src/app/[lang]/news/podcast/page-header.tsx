import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPodcastPageHeaderDocument,
  type GetPodcastPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { podcastIndexPageHeaderId } from '@models/page-header';

interface NewsPageHeaderProps {
  lang: AvailableLocale;
}

const PodcastPageHeader: React.FC<NewsPageHeaderProps> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query<GetPodcastPageHeaderQuery>({
    query: GetPodcastPageHeaderDocument,
    variables: {
      id: podcastIndexPageHeaderId,
      locale: lang,
    },
  });

  if (error || !data || !data.pageHeader || !data.lastUpdated) {
    return null;
  }

  const {
    pageHeader: { title },
    lastUpdated: { items },
  } = data;

  const lastUpdated = items[0]?.date;

  return (
    <PageHeader
      lang={lang}
      pageTitle={title ?? ''}
      lastUpdated={lastUpdated ?? ''}
    />
  );
};

export default PodcastPageHeader;
