import styles from './index.module.scss';

import Contentful from '@components/logos/contentful';
import MainLogo from '@components/logos/main';
import SignupForm from '@components/signup-form';
import SocialMediaLinks from './social-media-links';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__top_row}>
            <div className={styles.footer__top_column}>
              <p>Stay in touch</p>
              <p>Connect with us via our social media channels:</p>
              <SocialMediaLinks variant="light" />
            </div>
            <div className={styles.footer__top_column}>
              <p>
                Sign up to receive news and updates from the NR2F1 Foundation
              </p>
              <SignupForm lang="en" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__middle}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__middle_row}>
            <div className={styles.footer__middle_column}>
              <div className={styles.footer__logo}>
                <MainLogo />
              </div>
              <p>
                ©2021 NR2F1 Foundation. All Rights Reserved. <br />
                Registered 501(c)(3) non-profit organization
                <br /> Federal ID# 83-2659721
              </p>
              <p>
                This website is not designed to diagnose, advise or provide
                medical opinions, treatment or services. It is for general
                knowledge purposes only. Please consult a licensed medical
                professional with all questions and concerns regarding a medical
                condition.
              </p>
            </div>
            <div className={styles.footer__middle_column}>
              <SocialMediaLinks variant="dark" />
              <p>Contact us:</p>
              <address>
                NR2F1 Foundation <br /> 416 E. Kenilworth Ave <br />
                Royal Oak, MI 48067
              </address>
              <a href="mailto:info@nr2f1.org" title="info@nr2f1.org">
                info@nr2f1.org
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__contentful}>
            <Contentful />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
