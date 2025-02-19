import type { AvailableLocale } from '@i18n/locales';

type LocalisedRoute = (locale: AvailableLocale) => string;

type RouteProperty = 'homepage';

export const routes: Record<RouteProperty, LocalisedRoute> = {
  homepage(locale: AvailableLocale) {
    return `/${locale}`;
  },
};
