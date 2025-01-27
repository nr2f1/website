'use server';

import { match } from '@formatjs/intl-localematcher';
import {
  AVAILABLE_LOCALES,
  type AvailableLocale,
  DEFAULT_LOCALE,
  changeLocaleFormat,
} from '@i18n/locales';
import Negotiator from 'negotiator';
import { headers } from 'next/headers';

export const getUserLocales = async () => {
  const headersList = await headers();

  const negotiator = new Negotiator({
    headers: {
      'accept-language': headersList.get('accept-language') ?? '',
    },
  });

  return negotiator.languages().map(changeLocaleFormat);
};

export const getLocale = async () => {
  const userLocales = await getUserLocales();
  const lang = match(
    userLocales,
    AVAILABLE_LOCALES,
    DEFAULT_LOCALE,
  ) as AvailableLocale;

  return lang;
};
