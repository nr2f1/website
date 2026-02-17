import PageBodySection from '@components/page-body-section';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetStrategicPlanMiddlePageDocument,
  type GetStrategicPlanMiddlePageQuery,
} from '@graphql/queries/pages/strategic-plan/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { getThereHeadingId } from '@models/headings';
import {
  getThereParagraphsId,
  getThereProgressParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import progressStyles from './index.module.scss';

interface StrategicPlanMiddleBodyProps {
  lang: AvailableLocale;
}

const StrategicPlanMiddleBody: React.FC<StrategicPlanMiddleBodyProps> = async ({
  lang,
}) => {
  const { query } = getClient();
  const { data, error } = await query<GetStrategicPlanMiddlePageQuery>({
    query: GetStrategicPlanMiddlePageDocument,
    variables: {
      getThereHeadingId,
      getThereParagraphsId,
      getThereProgressParagraphsId,
      locale: lang,
    },
  });

  if (error || !data) {
    return null;
  }

  const { getThereHeading, getThereParagraphs, getThereProgressParagraphs } =
    data;

  return (
    <PageBodySection>
      <section>
        <h2 id={createHashLink(getThereHeading?.content ?? '')}>
          {getThereHeading?.content}
        </h2>
        {documentToReactComponents(getThereParagraphs?.content?.json)}
        <div className={progressStyles.progress}>
          {documentToReactComponents(getThereProgressParagraphs?.content?.json)}
        </div>
      </section>
    </PageBodySection>
  );
};

export default StrategicPlanMiddleBody;
