import type { AvailableLocale } from '@i18n/locales';

interface GetIntlDateStringsProps {
  locale: AvailableLocale;
  date: string;
}

export const getIntlDateStrings = ({
  locale,
  date,
}: GetIntlDateStringsProps) => {
  const publishedDate = new Date(date);

  const publishedString = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
  }).format(publishedDate);

  const dateTime = new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
  }).format(publishedDate);

  return { publishedString, dateTime };
};
