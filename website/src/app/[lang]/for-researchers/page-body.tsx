import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetForResearchersPageDocument,
  GetForResearchersPageQuery,
} from '@graphql/queries/pages/for-researchers/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  anotherSampleAccordionId,
  whatIsBioRepositoryAccordionId,
  whyBioRepositoryAccordionId,
} from '@models/accordions';
// import {
//   adhdAccordionId,
//   alacrimaAccordionId,
//   autismAccordionId,
//   developmentDelayAccordionId,
//   disabilityAccordionId,
//   epilepsyAccordionId,
//   hearingAccordionId,
//   hypotoniaAccordionId,
//   nystagmusAccordionId,
//   repetitiveBehaviourAccordionId,
//   speechDelayAccordionId,
//   swallingAccordionId,
//   visualImpairmentAccordionId,
// } from '@models/accordions';
import {
  patientRegistryHeadingId,
  biorepositoryHeadingId,
  surveyHeadingId,
} from '@models/headings';
import {
  registerPatientInOurresearchPageParagraphsId,
  biorepositoryParagraphsBeforeAccordionsId,
  biorepositoryParagraphsAfterAccordionsId,
} from '@models/paragraphs';
// import {
//   diagnosisParagraphsId,
//   incidenceParagraphsId,
//   inheritanceParagraphsId,
//   lifeParagraphsId,
//   managementParagraphsId,
//   prevalenceParagraphsId,
//   researchParagraphsId,
//   symptomsOfBbsoasParagraphsId,
//   symptomsVaryParagraphsId,
//   whatCausesBbsoasParagraphsId,
//   whatIsBbsoasintroId,
// } from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const WhatIsBbsoasBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const {
    data: {
      patientRegistryHeading,
      biorepositoryHeading,
      surveyHeading,
      patientRegistryParagraphs,
      biorepositoryParagraphsBeforeAccordions,
      whatIsBioRepositoryAccordion,
      whyBioRepositoryAccordion,
      anotherSampleAccordion,
      biorepositoryParagraphsAfterAccordions,
    },
    error,
  } = await query<GetForResearchersPageQuery>({
    query: GetForResearchersPageDocument,
    variables: {
      locale: lang,
      patientRegistryHeadingId,
      biorepositoryHeadingId,
      surveyHeadingId,
      registerPatientInOurresearchPageParagraphsId,
      biorepositoryParagraphsBeforeAccordionsId,
      whatIsBioRepositoryAccordionId,
      whyBioRepositoryAccordionId,
      anotherSampleAccordionId,
      biorepositoryParagraphsAfterAccordionsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    patientRegistryHeading?.content ?? '',
    biorepositoryHeading?.content ?? '',
    surveyHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(patientRegistryHeading?.content ?? '')}>
          {patientRegistryHeading?.content}
        </h2>
        {documentToReactComponents(patientRegistryParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(biorepositoryHeading?.content ?? '')}>
          {biorepositoryHeading?.content}
        </h2>
        {documentToReactComponents(
          biorepositoryParagraphsBeforeAccordions?.content?.json,
        )}
        <Accordion
          title={whatIsBioRepositoryAccordion?.title ?? ''}
          content={documentToReactComponents(
            whatIsBioRepositoryAccordion?.content?.json,
          )}
        />
        <Accordion
          title={whyBioRepositoryAccordion?.title ?? ''}
          content={documentToReactComponents(
            whyBioRepositoryAccordion?.content?.json,
          )}
        />
        <Accordion
          title={anotherSampleAccordion?.title ?? ''}
          content={documentToReactComponents(
            anotherSampleAccordion?.content?.json,
          )}
        />
        <div className={styles.biorepository}>
          {documentToReactComponents(
            biorepositoryParagraphsAfterAccordions?.content?.json,
          )}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(surveyHeading?.content ?? '')}>
          {surveyHeading?.content}
        </h2>
        {/*{documentToReactComponents(symptomsVaryParagraphs?.content?.json)}*/}
      </section>
    </PageBody>
  );
};

export default WhatIsBbsoasBody;
