import styles from './index.module.scss';

import Contentful from '@components/logos/contentful';
import MainLogo from '@components/logos/main';
import Dropdown from './dropdown';
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
              <form action="">
                <div className="row">
                  <div className="col">
                    <label htmlFor="firstname">First name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="John"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="role">I am a:</label>
                    <Dropdown />
                  </div>
                </div>
                <button type="submit" className="button button--on-light">
                  Sign up
                </button>
              </form>
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
