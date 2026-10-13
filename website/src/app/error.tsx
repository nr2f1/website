'use client'; // Error boundaries must be Client Components

import { nunitoSans } from '@app/fonts';
import MainOnLight from '@components/logos/main-on-light';
import { english } from '@i18n/locales';
import Link from 'next/link';
import styles from './not-found.module.scss';

const DEFAULT_LANG = english;

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Root error boundary. The root layout renders no <html>, so this document
// has to. Next already replaces server error messages in production; the
// digest is the only detail worth showing, as a support reference.
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <html lang={DEFAULT_LANG} className={nunitoSans.variable}>
      <body>
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
                <h1>Something went wrong</h1>
                <menu className={styles.notfound__actions}>
                  <li>
                    <button
                      type="button"
                      className="button button--on-light"
                      onClick={reset}
                    >
                      Try again
                    </button>
                  </li>
                  <li>
                    <Link href="/" className="button button--on-dark">
                      Go back home
                    </Link>
                  </li>
                </menu>
                {error.digest && (
                  <p>
                    <small>Error reference: {error.digest}</small>
                  </p>
                )}
              </article>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
