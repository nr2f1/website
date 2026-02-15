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
import { routes } from '@routes/index';
import Link from 'next/link';
import styles from './index.module.scss';

interface WhatWeDoProps {
  lang: AvailableLocale;
}

const WhatWeDo: React.FC<WhatWeDoProps> = async ({ lang }) => {
  const { query } = getClient();

  const { data } = await query<GetWhatWeDoQuery>({
    query: GetWhatWeDoDocument,
    variables: {
      driveResearchHeadingId,
      driveResearchParagraphId,
      educatePeopleHeadingId,
      educatePeopleParagraphId,
      empowerFamiliesHeadingId,
      empowerFamiliesParagraphId,
      learnMoreCtaId,
      locale: lang,
      ourVisionParagraphId,
      whatWeDoHeadingId,
    },
  });

  if (!data) {
    return null;
  }

  const {
    whatWeDoHeading,
    ourVisionParagraph,
    educatePeopleHeading,
    educatePeopleParagraph,
    learnMoreCta,
    empowerFamiliesHeading,
    empowerFamiliesParagraph,
    driveResearchHeading,
    driveResearchParagraph,
  } = data;

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
              <Link
                href={routes['what-is-bbsoas'](lang)}
                className="button button--on-light"
              >
                {learnMoreCta?.content}
              </Link>
            </div>
            <div className={styles.card}>
              <div />
              <h3>{empowerFamiliesHeading?.content}</h3>
              {documentToReactComponents(
                empowerFamiliesParagraph?.content?.json,
              )}
              <Link
                href={routes['living-with-bbsoas'](lang)}
                className="button button--on-light"
              >
                {learnMoreCta?.content}
              </Link>
            </div>
            <div className={styles.card}>
              <div />
              <h3>{driveResearchHeading?.content}</h3>
              {documentToReactComponents(driveResearchParagraph?.content?.json)}
              <Link
                href={routes.research(lang)}
                className="button button--on-light"
              >
                {learnMoreCta?.content}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
