import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  variable: '--font-nunito-sans',
});

import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';
import Footer from '@components/footer';
import Header from '@components/header';
import { PreloadQuery } from '@graphql/client';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import { AVAILABLE_LOCALES, LocaleParamsPath } from '@i18n/locales';
import { Suspense } from 'react';

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
        <ApolloWrapper>
          <PreloadQuery query={GetHeaderDocument}>
            {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
            <Suspense fallback={<>loading</>}>
              <Header />
            </Suspense>
          </PreloadQuery>
          <main>{children}</main>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
