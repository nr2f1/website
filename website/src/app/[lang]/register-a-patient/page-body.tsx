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
              className="button button--on-light-open-new-tab"
            >
              Register now
            </a>
            <p>Already registered?</p>
            <a
              href="https://nr2f1.acrossmatrix.com/"
              title="Natural history study registry login"
              target="_blank"
              rel="noreferrer"
              className="button button--on-light-open-new-tab"
            >
              Login
            </a>
            <details className={styles.accordion}>
              <summary>Who will have access to the data?</summary>
              <div>
                <p>
                  Only a few study administrators have access to patient
                  identifying data. The patient or carer owns their own data.
                  They can share it with whoever they want, including doctors,
                  teachers, other carers, etc. if useful.
                </p>
                <p>Anonymous data is accessed by:</p>
                <ul>
                  <li>
                    The NR2F1 Foundation - limited to whose working on Patient
                    Registry 
                  </li>
                  <li>COMBINEDBrain - our scientific partner</li>
                  <li>
                    Subject to approval by the NR2F1 Foundation - researchers
                    and industry who are working on BBSOAS studies
                  </li>
                  <li>Matrix - the company behind the Patient Registry tool</li>
                </ul>
              </div>
            </details>
            <details className={styles.accordion}>
              <summary>Who will have access to the data?</summary>
              <div>
                <p>
                  Only a few study administrators have access to patient
                  identifying data. The patient or carer owns their own data.
                  They can share it with whoever they want, including doctors,
                  teachers, other carers, etc. if useful.
                </p>
                <p>Anonymous data is accessed by:</p>
                <ul>
                  <li>
                    The NR2F1 Foundation - limited to whose working on Patient
                    Registry 
                  </li>
                  <li>COMBINEDBrain - our scientific partner</li>
                  <li>
                    Subject to approval by the NR2F1 Foundation - researchers
                    and industry who are working on BBSOAS studies
                  </li>
                  <li>Matrix - the company behind the Patient Registry tool</li>
                </ul>
              </div>
            </details>
            <details className={styles.accordion}>
              <summary>Who will have access to the data?</summary>
              <div>
                <p>
                  Only a few study administrators have access to patient
                  identifying data. The patient or carer owns their own data.
                  They can share it with whoever they want, including doctors,
                  teachers, other carers, etc. if useful.
                </p>
                <p>Anonymous data is accessed by:</p>
                <ul>
                  <li>
                    The NR2F1 Foundation - limited to whose working on Patient
                    Registry 
                  </li>
                  <li>COMBINEDBrain - our scientific partner</li>
                  <li>
                    Subject to approval by the NR2F1 Foundation - researchers
                    and industry who are working on BBSOAS studies
                  </li>
                  <li>Matrix - the company behind the Patient Registry tool</li>
                </ul>
              </div>
            </details>
          </section>

          <section>
            <h2>Register for a Clinical Research ID</h2>
            <p>
              The Clinical Research ID (CRID) is a free patient-generated
              service specifically for use in clinical research. The parent or
              carer of the patient or the patient themselves decides who to
              share it with. With a CRID, you can gain visibility into the
              research studies you’re enrolled in.
            </p>
            <p>Anyone around the world can register for a CRID.</p>
            <a
              href="https://thecrid.org/"
              target="_blank"
              rel="noreferrer"
              title="Register for CRID"
              className="button button--on-light-open-new-tab"
            >
              Register now
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
