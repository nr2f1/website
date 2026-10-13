'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { GetCookieBannerQuery } from '@graphql/queries/cookie-banner/index.generated';
import {
  LOCAL_STORAGE_KEY_TRACKING_KEY,
  TRACKING_CONSENT,
} from '@shared/utils/analytics-tracking';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'website/src/hooks/local-storage';
import styles from './index.module.scss';

interface CookieBannerProps {
  data: GetCookieBannerQuery;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ data }) => {
  const [consent, setConsent] = useLocalStorage(LOCAL_STORAGE_KEY_TRACKING_KEY);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (
    consent === TRACKING_CONSENT.GRANTED ||
    consent === TRACKING_CONSENT.DENIED ||
    !isHydrated
  ) {
    return null;
  }

  const { heading, paragraphs, resourceSet } = data;

  const rejectCopy = resourceSet?.resourcesCollection?.items?.find(
    (item) => item?.key === 'cookie-banner-reject',
  )?.value;

  const acceptCopy = resourceSet?.resourcesCollection?.items?.find(
    (item) => item?.key === 'cookie-banner-accept',
  )?.value;

  return (
    <section className={styles.cookieBanner} aria-label="Cookie consent banner">
      <div className="content-wrapper">
        <h2>{heading?.content}</h2>
        {documentToReactComponents(paragraphs?.content?.json)}

        <menu>
          <button
            type="button"
            className="button button--on-light"
            onClick={() => setConsent(TRACKING_CONSENT.GRANTED)}
          >
            {acceptCopy ?? 'Accept'}
          </button>
          <button
            type="button"
            className="button button--on-dark"
            onClick={() => setConsent(TRACKING_CONSENT.DENIED)}
          >
            {rejectCopy ?? 'Reject'}
          </button>
        </menu>
      </div>
    </section>
  );
};

export default CookieBanner;
