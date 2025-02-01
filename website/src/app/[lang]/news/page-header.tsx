import PageHeader from '@components/page-header';
import { getClient } from '@graphql/client';
import {
  GetBlogPageHeaderDocument,
  type GetBlogPageHeaderQuery,
} from '@graphql/queries/page-header/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { blogsPageHeaderId } from '@models/page-header';

interface BlogPageHeaderProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const BlogPageHeader: React.FC<BlogPageHeaderProps> = async ({ lang }) => {
  const { data, error } = await query<GetBlogPageHeaderQuery>({
    query: GetBlogPageHeaderDocument,
    variables: {
      locale: lang,
      id: blogsPageHeaderId,
    },
  });

  if (error || !data.pageHeader || !data.lastUpdated) {
    return null;
  }

  const {
    pageHeader: { title, sectionTitle },
    lastUpdated: { items },
  } = data;

  const lastUpdated = items[0]?.date;

  return (
    <PageHeader
      lang={lang}
      pageTitle={title ?? ''}
      sectionTitle={sectionTitle ?? ''}
      lastUpdated={lastUpdated ?? ''}
    />
  );
};

export default BlogPageHeader;
