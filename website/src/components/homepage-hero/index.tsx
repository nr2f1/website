import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';

interface HomePageHeroProps {
  lang: AvailableLocale;
}

const HomePageHero: React.FC<HomePageHeroProps> = ({ lang }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content_wrapper}>
        <div className={styles.hero__row}>
          <div className={styles.hero__col}>
            <section className={styles.hero__what_are_we}>
              <h2>It's a rare diagnosis, but you're not alone</h2>
              <p>
                We're a non-profit organization that supports families and
                individuals around the world living with rare NR2F1 gene
                variants. These gene variants cause a neurodevelopmental
                disorder called Bosch-Boonstra-Schaaf Optic Atrophy Syndrome
                (BBSOAS).
              </p>
              <a href="/" className="button button--on-light">
                Learn more about BBSOAS
              </a>
            </section>
            <section className={styles.hero__how_can_we_help}>
              <h3>How can we help you?</h3>
              <nav>
                <ul>
                  <li>
                    <a href="/" className="signpost-item">
                      I’m a family member of a newly diagnosed patient
                    </a>
                  </li>
                  <li>
                    <a href="/" className="signpost-item">
                      I’m a scientific researcher
                    </a>
                  </li>
                  <li>
                    <a href="/" className="signpost-item">
                      I’m a medical professional
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
          <div className={styles.hero__col}>
            <img
              src="https://pataruco.s3.amazonaws.com/public/hero-image.png"
              alt="a woman pointing to the horizon with a girl sitting on her lap"
            />
          </div>
        </div>
        <section className={styles.hero__how_can_we_help_tablet}>
          <h3>How can we help you?</h3>
          <nav>
            <ul>
              <li>
                <a href="/" className="signpost-item">
                  I’m a family member of a newly diagnosed patient
                </a>
              </li>
              <li>
                <a href="/" className="signpost-item">
                  I’m a scientific researcher
                </a>
              </li>
              <li>
                <a href="/" className="signpost-item">
                  I’m a medical professional
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default HomePageHero;
