import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';

interface SupportBannerProps {
  lang: AvailableLocale;
}

const SupportBanner: React.FC<SupportBannerProps> = ({ lang }) => {
  return (
    <div className={styles['support-banner']}>
      <div className="content-wrapper">
        <section
          style={{
            backgroundImage:
              'url(https://pataruco.s3.amazonaws.com/public/support-us-image.png), linear-gradient(90deg, rgba(0, 0, 0, 0.60) 36.61%, rgba(0, 0, 0, 0.00) 100%)',
          }}
        >
          <h2>Support our work</h2>
          <p>
            There are plenty of ways to help. You can support us by donating,
            volunteering a few hours a month or helping us fundraise. Help us
            fulfill our mission!
          </p>
          <a href="/" className="button button--accent-on-dark">
            Support us
          </a>
        </section>
      </div>
    </div>
  );
};

export default SupportBanner;
