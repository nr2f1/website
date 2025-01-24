import styles from './not-found.module.scss';

import SupportBanner from '@components/support-banner';
import { match } from '@formatjs/intl-localematcher';
import {
  AVAILABLE_LOCALES,
  type AvailableLocale,
  DEFAULT_LOCALE,
} from '@i18n/locales';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function NotFound() {
  const headersList = await headers();
  const acceptLanguagesHeader = headersList.get('accept-language');

  const lang = match(
    (acceptLanguagesHeader ?? '').split(', '),
    AVAILABLE_LOCALES,
    DEFAULT_LOCALE,
  ) as AvailableLocale;

  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__content_wrapper}>
        <article>
          <h1>Sorry, this page isn’t available</h1>

          <p>
            <span>404 error</span>: The link you followed may be broken, or the
            page may have been removed.
          </p>

          <Link href={`/${lang}`} className="button button--on-light">
            Back to homepage
          </Link>
        </article>
      </div>
      <SupportBanner lang={lang} />
    </div>
  );
}
