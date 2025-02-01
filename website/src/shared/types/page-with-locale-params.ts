import type { AvailableLocale } from '@i18n/locales';

export interface PagePropsWithLocale {
  params: Promise<{ lang: AvailableLocale }>;
}

export interface NewsPagePropsWithLocale {
  params: Promise<{ lang: AvailableLocale; slug: string }>;
}
