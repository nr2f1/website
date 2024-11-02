import type { AvailableLocale } from '@i18n/locales';

export interface PagePropsWithLocale {
  params: Promise<{ lang: AvailableLocale }>;
}
