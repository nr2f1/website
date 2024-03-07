import { match } from '@formatjs/intl-localematcher';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@i18n/locales';
import Negotiator from 'negotiator';
import { NextResponse, type NextRequest } from 'next/server';

const getLocale = (request: NextRequest) => {
  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') ?? '',
    },
  });

  const userLocales = negotiator.languages();
  return match(userLocales, AVAILABLE_LOCALES, DEFAULT_LOCALE);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = AVAILABLE_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/',
  ],
};
