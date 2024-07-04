import { Nunito_Sans } from 'next/font/google';

import '@styles/main.scss';

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  variable: '--font-nunito-sans',
});

import Footer from '@components/footer';
import Header from '@components/header';
import { AVAILABLE_LOCALES, LocaleParamsPath } from '@i18n/locales';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
};

export async function generateStaticParams() {
  return AVAILABLE_LOCALES.map((lang) => ({ lang }));
}

interface RootLayoutProps extends LocaleParamsPath {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lang },
}) => {
  return (
    <html lang={lang} className={nunitoSans.variable}>
      <body>
        {/* <ApolloWrapper> */}
        <Header />
        <main>{children}</main>
        <Footer />
        {/* </ApolloWrapper> */}
      </body>
    </html>
  );
};

export default RootLayout;
