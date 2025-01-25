import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetPageHeaderDocument,
  type GetPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { blogsPageHeaderId } from '@models/page-header';

interface BlogPageHeaderProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const BlogPageHeader: React.FC<BlogPageHeaderProps> = async ({ lang }) => {
  const { data, error } = await query<GetPageHeaderQuery>({
    query: GetPageHeaderDocument,
    variables: {
      locale: lang,
      id: blogsPageHeaderId,
    },
  });

  if (error || !data.pageHeader) {
    return null;
  }

  const { title, sectionTitle, lastUpdated } = data.pageHeader;

  console.log({ title, sectionTitle, lastUpdated });

  return (
    <PageHeader
      lang={lang}
      pageTitle={title ?? ''}
      sectionTitle={sectionTitle ?? ''}
      lastUpdated={lastUpdated}
    />
  );
};

export default BlogPageHeader;
