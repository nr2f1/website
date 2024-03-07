export const english = 'en'; // 🇬🇧
export const french = 'fr'; // 🇫🇷
export const spanish = 'es'; // 🇪🇸
export const german = 'de'; // 🇩🇪

export const DEFAULT_LOCALE = english;
export const AVAILABLE_LOCALES = [english, spanish, french, german];

export interface LocaleParamsPath {
  params: {
    lang: string;
  };
}
