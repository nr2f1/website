import PageContents from '@components/page-contents';
import styles from './page-body.module.scss';

import type { AvailableLocale } from '@i18n/locales';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const RegisterPageBody: React.FC<RegisterPageBodyProps> = ({ lang }) => {
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__row']}>
        <aside className={styles['page-contents']}>
          <PageContents lang={lang} />
        </aside>
        <article className={styles['page-body']}>
          <p>
            We believe there is power in numbers. This is why every new
            diagnosis is important to us. By registering BBSOAS patients, our
            community decides what's important to study and learn about BBSOAS.{' '}
          </p>
          <p>There are three actions for newly diagnosed patients:</p>

          <ul>
            <li>
              <a href="/">Register with us</a>
            </li>
            <li>
              <a href="/">Register with the NR2F1 Patient Registry</a>
            </li>
            <li>
              <a href="/">Register for a Clinical Research ID</a>
            </li>
          </ul>
          <h2>Register with us</h2>
          <p>
            We want to keep track of the number of diagnosed cases around the
            world, so that we can share this with you and our community of
            scientists and researchers. If you are a newly diagnosed family,
            please also share your location. By registering with us, you will
            also receive communications from the NR2F1 Foundation.
          </p>
        </article>
        <aside className={styles['latest-news']}>
          <h3>Latest news</h3>
          <ul>
            <li>
              <p>Blog</p>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <p>
                <time dateTime="">May 24, 2024</time>
              </p>
            </li>
            <li>
              <p>Blog</p>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <p>
                <time dateTime="">May 24, 2024</time>
              </p>
            </li>
            <li>
              <p>Blog</p>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <p>
                <time dateTime="">May 24, 2024</time>
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default RegisterPageBody;
