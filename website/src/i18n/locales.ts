export type AvailableLocale = 'en' | 'es' | 'fr' | 'de';

export const english: AvailableLocale = 'en'; // 🇬🇧
export const french: AvailableLocale = 'fr'; // 🇫🇷
export const spanish: AvailableLocale = 'es'; // 🇪🇸
export const german: AvailableLocale = 'de'; // 🇩🇪

export const DEFAULT_LOCALE = english;
export const AVAILABLE_LOCALES: AvailableLocale[] = [
  english,
  spanish,
  french,
  german,
];

export interface LocaleParamsPath {
  params: {
    lang: AvailableLocale;
  };
}
