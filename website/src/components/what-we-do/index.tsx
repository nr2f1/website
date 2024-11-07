import styles from './index.module.scss';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetWhatWeDoDocument,
  type GetWhatWeDoQuery,
} from '@graphql/queries/what-we-do/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  driveResearchHeadingId,
  educatePeopleHeadingId,
  empowerFamiliesHeadingId,
  whatWeDoHeadingId,
} from '@models/headings';
import { learnMoreCtaId } from '@models/links';
import {
  driveResearchParagraphId,
  educatePeopleParagraphId,
  empowerFamiliesParagraphId,
  ourVisionParagraphId,
} from '@models/paragraphs';

interface WhatWeDoProps {
  lang: AvailableLocale;
}

const WhatWeDo: React.FC<WhatWeDoProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: {
      whatWeDoHeading,
      ourVisionParagraph,
      educatePeopleHeading,
      educatePeopleParagraph,
      learnMoreCta,
      empowerFamiliesHeading,
      empowerFamiliesParagraph,
      driveResearchHeading,
      driveResearchParagraph,
    },
    error,
  } = await query<GetWhatWeDoQuery>({
    query: GetWhatWeDoDocument,
    variables: {
      locale: lang,
      whatWeDoHeadingId,
      ourVisionParagraphId,
      educatePeopleHeadingId,
      educatePeopleParagraphId,
      learnMoreCtaId,
      empowerFamiliesHeadingId,
      empowerFamiliesParagraphId,
      driveResearchHeadingId,
      driveResearchParagraphId,
    },
  });

  return (
    <div className={styles.what_we_do}>
      <div className="content-wrapper">
        <section>
          <h2>{whatWeDoHeading?.content}</h2>
          {documentToReactComponents(ourVisionParagraph?.content?.json)}
          <div className={styles.what_we_do__row}>
            <div className={styles.card}>
              <div />
              <h3>{educatePeopleHeading?.content}</h3>
              {documentToReactComponents(educatePeopleParagraph?.content?.json)}
              <a href="/" className="button button--on-light">
                {learnMoreCta?.content}
              </a>
            </div>
            <div className={styles.card}>
              <div />
              <h3>{empowerFamiliesHeading?.content}</h3>
              {documentToReactComponents(
                empowerFamiliesParagraph?.content?.json,
              )}
              <a href="/" className="button button--on-light">
                {learnMoreCta?.content}
              </a>
            </div>
            <div className={styles.card}>
              <div />
              <h3>{driveResearchHeading?.content}</h3>
              {documentToReactComponents(driveResearchParagraph?.content?.json)}
              <a href="/" className="button button--on-light">
                {learnMoreCta?.content}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
