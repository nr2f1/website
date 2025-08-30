'use client'; // Error boundaries must be Client Components

import MainOnLight from '@components/logos/main-on-light';
import { english } from '@i18n/locales';
import { Nunito_Sans } from 'next/font/google';
import Link from 'next/link';
import styles from './not-found.module.scss';

const nunitoSans = Nunito_Sans({
  adjustFontFallback: false,
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

const DEFAULT_LANG = english;

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang={DEFAULT_LANG} className={nunitoSans.variable}>
      <body>
        {/*<Header lang={DEFAULT_LANG} />*/}
        <header>
          <div className={styles.notfound}>
            <div className={styles.notfound__header_content_wrapper}>
              <div className={styles.notfound__logo}>
                <Link href="/">
                  <MainOnLight />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className={styles.notfound}>
            <div className={styles.notfound__content_wrapper}>
              <article>
                <h2>Something went wrong!</h2>

                <Link href="/" className="button button--on-light">
                  Go back home
                </Link>

                <h3>Name</h3>
                <p>{error.name}</p>
                <h3>Message</h3>
                <p>{error.message}</p>
                <h3>Digest</h3>
                <p>{error.digest}</p>
              </article>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
