import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  adjustFontFallback: false,
  preload: true,
});

import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';
import Footer from '@components/footer';
import Header from '@components/header';
import { AVAILABLE_LOCALES } from '@i18n/locales';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
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
