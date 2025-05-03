import Footer from '@components/footer';
import Header from '@components/header';
import { AVAILABLE_LOCALES } from '@i18n/locales';
import type { PagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { Nunito_Sans } from 'next/font/google';

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
  const { lang } = await params;

  return (
    <html lang={lang} className={nunitoSans.variable}>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
};

export default RootLayout;
