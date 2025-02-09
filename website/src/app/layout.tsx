import '@styles/main.scss';

import { ApolloWrapper } from '@app/apollo-wrapper';

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

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return <ApolloWrapper>{children}</ApolloWrapper>;
};

export default RootLayout;
