import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetStrategicPlanUpperPageDocument,
  type GetStrategicPlanUpperPageQuery,
} from '@graphql/queries/pages/strategic-plan/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  advocacyHeadingId,
  educationHeadingId,
  getThereHeadingId,
  ourObjectivesHeadingId,
  strategicResearchHeadingId,
} from '@models/headings';
import {
  advocacyParagraphsId,
  advocacyProgressParagraphsId,
  educationParagraphsId,
  educationProgressParagraphsId,
  ourObjectivesParagraphsId,
  researchProgressParagraphsId,
  strategicResearchParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const StrategicPlanUpperBody: React.FC<RegisterPageBodyProps> = async ({
  lang,
}) => {
  const {
    data: {
      ourObjectivesHeading,
      ourObjectivesParagraphs,
      educationHeading,
      educationParagraphs,
      educationProgressParagraphs,
      advocacyHeading,
      advocacyParagraphs,
      advocacyProgressParagraphs,
      researchHeading,
      researchParagraphs,
      researchProgressParagraphs,
      getThereHeading,
    },
    error,
  } = await query<GetStrategicPlanUpperPageQuery>({
    query: GetStrategicPlanUpperPageDocument,
    variables: {
      advocacyHeadingId,
      advocacyParagraphsId,
      advocacyProgressParagraphsId,
      educationHeadingId,
      educationParagraphsId,
      educationProgressParagraphsId,
      getThereHeadingId,
      locale: lang,
      ourObjectivesHeadingId,
      ourObjectivesParagraphsId,
      researchHeadingId: strategicResearchHeadingId,
      researchParagraphsId: strategicResearchParagraphsId,
      researchProgressParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    ourObjectivesHeading?.content ?? '',
    educationHeading?.content ?? '',
    advocacyHeading?.content ?? '',
    researchHeading?.content ?? '',
    getThereHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(ourObjectivesHeading?.content ?? '')}>
          {ourObjectivesHeading?.content}
        </h2>
        {documentToReactComponents(ourObjectivesParagraphs?.content?.json)}
      </section>
      <section className={styles.section}>
        <h2 id={createHashLink(educationHeading?.content ?? '')}>
          {educationHeading?.content}
        </h2>
        {documentToReactComponents(educationParagraphs?.content?.json)}
        <div className={styles.progress}>
          {documentToReactComponents(
            educationProgressParagraphs?.content?.json,
          )}
        </div>
      </section>
      <section className={styles.section}>
        <h2 id={createHashLink(advocacyHeading?.content ?? '')}>
          {advocacyHeading?.content}
        </h2>
        {documentToReactComponents(advocacyParagraphs?.content?.json)}
        <div className={styles.progress}>
          {documentToReactComponents(advocacyProgressParagraphs?.content?.json)}
        </div>
      </section>
      <section className={styles.section}>
        <h2 id={createHashLink(researchHeading?.content ?? '')}>
          {researchHeading?.content}
        </h2>
        {documentToReactComponents(researchParagraphs?.content?.json)}
        <div className={styles.progress}>
          {documentToReactComponents(researchProgressParagraphs?.content?.json)}
        </div>
      </section>
    </PageBody>
  );
};

export default StrategicPlanUpperBody;
