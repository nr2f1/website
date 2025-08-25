import { query } from '@graphql/client';
import {
  GetBlogPostsSlugsDocument,
  type GetBlogPostsSlugsQuery,
} from '@graphql/queries/news/index.generated';
import { AVAILABLE_LOCALES } from '@i18n/locales';
import { BASE_URL, blogPostUrl, routes } from '@routes/index';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const base = Object.values(routes).map((route) => {
    const url = `${BASE_URL}${route('en')}`;
    const lastModified = now;

    const languages = AVAILABLE_LOCALES.reduce(
      (acc, locale) => {
        acc[locale] = `${BASE_URL}${route(locale)}`;

        return acc;
      },
      {} as Record<string, string>,
    );

    return {
      alternates: {
        languages,
      },
      lastModified,
      url,
    };
  });

  const { data } = await query<GetBlogPostsSlugsQuery>({
    query: GetBlogPostsSlugsDocument,
  });

  const blogPosts =
    data.blogPageCollection?.items
      .map((item) => {
        if (!item?.date || !item?.slug) return null;

        const { date, slug } = item;
        const url = `${BASE_URL}${blogPostUrl({ locale: 'en', slug })}`;
        const lastModified = date;

        const languages = AVAILABLE_LOCALES.reduce(
          (acc, locale) => {
            acc[locale] = `${BASE_URL}${blogPostUrl({ locale, slug })}`;

            return acc;
          },
          {} as Record<string, string>,
        );

        return {
          alternates: {
            languages,
          },
          lastModified,
          url,
        };
      })
      .filter((post) => post !== null) || [];

  return [...base, ...blogPosts];
}
