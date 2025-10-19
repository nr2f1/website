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

  const headings = [
    data.patientRegistryHeading?.content ?? '',
    data.biorepositoryHeading?.content ?? '',
    data.surveyHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(data.patientRegistryHeading?.content ?? '')}>
          {data.patientRegistryHeading?.content}
        </h2>
        {documentToReactComponents(
          data.patientRegistryParagraphs?.content?.json,
        )}
      </section>
      <section>
        <h2 id={createHashLink(data.biorepositoryHeading?.content ?? '')}>
          {data.biorepositoryHeading?.content}
        </h2>
        {documentToReactComponents(
          data.biorepositoryParagraphsBeforeAccordions?.content?.json,
        )}
        <Accordion
          title={data.whatIsBioRepositoryAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.whatIsBioRepositoryAccordion?.content?.json,
          )}
        />
        <Accordion
          title={data.whyBioRepositoryAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.whyBioRepositoryAccordion?.content?.json,
          )}
        />
        <Accordion
          title={data.anotherSampleAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.anotherSampleAccordion?.content?.json,
          )}
        />
        <div className={styles.override}>
          {documentToReactComponents(
            data.biorepositoryParagraphsAfterAccordions?.content?.json,
          )}
        </div>
      </section>
      <section>
        <h2 id={createHashLink(data.surveyHeading?.content ?? '')}>
          {data.surveyHeading?.content}
        </h2>
        {documentToReactComponents(
          data.surveyParagraphsBeforeAccordions?.content?.json,
        )}
        <Accordion
          title={data.ortasWhatAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.ortasWhatAccordion?.content?.json,
          )}
        />
        <Accordion
          title={data.ortasWhyAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.ortasWhyAccordion?.content?.json,
          )}
        />
        <Accordion
          title={data.ortasWhoAccordion?.title ?? ''}
          content={documentToReactComponents(
            data.ortasWhoAccordion?.content?.json,
          )}
        />
        <div className={styles.override}>
          {documentToReactComponents(
            data.surveyParagraphsAfterAccordions?.content?.json,
          )}
        </div>
      </section>
    </PageBody>
  );
};

export default GetInvolvedInBbsoasResearchBody;
