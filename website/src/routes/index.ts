import type { AvailableLocale } from '@i18n/locales';

type LocalisedRoute = (locale: AvailableLocale) => string;

type RouteProperty =
  | 'homepage'
  | 'news'
  | 'publications'
  | 'register-a-patient'
  | 'what-is-bbsoas';

export const routes: Record<RouteProperty, LocalisedRoute> = {
  homepage(locale: AvailableLocale) {
    return `/${locale}`;
  },
  news(locale: AvailableLocale) {
    return `/${locale}/news`;
  },
  publications(locale: AvailableLocale) {
    return `/${locale}/publications`;
  },
  'register-a-patient': (locale: AvailableLocale) =>
    `/${locale}/register-a-patient`,
  'what-is-bbsoas': (locale: AvailableLocale) => `/${locale}/'what-is-bbsoas'`,
};
