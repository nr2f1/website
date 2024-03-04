import '@styles/main.scss';
import './layout.scss';

import Footer from '@components/footer';
import Header from '@components/header';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ApolloWrapper> */}
        <Header />
        <main>{children}</main>
        <Footer />
        {/* </ApolloWrapper> */}
      </body>
    </html>
  );
}
