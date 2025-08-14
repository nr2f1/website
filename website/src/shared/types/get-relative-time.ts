import type { AvailableLocale } from '@i18n/locales';

// in miliseconds
// biome-ignore assist/source/useSortedKeys: Must be in order!
const units: Record<Intl.RelativeTimeFormatUnit, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  years: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  months: (24 * 60 * 60 * 1000 * 365) / 12,
  week: 7 * 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minute: 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1000,
  second: 1000,
  quarter: (24 * 60 * 60 * 1000 * 365) / 4,
  quarters: (24 * 60 * 60 * 1000 * 365) / 4,
};

interface GetRelativeTime {
  from: Date;
  to: Date;
  lang?: AvailableLocale;
}

const getRelativeTime = ({
  from,
  to = new Date(),
  lang = 'en',
}: GetRelativeTime) => {
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

  const elapsed = from.getTime() - to.getTime();

  for (const [unit, value] of Object.entries(units)) {
    if (Math.abs(elapsed) > value) {
      return rtf.format(
        Math.round(elapsed / value),
        unit as Intl.RelativeTimeFormatUnit,
      );
    }
  }
};

export default getRelativeTime;
