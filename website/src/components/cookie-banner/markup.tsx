'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useGetCookieBannerSuspenseQuery } from '@graphql/queries/cookie-banner/index.generated';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import {
  LOCAL_STORAGE_KEY_TRACKING_KEY,
  TRACKING_CONSENT,
} from '@shared/utils/analytics-tracking';
import { useLocalStorage } from 'website/src/hooks/local-storage';
import styles from './index.module.scss';

const CookieBanner: React.FC<ComponentPropsWithLocale> = ({ lang }) => {
  const [consent, setConsent] = useLocalStorage(LOCAL_STORAGE_KEY_TRACKING_KEY);

  const { data } = useGetCookieBannerSuspenseQuery({
    variables: { locale: lang },
  });

  if (
    consent === TRACKING_CONSENT.GRANTED ||
    consent === TRACKING_CONSENT.DENIED ||
    !data
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
