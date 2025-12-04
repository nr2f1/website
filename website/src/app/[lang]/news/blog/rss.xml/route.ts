import { query } from '@graphql/client';
import {
  GetAllBlogPostsForRssDocument,
  type GetAllBlogPostsForRssQuery,
} from '@graphql/queries/news/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { BASE_URL, blogPostUrl } from '@routes/index';
import type { NextRequest } from 'next/server';

const description: Record<AvailableLocale, string> = {
  de: 'Neueste Blogbeiträge über NR2F1 und Bosch-Boonstra-Schaaf Optikatrophy',
  en: 'Latest blog posts about NR2F1 and Bosch-Boonstra-Schaaf optic atrophy syndrome',
  es: 'Últimos artículos sobre NR2F1 y síndrome de atrofia óptica Bosch-Boonstra-Schaaf',
  fr: 'Derniers articles sur NR2F1 et syndrome de atrofia óptica Bosch-Boonstra-Schaaf',
  it: 'Ultimi articoli su NR2F1 e sindrome di atrofia ottica Bosch-Boonstra-Schaaf',
  'pt-BR':
    'Últimos artigos sobre NR2F1 e síndrome de atrofia óptica Bosch-Boonstra-Schaaf',
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;

  // Validate that lang is a valid AvailableLocale
  const validLang = lang as AvailableLocale;

  const currentDate = new Date().toUTCString();

  const { data } = await query<GetAllBlogPostsForRssQuery>({
    query: GetAllBlogPostsForRssDocument,
    variables: {
      locale: validLang,
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
      const postUrl = `${BASE_URL}${blogPostUrl({ locale: validLang, slug: post.slug ?? '' })}`;

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
      <description>${description[validLang] ?? description.en}</description>
      <language>${validLang}</language>
      <lastBuildDate>${currentDate}</lastBuildDate>
      <pubDate>${currentDate}</pubDate>
      <image>
        <url>${BASE_URL}/${validLang}/icon.svg</url>
        <width>502.93</width>
        <height>463.04</height>
      </image>
      ${rssItems}
    </channel>
  </rss>`;

  const headers = new Headers({
    'cache-control': 'public, max-age=3600',
    'content-type': 'application/xml',
  });

  return new Response(rssFeed, { headers });
}
