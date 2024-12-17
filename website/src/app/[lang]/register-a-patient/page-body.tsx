import PageContents from '@components/page-contents';
import styles from './page-body.module.scss';

import PageLatestNews from '@components/page-latest-news';
import SignupForm from '@components/signup-form';
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
          <section>
            <h2>Register with us</h2>
            <p>
              We want to keep track of the number of diagnosed cases around the
              world, so that we can share this with you and our community of
              scientists and researchers. If you are a newly diagnosed family,
              please also share your location. By registering with us, you will
              also receive communications from the NR2F1 Foundation.
            </p>
            <SignupForm lang={lang} registerPatient />
          </section>
          <section>
            <h2>Register with the NR2F1 Patient Registry</h2>
            <p>
              The Patient Registry collects information through surveys on how a
              disease affects a person over a lifetime to better understand
              diseases, especially rare ones. The data collected from the
              surveys will help researchers and families learn more about
              BBSOAS.
            </p>
            <p>
              The Patient Registry will show how the disease progresses over
              time. This is why it’s extremely important to complete all the
              surveys listed in your account. Every year in June, we ask
              families to go back into the Patient Registry to complete annual
              surveys.
            </p>
            <p>
              Having our BBSOAS population registered in Patient Registry also
              means as an organization we are ‘research ready’ for clinical
              trials or pharmaceutical development.
            </p>
            <p>Get started in 4 simple steps:</p>
            <ol>
              <li>Create a Patient Registry account in Matrix </li>
              <li>Upload the genetic report to confirm diagnosis </li>
              <li>Fill out all the surveys listed in your account </li>
              <li>Turn on survey notifications</li>
            </ol>
            <a
              href="https://nr2f1x.acrossmatrix.com/en-US/#/user-request"
              title="Natural history study registry signup"
              target="_blank"
              rel="noreferrer"
            >
              Register now
            </a>
            <p>Already registered?</p>
            <a
              href="https://nr2f1.acrossmatrix.com/"
              title="Natural history study registry login"
              target="_blank"
              rel="noreferrer"
            >
              Login
            </a>
          </section>
        </article>
        <aside className={styles['latest-news']}>
          <PageLatestNews lang={lang} />
        </aside>
      </div>
    </div>
  );
};

export default RegisterPageBody;
