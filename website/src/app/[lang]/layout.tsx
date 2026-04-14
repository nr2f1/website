import CookieBanner from '@components/cookie-banner';
import Footer from '@components/footer';
import Header from '@components/header';
import {
  AVAILABLE_LOCALES,
  type AvailableLocale,
  metadataLanguages,
} from '@i18n/locales';
import { BASE_URL } from '@routes/index';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
// @ts-expect-error
import { ViewTransition } from 'react';

const nunitoSans = Nunito_Sans({
  adjustFontFallback: false,
  display: 'swap',
  preload: false,
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: metadataLanguages,
  },
  metadataBase: new URL(BASE_URL),
  title: 'NR2F1 Foundation',
};

export async function generateStaticParams() {
  return AVAILABLE_LOCALES.map((lang) => ({ lang }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  const { lang } = await params;

  // Cast to AvailableLocale since Next.js routing ensures this will be valid
  const validLang = lang as AvailableLocale;

  return (
    <html
      lang={validLang}
      className={nunitoSans.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <CookieBanner lang={validLang} />
        <Header lang={validLang} />
        <ViewTransition enter="slide-in" exit="slide-out">
          <main>{children}</main>
        </ViewTransition>
        <Footer lang={validLang} />
      </body>
    </html>
  );
};

export default RootLayout;
