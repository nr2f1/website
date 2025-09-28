import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';
import { GoogleTag } from '@components/google-tag-manager';
import { metadataLanguages } from '@i18n/locales';
import { BASE_URL } from '@routes/index';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: metadataLanguages,
  },

  keywords: [
    'nr2f1',
    'foundation',
    'bbsoas',
    'Bosch-Boonstra-Schaaf Optic Atrophy Syndrome',
  ],
  metadataBase: new URL(BASE_URL),
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      noimageindex: false,
    },
    index: true,
  },
  title: 'NR2F1 Foundation',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <ApolloWrapper>
      <GoogleTag />
      {children}
    </ApolloWrapper>
  );
};

export default RootLayout;
