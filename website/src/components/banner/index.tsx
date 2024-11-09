import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';

interface BannerProps {
  lang: AvailableLocale;
}

const Banner: React.FC<BannerProps> = ({ lang }) => {
  return (
    <div className={styles.banner}>
      <div className="content-wrapper">
        <section className={styles.banner__row}>
          <div className={styles.banner__col}>
            <h2>2024 family conference</h2>
            <p>
              The conference is an integral part of our mission. In April 2024,
              we brought together 132 attendees (in person and virtually),
              families and researchers from around the world. We had
              representation from 11 countries and 23 US states.
            </p>

            <a href="/" className="button button--on-light">
              Learn more
            </a>
          </div>
          <div
            className={styles.banner__col}
            style={{
              backgroundImage:
                'url(https://pataruco.s3.amazonaws.com/public/banner.jpg)',
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
