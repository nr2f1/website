import styles from './index.module.scss';

import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetStrategicPlanPageDocument,
  type GetStrategicPlanPageQuery,
} from '@graphql/queries/strategic-plan-page/index.generated';

import type { AvailableLocale } from '@i18n/locales';
import {
  advocacyHeadingId,
  educationHeadingId,
  ourObjectivesHeadingId,
} from '@models/headings';
import {
  advocacyParagraphsId,
  advocacyProgressParagraphsId,
  educationParagraphsId,
  ourObjectivesParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const StrategicPlanBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const {
    data: {
      ourObjectivesHeading,
      ourObjectivesParagraphs,
      educationHeading,
      educationParagraphs,
      advocacyHeading,
      advocacyParagraphs,
      advocacyProgressParagraphs,
    },
    error,
  } = await query<GetStrategicPlanPageQuery>({
    query: GetStrategicPlanPageDocument,
    variables: {
      locale: lang,
      ourObjectivesHeadingId,
      ourObjectivesParagraphsId,
      educationHeadingId,
      educationParagraphsId,
      advocacyHeadingId,
      advocacyParagraphsId,
      advocacyProgressParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    ourObjectivesHeading?.content ?? '',
    educationHeading?.content ?? '',
    advocacyHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(ourObjectivesHeading?.content ?? '')}>
          {ourObjectivesHeading?.content}
        </h2>
        {documentToReactComponents(ourObjectivesParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(educationHeading?.content ?? '')}>
          {educationHeading?.content}
        </h2>
        {documentToReactComponents(educationParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(advocacyHeading?.content ?? '')}>
          {advocacyHeading?.content}
        </h2>
        {documentToReactComponents(advocacyParagraphs?.content?.json)}
        <div className={styles.progress}>
          {documentToReactComponents(advocacyProgressParagraphs?.content?.json)}
        </div>
      </section>
    </PageBody>
  );
};

export default StrategicPlanBody;
