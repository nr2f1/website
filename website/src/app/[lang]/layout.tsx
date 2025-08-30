import CookieBanner from '@components/cookie-banner';
import Footer from '@components/footer';
import Header from '@components/header';
import { AVAILABLE_LOCALES } from '@i18n/locales';
import { BASE_URL } from '@routes/index';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { unstable_ViewTransition as ViewTransition } from 'react';

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
    languages: {
      de: '/de',
      en: '/en',
      es: '/es',
      fr: '/fr',
    },
  },
  metadataBase: new URL(BASE_URL),
  title: 'NR2F1 Foundation',
};

export async function generateStaticParams() {
  return AVAILABLE_LOCALES.map((lang) => ({ lang }));
}

interface RootLayoutProps extends PagePropsWithLocale {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={nunitoSans.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <CookieBanner lang={lang} />
        <Header lang={lang} />
        <ViewTransition enter="slide-in" exit="slide-out">
          <main>{children}</main>
        </ViewTransition>
        <Footer lang={lang} />
      </body>
    </html>
  );
};

export default RootLayout;
