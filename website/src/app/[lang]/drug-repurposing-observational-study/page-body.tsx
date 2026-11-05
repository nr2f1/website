import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { getClient } from '@graphql/client';
import { GetDrugRepurposingStudyPageDocument } from '@graphql/queries/pages/drug-repurposing-observational-study/index.generated';
import {
  foundationGiveDrugAccordionId,
  isThisAClinicalTrialAccordionId,
  joinToStayInRegistryAccordionId,
  stayOnCurrentMedicationsAccordionId,
  stopDrugOrSideEffectsAccordionId,
  takeBothDrugsAccordionId,
} from '@models/accordions';
import {
  faqsHeadingId,
  getReadyToParticipateHeadingId,
  howTheStudyWorksHeadingId,
  questionsOrPasswordResetHeadingId,
  whatHappensWithResultsHeadingId,
  whoCanTakePartHeadingId,
} from '@models/headings';
import {
  drugRepurposingStudyIntroParagraphsId,
  getReadyToParticipateParagraphsId,
  howTheStudyWorksParagraphsId,
  questionsOrPasswordResetParagraphsId,
  whatHappensWithResultsParagraphsId,
  whoCanParticipateParagraphsId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import { renderOptions } from '@shared/utils/rich-text';

interface SectionProps {
  heading: string;
  content?: Document;
}

const Section: React.FC<SectionProps> = ({ heading, content }) => (
  <section>
    <h2 id={createHashLink(heading)}>{heading}</h2>
    {documentToReactComponents(content, renderOptions())}
  </section>
);

const DrugRepurposingStudyPageBody: React.FC<
  ComponentPropsWithLocale
> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query({
    query: GetDrugRepurposingStudyPageDocument,
    variables: {
      drugRepurposingStudyIntroParagraphsId,
      faqsHeadingId,
      foundationGiveDrugAccordionId,
      getReadyToParticipateHeadingId,
      getReadyToParticipateParagraphsId,
      howTheStudyWorksHeadingId,
      howTheStudyWorksParagraphsId,
      isThisAClinicalTrialAccordionId,
      joinToStayInRegistryAccordionId,
      locale: lang,
      questionsOrPasswordResetHeadingId,
      questionsOrPasswordResetParagraphsId,
      stayOnCurrentMedicationsAccordionId,
      stopDrugOrSideEffectsAccordionId,
      takeBothDrugsAccordionId,
      whatHappensWithResultsHeadingId,
      whatHappensWithResultsParagraphsId,
      whoCanParticipateParagraphsId,
      whoCanTakePartHeadingId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    drugRepurposingStudyIntro,
    howTheStudyWorksHeading,
    howTheStudyWorksParagraphs,
    whoCanTakePartHeading,
    whoCanParticipateParagraphs,
    whatHappensWithResultsHeading,
    whatHappensWithResultsParagraphs,
    getReadyToParticipateHeading,
    getReadyToParticipateParagraphs,
    questionsOrPasswordResetHeading,
    questionsOrPasswordResetParagraphs,
    faqsHeading,
    isThisAClinicalTrialAccordion,
    foundationGiveDrugAccordion,
    takeBothDrugsAccordion,
    stayOnCurrentMedicationsAccordion,
    stopDrugOrSideEffectsAccordion,
    joinToStayInRegistryAccordion,
  } = data;

  const sections = [
    {
      content: howTheStudyWorksParagraphs?.content?.json,
      heading: howTheStudyWorksHeading?.content ?? '',
    },
    {
      content: whoCanParticipateParagraphs?.content?.json,
      heading: whoCanTakePartHeading?.content ?? '',
    },
    {
      content: whatHappensWithResultsParagraphs?.content?.json,
      heading: whatHappensWithResultsHeading?.content ?? '',
    },
    {
      content: getReadyToParticipateParagraphs?.content?.json,
      heading: getReadyToParticipateHeading?.content ?? '',
    },
    {
      content: questionsOrPasswordResetParagraphs?.content?.json,
      heading: questionsOrPasswordResetHeading?.content ?? '',
    },
  ];

  const accordions = [
    isThisAClinicalTrialAccordion,
    foundationGiveDrugAccordion,
    takeBothDrugsAccordion,
    stayOnCurrentMedicationsAccordion,
    stopDrugOrSideEffectsAccordion,
    joinToStayInRegistryAccordion,
  ];

  const faqsHeadingText = faqsHeading?.content ?? '';

  const headings = [...sections.map(({ heading }) => heading), faqsHeadingText];

  return (
    <PageBody lang={lang} headings={headings}>
      {documentToReactComponents(
        drugRepurposingStudyIntro?.content?.json,
        renderOptions(),
      )}
      {sections.map(({ heading, content }) => (
        <Section key={heading} heading={heading} content={content} />
      ))}
      <section>
        <h2 id={createHashLink(faqsHeadingText)}>{faqsHeadingText}</h2>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion?.title}
            title={accordion?.title ?? ''}
            content={documentToReactComponents(
              accordion?.content?.json,
              renderOptions(),
            )}
          />
        ))}
      </section>
    </PageBody>
  );
};

export default DrugRepurposingStudyPageBody;
