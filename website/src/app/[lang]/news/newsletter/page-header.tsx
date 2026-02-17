import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetNewsletterPageHeaderDocument,
  type GetNewsletterPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { newsletterIndexPageHeaderId } from '@models/page-header';

interface NewsPageHeaderProps {
  lang: AvailableLocale;
}

const NewsletterPageHeader: React.FC<NewsPageHeaderProps> = async ({
  lang,
}) => {
  const { query } = getClient();
  const { data, error } = await query<GetNewsletterPageHeaderQuery>({
    query: GetNewsletterPageHeaderDocument,
    variables: {
      id: newsletterIndexPageHeaderId,
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

export default NewsletterPageHeader;
