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
export const AVAILABLE_LOCALES_LABEL_KEYS = [
  {
    label: 'Español',
    value: spanish,
  },
  {
    label: 'English (USA)',
    value: english,
  },
  {
    label: 'Français',
    value: french,
  },
  {
    label: 'Deutsch',
    value: german,
  },
];

export interface LocaleParamsPath {
  params: {
    lang: AvailableLocale;
  };
}
