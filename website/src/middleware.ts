import { match } from '@formatjs/intl-localematcher';
import {
  AVAILABLE_LOCALES,
  changeLocaleFormat,
  DEFAULT_LOCALE,
} from '@i18n/locales';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

const getLocale = (request: NextRequest) => {
  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') ?? '',
    },
  });

  const userLocales = negotiator.languages().map(changeLocaleFormat);

  return match(userLocales, AVAILABLE_LOCALES, DEFAULT_LOCALE);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = AVAILABLE_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const isApiRoute = pathname.startsWith('/api');
  const isStaticFile =
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/favicon.ico';

  if (pathnameHasLocale || isApiRoute || isStaticFile) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Apply middleware to all routes except API routes, Next.js internals, and static files
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
