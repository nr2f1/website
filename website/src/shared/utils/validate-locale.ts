import { AVAILABLE_LOCALES } from '@i18n/locales';
import { notFound } from 'next/navigation';

/**
 * Validates that the provided locale is valid and calls notFound() if not.
 * This should be called at the beginning of page components and generateMetadata
 * functions before any GraphQL queries or other operations that depend on the locale.
 *
 * @param locale - The locale string to validate
 */
export const validateLocale = (locale: string) => {
  if (
    !AVAILABLE_LOCALES.includes(locale as (typeof AVAILABLE_LOCALES)[number])
  ) {
    notFound();
  }
};
