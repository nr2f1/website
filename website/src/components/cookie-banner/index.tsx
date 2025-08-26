'use client';

import { routes } from '@routes/index';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import {
  LOCAL_STORAGE_KEY_TRACKING_KEY,
  TRACKING_CONSENT,
} from '@shared/utils/analytics-tracking';
import Link from 'next/link';
import { useLocalStorage } from 'website/src/hooks/local-storage';
import styles from './index.module.scss';

const CookieBanner: React.FC<ComponentPropsWithLocale> = ({ lang }) => {
  const [consent, setConsent] = useLocalStorage(LOCAL_STORAGE_KEY_TRACKING_KEY);

  if (
    consent === TRACKING_CONSENT.GRANTED ||
    consent === TRACKING_CONSENT.DENIED
  ) {
    return null;
  }

  return (
    <section className={styles.cookieBanner} aria-label="Cookie consent banner">
      <div className="content-wrapper">
        <h2>Cookies on NR2F1.org</h2>
        <p>
          We use some essential cookies cookies to improve your browsing
          experience on our website, analyze site traffic, and understand where
          our audience is coming from. To learn more, please read our{' '}
          <Link href={routes['privacy-policy'](lang)}>privacy policy</Link>.
        </p>

        <menu>
          <button
            type="button"
            className="button button--on-light"
            onClick={() => setConsent(TRACKING_CONSENT.GRANTED)}
          >
            Accept
          </button>
          <button
            type="button"
            className="button button--on-dark"
            onClick={() => setConsent(TRACKING_CONSENT.DENIED)}
          >
            Reject
          </button>
        </menu>
      </div>
    </section>
  );
};

export default CookieBanner;
