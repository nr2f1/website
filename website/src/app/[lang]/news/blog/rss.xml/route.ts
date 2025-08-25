import { query } from '@graphql/client';
import {
  GetAllBlogPostsForRssDocument,
  type GetAllBlogPostsForRssQuery,
} from '@graphql/queries/news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { BASE_URL, blogPostUrl } from '@routes/index';
import type { NewsPagePropsWithLocale } from '@shared/types/page-with-locale-params';

const description: Record<AvailableLocale, string> = {
  de: 'Neueste Blogbeiträge über NR2F1 und Bosch-Boonstra-Schaaf Optikatrophy',
  en: 'Latest blog posts about NR2F1 and Bosch-Boonstra-Schaaf optic atrophy syndrome',
  es: 'Últimos artículos sobre NR2F1 y síndrome de atrofia óptica Bosch-Boonstra-Schaaf',
  fr: 'Derniers articles sur NR2F1 et syndrome de atrofia óptica Bosch-Boonstra-Schaaf',
};

export async function GET(
  _request: Request,
  { params }: NewsPagePropsWithLocale,
) {
  const { lang } = await params;

  const currentDate = new Date().toUTCString();

  const { data } = await query<GetAllBlogPostsForRssQuery>({
    query: GetAllBlogPostsForRssDocument,
    variables: {
      locale: lang,
    },
  });

  if (!data) {
    return new Response('Internal Server Error', { status: 500 });
  }

  const blogPosts = data?.blogPageCollection?.items ?? [];

  const rssItems = blogPosts
    .filter((post) => post?.slug && post?.date && post?.title)
    .map((post) => {
      if (!post) return '';
      const postUrl = `${BASE_URL}${blogPostUrl({ locale: lang, slug: post.slug ?? '' })}`;

      return `<item>
        <title><![CDATA[${post.title}]]></title>
        <link>${postUrl}</link>
        <guid>${postUrl}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>NR2F1 Blog</title>
      <link>${BASE_URL}</link>
      <description>${description[lang] ?? description.en}</description>
      <language>${lang}</language>
      <lastBuildDate>${currentDate}</lastBuildDate>
      <pubDate>${currentDate}</pubDate>
      ${rssItems}
    </channel>
  </rss>`;

  const headers = new Headers({
    'cache-control': 'public, max-age=3600',
    'content-type': 'application/xml',
  });

  return new Response(rssFeed, { headers });
}
