import { AVAILABLE_LOCALES } from '@i18n/locales';
import { BASE_URL, blogPostUrl, routes } from '@routes/index';
import { getAllBlogPosts } from '@services/contentful/blog-posts';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes have no reliable edit date, so they omit lastModified.
  // Google ignores a lastmod that changes on every request.
  const base = Object.values(routes).map((route) => {
    const url = `${BASE_URL}${route('en')}`;

    const languages = AVAILABLE_LOCALES.reduce(
      (acc, locale) => {
        acc[locale] = `${BASE_URL}${route(locale)}`;

        return acc;
      },
      { 'x-default': url } as Record<string, string>,
    );

    return {
      alternates: {
        languages,
      },
      url,
    };
  });

  const blogPosts = (await getAllBlogPosts()).map(({ publishedAt, slug }) => {
    const url = `${BASE_URL}${blogPostUrl({ locale: 'en', slug })}`;

    const languages = AVAILABLE_LOCALES.reduce(
      (acc, locale) => {
        acc[locale] = `${BASE_URL}${blogPostUrl({ locale, slug })}`;

        return acc;
      },
      { 'x-default': url } as Record<string, string>,
    );

    return {
      alternates: {
        languages,
      },
      // Last publish in Contentful, so edits show up as changes.
      lastModified: publishedAt ?? undefined,
      url,
    };
  });

  return [...base, ...blogPosts];
}
