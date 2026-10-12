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
  // Keep this as a guard so TypeScript narrows `url` to `string` in the switch.
  if (!url) {
    return '';
  }

  switch (true) {
    // Absolute, protocol-relative, mailto/tel, or in-page anchor...
    case /^(https?:)?\/\//i.test(url) || /^(mailto:|tel:|#)/i.test(url):
    // ...or any path that is not root-relative: leave untouched.
    case !url.startsWith('/'):
      return url;

    // The bare root becomes the localised homepage.
    case url === '/':
      return `/${lang}`;

    // Already starts with a known locale segment (e.g. `/en/donate`).
    // `/donate` -> ['', 'donate']; the first segment tells us if it is localised.
    case LOCALES.includes(url.split('/')[1] ?? ''):
      return url;

    // `/donate` -> `/<lang>/donate`.
    default:
      return `/${lang}${url}`;
  }
};
