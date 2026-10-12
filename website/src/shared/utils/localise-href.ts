import { AVAILABLE_LOCALES, type AvailableLocale } from '@i18n/locales';

const LOCALES: readonly string[] = AVAILABLE_LOCALES;

/**
 * Prefixes a root-relative internal path with the current locale so that links
 * resolve directly instead of bouncing through the locale redirect in
 * `proxy.ts` (a 307 on every navigation and prefetch).
 *
 * It is a no-op for anything that must not be touched:
 * - empty / nullish values (callers pass their own fallbacks)
 * - absolute and protocol-relative URLs (`https://`, `//cdn…`)
 * - `mailto:`, `tel:` and in-page anchors (`#…`)
 * - non-root-relative paths
 * - paths that already start with a known locale segment (e.g. `/en/donate`)
 *
 * The bare root `/` becomes `/<lang>` (the localised homepage).
 */
export const localiseHref = (
  url: string | null | undefined,
  lang: AvailableLocale,
): string => {
  if (!url) {
    return '';
  }

  // Absolute, protocol-relative, mailto/tel, or in-page anchor.
  if (/^(https?:)?\/\//i.test(url) || /^(mailto:|tel:|#)/i.test(url)) {
    return url;
  }

  // Only root-relative internal paths are localised.
  if (!url.startsWith('/')) {
    return url;
  }

  if (url === '/') {
    return `/${lang}`;
  }

  // `/donate` -> ['', 'donate']; the first segment tells us if it is localised.
  const firstSegment = url.split('/')[1];
  if (firstSegment && LOCALES.includes(firstSegment)) {
    return url;
  }

  return `/${lang}${url}`;
};
