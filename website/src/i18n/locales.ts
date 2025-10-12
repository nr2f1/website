export type AvailableLocale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt-BR';

export const english: AvailableLocale = 'en'; // 🇬🇧
export const french: AvailableLocale = 'fr'; // 🇫🇷
export const spanish: AvailableLocale = 'es'; // 🇪🇸
export const german: AvailableLocale = 'de'; // 🇩🇪
export const italian: AvailableLocale = 'it'; // 🇮🇹
export const portuguese: AvailableLocale = 'pt-BR'; // 🇧🇷

export const DEFAULT_LOCALE = english;
export const AVAILABLE_LOCALES: AvailableLocale[] = [
  english,
  french,
  german,
  italian,
  portuguese,
  spanish,
];

export interface AvailableLocaleOption {
  label: string;
  value: AvailableLocale;
}

export const AVAILABLE_LOCALES_LABEL_KEYS: AvailableLocaleOption[] = [
  {
    label: 'Italiano',
    value: italian,
  },
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
  {
    label: 'Português (Brasil)',
    value: portuguese,
  },
].sort((a, b) => a.label.localeCompare(b.label));

export interface LocaleParamsPath {
  params: {
    lang: AvailableLocale;
  };
}

export type LocalisedString = Record<AvailableLocale, string>;

export const changeLocaleFormat = (locale: string) => locale.replace('_', '-');

export const metadataLanguages = AVAILABLE_LOCALES.reduce(
  (acc, lang) => {
    acc[lang] = `/${lang}`;
    return acc;
  },
  {} as Record<AvailableLocale, string>,
);
