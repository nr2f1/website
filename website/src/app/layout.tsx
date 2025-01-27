import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';
import Footer from '@components/footer';
import Header from '@components/header';
import { match } from '@formatjs/intl-localematcher';
import {
  AVAILABLE_LOCALES,
  type AvailableLocale,
  DEFAULT_LOCALE,
  changeLocaleFormat,
} from '@i18n/locales';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import Negotiator from 'negotiator';
import { Nunito_Sans } from 'next/font/google';
import { headers } from 'next/headers';

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  adjustFontFallback: false,
  preload: true,
});

export const metadata = {
  title: 'NR2F1 Foundation',
  metadataBase: new URL('https://website-nr2f1.vercel.app'), // TODO: update this once we migrate
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      de: '/de',
      es: '/es',
      fr: '/fr',
    },
  },
};

export async function generateStaticParams() {
  return AVAILABLE_LOCALES.map((lang) => ({ lang }));
}

interface RootLayoutProps extends PagePropsWithLocale {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  let { lang } = await params;

  if (!lang) {
    const headersList = await headers();

    const acceptLanguagesHeader = headersList.get('accept-language');

    const negotiator = new Negotiator({
      headers: {
        'accept-language': acceptLanguagesHeader ?? '',
      },
    });

    const userLocales = negotiator.languages().map(changeLocaleFormat);

    lang = match(
      userLocales,
      AVAILABLE_LOCALES,
      DEFAULT_LOCALE,
    ) as AvailableLocale;
  }

  return (
    <html lang={lang} className={nunitoSans.variable}>
      <body>
        <ApolloWrapper>
          <Header lang={lang} />
          <main>{children}</main>
          <Footer lang={lang} />
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
