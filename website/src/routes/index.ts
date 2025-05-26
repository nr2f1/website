import type { AvailableLocale } from '@i18n/locales';

type LocalisedRoute = (locale: AvailableLocale) => string;

type RouteProperty =
  | 'homepage'
  | 'living-with-bbsoas'
  | 'news'
  | 'publications'
  | 'register-a-patient'
  | 'shop'
  | 'strategic-plan'
  | 'support-groups'
  | 'what-is-bbsoas';

export const routes: Record<RouteProperty, LocalisedRoute> = {
  homepage: (locale: AvailableLocale) => {
    return `/${locale}`;
  },
  'living-with-bbsoas': (locale: AvailableLocale) =>
    `/${locale}/living-with-bbsoas`,
  news: (locale: AvailableLocale) => {
    return `/${locale}/news`;
  },
  publications: (locale: AvailableLocale) => {
    return `/${locale}/publications`;
  },
  'register-a-patient': (locale: AvailableLocale) =>
    `/${locale}/register-a-patient`,
  shop: (locale: AvailableLocale) => `${locale}/shop`,
  'strategic-plan': (locale: AvailableLocale) => `/${locale}/strategic-plan`,
  'support-groups': (locale: AvailableLocale) => `/${locale}/support-groups`,
  'what-is-bbsoas': (locale: AvailableLocale) => `/${locale}/what-is-bbsoas`,
};
