import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetGetInvolvedInBbsoasResearchPageDocument,
  type GetGetInvolvedInBbsoasResearchPageQuery,
} from '@graphql/queries/pages/get-involved-in-bbsoas-research/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  anotherSampleAccordionId,
  ortasWhatAccordionId,
  ortasWhoAccordionId,
  ortasWhyAccordionId,
  whatIsBioRepositoryAccordionId,
  whyBioRepositoryAccordionId,
} from '@models/accordions';
import {
  biorepositoryHeadingId,
  patientRegistryHeadingId,
  surveyHeadingId,
} from '@models/headings';
import {
  biorepositoryParagraphsAfterAccordionsId,
  biorepositoryParagraphsBeforeAccordionsId,
  registerPatientInOurresearchPageParagraphsId,
  surveyParagraphsAfterAccordionsId,
  surveyParagraphsBeforeAccordionsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

interface GetInvolvedInBbsoasResearchPageProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const GetInvolvedInBbsoasResearchBody: React.FC<
  GetInvolvedInBbsoasResearchPageProps
> = async ({ lang }) => {
  const { data, error } = await query<GetGetInvolvedInBbsoasResearchPageQuery>({
    query: GetGetInvolvedInBbsoasResearchPageDocument,
    variables: {
      anotherSampleAccordionId,
      biorepositoryHeadingId,
      biorepositoryParagraphsAfterAccordionsId,
      biorepositoryParagraphsBeforeAccordionsId,
      locale: lang,
      ortasWhatAccordionId,
      ortasWhoAccordionId,
      ortasWhyAccordionId,
      patientRegistryHeadingId,
      registerPatientInOurresearchPageParagraphsId,
      surveyHeadingId,
      surveyParagraphsAfterAccordionsId,
      surveyParagraphsBeforeAccordionsId,
      whatIsBioRepositoryAccordionId,
      whyBioRepositoryAccordionId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    patientRegistryHeading,
    biorepositoryHeading,
    surveyHeading,
    patientRegistryParagraphs,
    biorepositoryParagraphsBeforeAccordions,
    whatIsBioRepositoryAccordion,
    whyBioRepositoryAccordion,
    anotherSampleAccordion,
    biorepositoryParagraphsAfterAccordions,
    surveyParagraphsBeforeAccordions,
    ortasWhatAccordion,
    ortasWhyAccordion,
    ortasWhoAccordion,
    surveyParagraphsAfterAccordions,
  } = data;

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
        <div className={styles.override}>
          {documentToReactComponents(
            biorepositoryParagraphsAfterAccordions?.content?.json,
          )}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(surveyHeading?.content ?? '')}>
          {surveyHeading?.content}
        </h2>
        {documentToReactComponents(
          surveyParagraphsBeforeAccordions?.content?.json,
        )}
        <Accordion
          title={ortasWhatAccordion?.title ?? ''}
          content={documentToReactComponents(ortasWhatAccordion?.content?.json)}
        />
        <Accordion
          title={ortasWhyAccordion?.title ?? ''}
          content={documentToReactComponents(ortasWhyAccordion?.content?.json)}
        />
        <Accordion
          title={ortasWhoAccordion?.title ?? ''}
          content={documentToReactComponents(ortasWhoAccordion?.content?.json)}
        />
        <div className={styles.override}>
          {documentToReactComponents(
            surveyParagraphsAfterAccordions?.content?.json,
          )}
        </div>
      </section>
    </PageBody>
  );
};

export default GetInvolvedInBbsoasResearchBody;
