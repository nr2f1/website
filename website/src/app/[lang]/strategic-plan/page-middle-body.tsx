import progressStyles from './index.module.scss';
import mainStyles from './page-body.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetStrategicPlanMiddlePageDocument,
  type GetStrategicPlanMiddlePageQuery,
} from '@graphql/queries/strategic-plan-page/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { getThereHeadingId } from '@models/headings';
import {
  getThereParagraphsId,
  getThereProgressParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

const { query } = getClient();

interface StrategicPlanMiddleBodyProps {
  lang: AvailableLocale;
}

const StrategicPlanMiddleBody: React.FC<StrategicPlanMiddleBodyProps> = async ({
  lang,
}) => {
  const {
    data: { getThereHeading, getThereParagraphs, getThereProgressParagraphs },
    error,
  } = await query<GetStrategicPlanMiddlePageQuery>({
    query: GetStrategicPlanMiddlePageDocument,
    variables: {
      locale: lang,
      getThereHeadingId,
      getThereParagraphsId,
      getThereProgressParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <section className={mainStyles['page-body']}>
      <div className="content-wrapper">
        <div className={mainStyles['page-body__content']}>
          <section>
            <h2 id={createHashLink(getThereHeading?.content ?? '')}>
              {getThereHeading?.content}
            </h2>
            {documentToReactComponents(getThereParagraphs?.content?.json)}
            <div className={progressStyles.progress}>
              {documentToReactComponents(
                getThereProgressParagraphs?.content?.json,
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default StrategicPlanMiddleBody;
