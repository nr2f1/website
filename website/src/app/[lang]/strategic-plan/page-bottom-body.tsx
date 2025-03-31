import mainStyles from '@styles/page-body-sectioned.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetStrategicPlanBottomPageDocument,
  type GetStrategicPlanBottomPageQuery,
} from '@graphql/queries/strategic-plan-page/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fiveYearsHeadingId } from '@models/headings';
import { fiveYearsParagraphsId } from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

const { query } = getClient();

interface StrategicPlanBottomBodyProps {
  lang: AvailableLocale;
}

const StrategicPlanBottomBody: React.FC<StrategicPlanBottomBodyProps> = async ({
  lang,
}) => {
  const {
    data: { fiveYearsHeading, fiveYearsParagraphs },
    error,
  } = await query<GetStrategicPlanBottomPageQuery>({
    query: GetStrategicPlanBottomPageDocument,
    variables: {
      locale: lang,
      fiveYearsHeadingId,
      fiveYearsParagraphsId,
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
            <h2 id={createHashLink(fiveYearsHeading?.content ?? '')}>
              {fiveYearsHeading?.content}
            </h2>
            {documentToReactComponents(fiveYearsParagraphs?.content?.json)}
          </section>
        </div>
      </div>
    </section>
  );
};

export default StrategicPlanBottomBody;
