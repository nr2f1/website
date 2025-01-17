import styles from './page-body.module.scss';

import PageContents from '@components/page-contents';
import PageLatestNews from '@components/page-latest-news';
import SignupForm from '@components/signup-form';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetRegisterPatientPageDocument,
  type GetRegisterPatientPageQuery,
} from '@graphql/queries/register-patient-page/index.generated';
import type { AvailableLocale, LocalisedString } from '@i18n/locales';
import {
  matrixLanguagesAccordionId,
  otherThanFillSurveysAccordionId,
  whoCanTakePartAccordionId,
  whoContactAccordionId,
  whoWillHaveAccessAccordionId,
} from '@models/accordions';
import {
  registerClinicalIdHeadingId,
  registerPatientRegistryHeadingId,
  registerWithUsHeadingId,
} from '@models/headings';
import {
  registerContentIdLinkId,
  registerPatientRegistryLoginLinkId,
  registerPatientRegistrySignUpLinkId,
} from '@models/links';
import {
  introId,
  registerClinicalIdContentId,
  registerPatientRegistryContentId,
  registerWithUsContentId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const alreadyRegister: LocalisedString = {
  en: 'Already registered?',
  es: '¿Ya estás registrado?',
  fr: 'Déjà enregistré?',
  de: 'Bereits registriert?',
};

const RegisterPageBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const {
    data: {
      intro,
      registerWithUsHeading,
      registerPatientRegistryHeading,
      registerClinicalIdHeading,
      registerPatientRegistryLoginLink,
      registerWithUsContent,
      registerPatientRegistryContent,
      registerPatientRegistrySignUpLink,
      whoCanTakePartAccordion,
      whoWillHaveAccessAccordion,
      otherThanFillSurveysAccordion,
      matrixLanguagesAccordion,
      whoContactAccordion,
      registerClinicalIdContent,
      registerContentIdLink,
    },
    error,
  } = await query<GetRegisterPatientPageQuery>({
    query: GetRegisterPatientPageDocument,
    variables: {
      locale: lang,
      introId,
      registerWithUsHeadingId,
      registerPatientRegistryHeadingId,
      registerClinicalIdHeadingId,
      registerPatientRegistryLoginLinkId,
      registerWithUsContentId,
      registerPatientRegistryContentId,
      registerPatientRegistrySignUpLinkId,
      whoCanTakePartAccordionId,
      whoWillHaveAccessAccordionId,
      otherThanFillSurveysAccordionId,
      matrixLanguagesAccordionId,
      whoContactAccordionId,
      registerClinicalIdContentId,
      registerContentIdLinkId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__row']}>
        <aside className={styles['page-contents']}>
          <PageContents lang={lang} />
        </aside>
        <article className={styles['page-body']}>
          {documentToReactComponents(intro?.content?.json)}
          <ol>
            <li>
              <a
                href={`#${createHashLink(registerWithUsHeading?.content ?? '')}`}
              >
                {registerWithUsHeading?.content}
              </a>
            </li>
            <li>
              <a
                href={`#${createHashLink(registerPatientRegistryHeading?.content ?? '')}`}
              >
                {registerPatientRegistryHeading?.content}
              </a>
            </li>
            <li>
              <a
                href={`#${createHashLink(registerClinicalIdHeading?.content ?? '')}`}
              >
                {registerClinicalIdHeading?.content}
              </a>
            </li>
          </ol>
          <section>
            <h2 id={createHashLink(registerWithUsHeading?.content ?? '')}>
              1. {registerWithUsHeading?.content}
            </h2>

            {documentToReactComponents(registerWithUsContent?.content?.json)}

            <SignupForm lang={lang} registerPatient />
          </section>
          <section>
            <h2
              id={createHashLink(registerPatientRegistryHeading?.content ?? '')}
            >
              2. {registerPatientRegistryHeading?.content}
            </h2>

            {documentToReactComponents(
              registerPatientRegistryContent?.content?.json,
            )}

            <a
              href={
                registerPatientRegistrySignUpLink?.href ??
                'https://nr2f1x.acrossmatrix.com/en-US/#/user-request'
              }
              title={
                registerPatientRegistrySignUpLink?.content ??
                'Natural history study registry signup'
              }
              target="_blank"
              rel="noreferrer"
              className="button button--on-light-open-new-tab mbe--4"
            >
              {registerPatientRegistrySignUpLink?.content}
            </a>
            <p>{alreadyRegister[lang]}</p>
            <a
              href={
                registerPatientRegistryLoginLink?.href ??
                'https://nr2f1.acrossmatrix.com/'
              }
              title="Natural history study registry login"
              target="_blank"
              rel="noreferrer"
              className="button button--on-light-open-new-tab mbe--6"
            >
              {registerPatientRegistryLoginLink?.content}
            </a>
            <details className={styles.accordion}>
              <summary>Who can take part?</summary>
              <div>
                <p>
                  Parents or carers of a confirmed BBSOAS patient or BBSOAS
                  patients themselves. By confirmed we mean with a genetic
                  report showing the diagnosis.
                </p>
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
              <summary>
                Other than filling out surveys, how else can I use Patient
                Registry?
              </summary>
              <div>
                <p>
                  Patient Registry can also be used as a personal health
                  monitoring tool. It has features that make managing daily
                  medical care easier.
                </p>
              </div>
            </details>
            <details className={styles.accordion}>
              <summary>
                What languages is Matrix and the surveys available in?
              </summary>
              <div>
                <p>
                  Matrix is available in English, Spanish, Italian, French,
                  German, Portuguese and Korean. Surveys are available in
                  English, Spanish, Italian, French and German. Coming soon:
                  Portuguese, Korean and Hebrew.
                </p>
              </div>
            </details>
            <details className={styles.accordion}>
              <summary>
                Who can I contact about the Patient Registry for more help or
                answers?
              </summary>
              <div>
                <p>
                  Email{' '}
                  <a href="mailto:patientregistry@nr2f1.org">
                    patientregistry@nr2f1.org
                  </a>{' '}
                  and we can help or offer a Zoom meeting to help you get
                  registered.
                </p>
              </div>
            </details>
          </section>

          <section>
            <h2 id={createHashLink(registerClinicalIdHeading?.content ?? '')}>
              3. {registerClinicalIdHeading?.content}
            </h2>

            {documentToReactComponents(
              registerClinicalIdContent?.content?.json,
            )}

            <a
              href={registerContentIdLink?.href ?? 'https://thecrid.org/'}
              target="_blank"
              rel="noreferrer"
              title={registerContentIdLink?.content ?? 'Clinical Registry'}
              className="button button--on-light-open-new-tab"
            >
              {registerContentIdLink?.content}
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
