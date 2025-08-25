import { AVAILABLE_LOCALES } from '@i18n/locales';
import { BASE_URL, routes } from '@routes/index';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const sitemap = Object.values(routes).map((route) => {
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

  return [
    {
      alternates: {
        languages: {
          de: 'https://acme.com/de',
          es: 'https://acme.com/es',
        },
      },
      lastModified: new Date(),
      url: 'https://acme.com',
    },
    {
      alternates: {
        languages: {
          de: 'https://acme.com/de/about',
          es: 'https://acme.com/es/about',
        },
      },
      lastModified: new Date(),
      url: 'https://acme.com/about',
    },
    {
      alternates: {
        languages: {
          de: 'https://acme.com/de/blog',
          es: 'https://acme.com/es/blog',
        },
      },
      lastModified: new Date(),
      url: 'https://acme.com/blog',
    },
  ];
}
