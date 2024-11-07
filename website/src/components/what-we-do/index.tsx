import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';
interface WhatWeDoProps {
  lang: AvailableLocale;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ lang }) => {
  return (
    <div className={styles.what_we_do}>
      <div className="content-wrapper">
        <section>
          <h2>What we do</h2>
          <p>
            Our vision is that every single family and individual living with
            rare NR2F1 variants will live a full and empowered life. Our mission
            is to empower families and individuals living with rare NR2F1
            variants through education, advocacy and research.
          </p>
          <div className={styles.what_we_do__row}>
            <div className={styles.card}>
              <div />
              <h3>Educate people</h3>
              <p>
                Let us teach you about BBSOAS. We have recommended actions,
                resources, and connections that can help.
              </p>
              <a href="/" className="button button--on-light">
                Learn more
              </a>
            </div>
            <div className={styles.card}>
              <div />
              <h3>Empower families</h3>
              <p>
                Our vision is that every single family and individual living
                with BBSOAS will live a full and empowered life.
              </p>
              <a href="/" className="button button--on-light">
                Learn more
              </a>
            </div>
            <div className={styles.card}>
              <div />
              <h3>Drive research</h3>
              <p>
                So much about BBSOAS remains unknown. We work hard to uncover
                the mysteries of this condition and develop therapies.
              </p>
              <a href="/" className="button button--on-light">
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
