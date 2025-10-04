import { AVAILABLE_LOCALES, type AvailableLocale } from '@i18n/locales';
import type { Metadata } from 'next';
import type {
  AlternateLinkDescriptor,
  Languages,
} from 'next/dist/lib/metadata/types/alternative-urls-types';

type LocalisedRoute = (locale: AvailableLocale) => string;

export const BASE_URL = 'https://nr2f1.org';

interface BlogPostUrl {
  locale: AvailableLocale;
  slug: string;
}

export const blogPostUrl = ({ locale, slug }: BlogPostUrl) =>
  `/${locale}/news/blog/${slug}`;

type RouteProperty =
  | 'blog'
  | 'conference'
  | 'contact-us'
  | 'donate'
  | 'fundraise'
  | 'get-involved-in-bbsoas-research'
  | 'homepage'
  | 'living-with-bbsoas'
  | 'news'
  | 'newsletter'
  | 'organization'
  | 'our-financials'
  | 'partnerships'
  | 'podcast'
  | 'privacy-policy'
  | 'publications'
  | 'register-a-patient'
  | 'research'
  | 'resources-available-to-researchers'
  | 'strategic-plan'
  | 'support-groups'
  | 'support-us'
  | 'volunteer'
  | 'what-is-bbsoas';

export const routes: Record<RouteProperty, LocalisedRoute> = {
  blog: (locale: AvailableLocale) => `/${locale}/news/blog`,
  conference: (locale: AvailableLocale) => {
    return `/${locale}/conferences`;
  },
  'contact-us': (locale: AvailableLocale) => {
    return `/${locale}/contact-us`;
  },
  donate: (locale: AvailableLocale) => {
    return `/${locale}/donate`;
  },
  fundraise: (locale: AvailableLocale) => {
    return `/${locale}/fundraise`;
  },
  'get-involved-in-bbsoas-research': (locale: AvailableLocale) => {
    return `/${locale}/get-involved-in-bbsoas-research`;
  },
  homepage: (locale: AvailableLocale) => {
    return `/${locale}`;
  },
  'living-with-bbsoas': (locale: AvailableLocale) =>
    `/${locale}/living-with-bbsoas`,
  news: (locale: AvailableLocale) => {
    return `/${locale}/news`;
  },
  newsletter: (locale: AvailableLocale) => {
    return `/${locale}/news/newsletter`;
  },
  organization: (locale: AvailableLocale) => {
    return `/${locale}/organization`;
  },
  'our-financials': (locale: AvailableLocale) => {
    return `/${locale}/our-financials`;
  },
  partnerships: (locale: AvailableLocale) => {
    return `/${locale}/partnerships`;
  },
  podcast: (locale: AvailableLocale) => {
    return `/${locale}/news/podcast`;
  },
  'privacy-policy': (locale: AvailableLocale) => `/${locale}/privacy-policy`,
  publications: (locale: AvailableLocale) => {
    return `/${locale}/publications`;
  },
  'register-a-patient': (locale: AvailableLocale) => {
    return `/${locale}/register-a-patient`;
  },
  research: (locale: AvailableLocale) => {
    return `/${locale}/research`;
  },
  'resources-available-to-researchers': (locale: AvailableLocale) => {
    return `/${locale}/resources-available-to-researchers`;
  },
  'strategic-plan': (locale: AvailableLocale) => {
    return `/${locale}/strategic-plan`;
  },
  'support-groups': (locale: AvailableLocale) => {
    return `/${locale}/support-groups`;
  },
  'support-us': (locale: AvailableLocale) => {
    return `/${locale}/support-us`;
  },
  volunteer: (locale: AvailableLocale) => {
    return `/${locale}/volunteer`;
  },
  'what-is-bbsoas': (locale: AvailableLocale) => {
    return `/${locale}/what-is-bbsoas`;
  },
};

interface GetAlternateUrls {
  locale: AvailableLocale;
  route: RouteProperty;
}

export const getAlternateUrls = ({
  locale,
  route,
}: GetAlternateUrls): Metadata['alternates'] => {
  const canonicalUrl = BASE_URL + routes[route](locale);

  const languages = AVAILABLE_LOCALES.filter(
    (language) => language !== locale,
  ).reduce(
    (acc, language) => {
      acc[language] = BASE_URL + routes[route](language);
      return acc;
    },
    {} as Languages<null | string | URL | AlternateLinkDescriptor[]>,
  );

  return {
    canonical: canonicalUrl,
    languages,
  };
};
