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

const getIsoDurationString = (elapsed: number) => {
  const absElapsed = Math.abs(elapsed);

  const years = Math.floor(absElapsed / units.year);
  const remainingAfterYears = absElapsed % units.year;

  const months = Math.floor(remainingAfterYears / units.month);
  const remainingAfterMonths = remainingAfterYears % units.month;

  const days = Math.floor(remainingAfterMonths / units.day);
  const remainingAfterDays = remainingAfterMonths % units.day;

  const hours = Math.floor(remainingAfterDays / units.hour);
  const remainingAfterHours = remainingAfterDays % units.hour;

  const minutes = Math.floor(remainingAfterHours / units.minute);
  const remainingAfterMinutes = remainingAfterHours % units.minute;

  const seconds = Math.floor(remainingAfterMinutes / units.second);

  let durationString = 'P';

  // Date part
  if (years > 0) {
    durationString += `${years}Y`;
  }
  if (months > 0) {
    durationString += `${months}M`;
  }
  if (days > 0) {
    durationString += `${days}D`;
  }

  // Time part
  if (hours > 0 || minutes > 0 || seconds > 0) {
    durationString += 'T';
    if (hours > 0) {
      durationString += `${hours}H`;
    }
    if (minutes > 0) {
      durationString += `${minutes}M`;
    }
    if (seconds > 0) {
      durationString += `${seconds}S`;
    }
  }

  // Handle zero duration
  if (durationString === 'P') {
    return 'PT0S';
  }

  return durationString;
};

interface GetRelativeStringParams {
  elapsed: number;
  lang: AvailableLocale;
}

const getRelativeString = ({ elapsed, lang }: GetRelativeStringParams) => {
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

  for (const [unit, value] of Object.entries(units)) {
    if (Math.abs(elapsed) > value) {
      return rtf.format(
        Math.round(elapsed / value),
        unit as Intl.RelativeTimeFormatUnit,
      );
    }
  }
};

const getRelativeTime = ({
  from,
  to = new Date(),
  lang = 'en',
}: GetRelativeTime) => {
  const elapsed = from.getTime() - to.getTime();

  return {
    isoDurationString: getIsoDurationString(elapsed),
    relativeString: getRelativeString({ elapsed, lang }),
  };
};

export default getRelativeTime;
