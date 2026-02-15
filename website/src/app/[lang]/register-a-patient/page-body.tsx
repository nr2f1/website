import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import SignupForm from '@components/signup-form';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetRegisterPatientPageDocument,
  type GetRegisterPatientPageQuery,
} from '@graphql/queries/pages/register-patient/index.generated';
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
  de: 'Bereits registriert?',
  en: 'Already registered?',
  es: '¿Ya estás registrado?',
  fr: 'Déjà enregistré?',
  it: 'Già registrato?',
  'pt-BR': 'Já registrado?',
  'zh-CN': '已经注册？',
};

const RegisterPageBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const { data, error } = await query<GetRegisterPatientPageQuery>({
    query: GetRegisterPatientPageDocument,
    variables: {
      introId,
      locale: lang,
      matrixLanguagesAccordionId,
      otherThanFillSurveysAccordionId,
      registerClinicalIdContentId,
      registerClinicalIdHeadingId,
      registerContentIdLinkId,
      registerPatientRegistryContentId,
      registerPatientRegistryHeadingId,
      registerPatientRegistryLoginLinkId,
      registerPatientRegistrySignUpLinkId,
      registerWithUsContentId,
      registerWithUsHeadingId,
      whoCanTakePartAccordionId,
      whoContactAccordionId,
      whoWillHaveAccessAccordionId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
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
  } = data;

  const headings = [
    registerWithUsHeading?.content ?? '',
    registerPatientRegistryHeading?.content ?? '',
    registerClinicalIdHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      {documentToReactComponents(intro?.content?.json)}
      <ol>
        <li>
          <a href={`#${createHashLink(registerWithUsHeading?.content ?? '')}`}>
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
        <h2 id={createHashLink(registerPatientRegistryHeading?.content ?? '')}>
          2. {registerPatientRegistryHeading?.content}
        </h2>

        {documentToReactComponents(
          registerPatientRegistryContent?.content?.json,
        )}

        <a
          href={
            registerPatientRegistrySignUpLink?.target?.url ??
            'https://nr2f1x.acrossmatrix.com/en-US/#/user-request'
          }
          title={
            registerPatientRegistrySignUpLink?.text?.content ??
            'Natural history study registry signup'
          }
          target="_blank"
          rel="noreferrer"
          className="button button--on-light-open-new-tab mbe--4"
          data-register-in-patient-registry
        >
          {registerPatientRegistrySignUpLink?.text?.content}
        </a>
        <p>{alreadyRegister[lang]}</p>
        <a
          href={
            registerPatientRegistryLoginLink?.target?.url ??
            'https://nr2f1.acrossmatrix.com/'
          }
          title="Natural history study registry login"
          target="_blank"
          rel="noreferrer"
          className="button button--on-light-open-new-tab mbe--6"
          data-login-in-patient-registry
        >
          {registerPatientRegistryLoginLink?.text?.content}
        </a>

        <Accordion
          title={whoContactAccordion?.title ?? ''}
          content={documentToReactComponents(
            whoContactAccordion?.content?.json,
          )}
        />
        <Accordion
          title={whoCanTakePartAccordion?.title ?? ''}
          content={documentToReactComponents(
            whoCanTakePartAccordion?.content?.json,
          )}
        />
        <Accordion
          title={whoWillHaveAccessAccordion?.title ?? ''}
          content={documentToReactComponents(
            whoWillHaveAccessAccordion?.content?.json,
          )}
        />
        <Accordion
          title={otherThanFillSurveysAccordion?.title ?? ''}
          content={documentToReactComponents(
            otherThanFillSurveysAccordion?.content?.json,
          )}
        />
        <Accordion
          title={matrixLanguagesAccordion?.title ?? ''}
          content={documentToReactComponents(
            matrixLanguagesAccordion?.content?.json,
          )}
        />
        <Accordion
          title={whoCanTakePartAccordion?.title ?? ''}
          content={documentToReactComponents(
            whoCanTakePartAccordion?.content?.json,
          )}
        />
      </section>

      <section>
        <h2 id={createHashLink(registerClinicalIdHeading?.content ?? '')}>
          3. {registerClinicalIdHeading?.content}
        </h2>

        {documentToReactComponents(registerClinicalIdContent?.content?.json)}

        <a
          href={registerContentIdLink?.target?.url ?? 'https://thecrid.org/'}
          target="_blank"
          rel="noreferrer"
          title={registerContentIdLink?.text?.content ?? 'Clinical Registry'}
          className="button button--on-light-open-new-tab"
          data-register-in-clinical-research
        >
          {registerContentIdLink?.text?.content}
        </a>
      </section>
    </PageBody>
  );
};

export default RegisterPageBody;
