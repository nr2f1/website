import type { AvailableLocale } from '@i18n/locales';

type LocalisedRoute = (locale: AvailableLocale) => string;

type RouteProperty =
  | 'blog'
  | 'contact-us'
  | 'get-involved-in-bbsoas-research'
  | 'homepage'
  | 'living-with-bbsoas'
  | 'news'
  | 'newsletter'
  | 'our-financials'
  | 'partnerships'
  | 'podcast'
  | 'privacy-policy'
  | 'publications'
  | 'register-a-patient'
  | 'strategic-plan'
  | 'support-groups'
  | 'what-is-bbsoas';

export const routes: Record<RouteProperty, LocalisedRoute> = {
  blog: (locale: AvailableLocale) => {
    return `/${locale}/news/blog`;
  },
  'contact-us': (locale: AvailableLocale) => {
    return `/${locale}/contact-us`;
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
  'register-a-patient': (locale: AvailableLocale) =>
    `/${locale}/register-a-patient`,
  'strategic-plan': (locale: AvailableLocale) => `/${locale}/strategic-plan`,
  'support-groups': (locale: AvailableLocale) => `/${locale}/support-groups`,
  'what-is-bbsoas': (locale: AvailableLocale) => `/${locale}/what-is-bbsoas`,
};
