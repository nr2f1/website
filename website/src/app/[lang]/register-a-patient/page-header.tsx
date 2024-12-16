import styles from './page-header.module.scss';

import type { AvailableLocale } from '@i18n/locales';

interface RegisterPageHeaderProps {
  lang: AvailableLocale;
}

const RegisterPageHeader: React.FC<RegisterPageHeaderProps> = ({ lang }) => {
  return (
    <div className={styles['page-header']}>
      <section>
        <div>
          <p>Living with BBSOAS</p>
          <h1>Register a BBSOAS patient</h1>
        </div>
        <div
          style={{
            backgroundImage:
              'url(https://pataruco.s3.amazonaws.com/public/register-patient-page-header.png)',
          }}
        />
      </section>
      <div>
        <div className="content-wrapper">
          <p>
            Last updated: <time>May 7, 2024, 09:32</time>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPageHeader;
