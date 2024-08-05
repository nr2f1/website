import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__content_wrapper}>
          <div className={styles.footer__top_row}>
            <div className={styles.footer__top_column}>
              <p>Stay in touch</p>
              <p>Connect with us via our social media channels:</p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/BBSoas"
                    className="button button--on-dark"
                  >
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/BBSoas"
                    className="button button--on-dark"
                  >
                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/BBSoas"
                    className="button button--on-dark"
                  >
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/BBSoas"
                    className="button button--on-dark"
                  >
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__top_column}>
              <p>
                Sign up to receive news and updates from the NR2F1 Foundation
              </p>
              <form action="">
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="John"
                />
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Smith"
                />
                <label htmlFor="email">Last name</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@email.com"
                />
                <label htmlFor="role">I am a:</label>
                <select name="role" id="role">
                  <option value="student">student</option>
                </select>
                <button type="submit" className="button button--on-light">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
