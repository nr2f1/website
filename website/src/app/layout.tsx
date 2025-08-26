import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';
import { GoogleTag } from '@components/google-tag-manager';
import type { Metadata } from 'next';

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
  metadataBase: new URL('https://website-nr2f1.vercel.app'), // TODO: update this once we migrate
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
