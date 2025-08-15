import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetSupportUsCardsDocument,
  type GetSupportUsCardsQuery,
} from '@graphql/queries/support-us-cards/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  donateHeadingId,
  fundraiseHeadingId,
  volunteerHeadingId,
} from '@models/headings';
import { donateCtaId, fundraiseCtaId, volunteerCtaId } from '@models/links';
import {
  donateParagraphId,
  fundraiseParagraphId,
  volunteerParagraphId,
} from '@models/paragraphs';
import Link from 'next/link';
import styles from './index.module.scss';

interface SupportUsCardsProps {
  lang: AvailableLocale;
}

const SupportUsCards: React.FC<SupportUsCardsProps> = async ({ lang }) => {
  const { query } = getClient();

  const {
    data: {
      donateCta,
      donateHeading,
      donateParagraph,
      fundraiseCta,
      fundraiseHeading,
      fundraiseParagraph,
      volunteerCta,
      volunteerHeading,
      volunteerParagraph,
    },
  } = await query<GetSupportUsCardsQuery>({
    query: GetSupportUsCardsDocument,
    variables: {
      donateCtaId,
      donateHeadingId,
      donateParagraphId,
      fundraiseCtaId,
      fundraiseHeadingId,
      fundraiseParagraphId,
      locale: lang,
      volunteerCtaId,
      volunteerHeadingId,
      volunteerParagraphId,
    },
  });

  return (
    <div className={styles.support_us_cards}>
      <div className="content-wrapper">
        <section>
          <div className={styles.support_us_cards__row}>
            <div className={styles.card}>
              <div />
              <h2>{donateHeading?.content}</h2>
              {documentToReactComponents(donateParagraph?.content?.json)}
              <Link
                className="button button--on-light"
                href={donateCta?.target?.url ?? '/'}
              >
                {donateCta?.text?.content}
              </Link>
            </div>
            <div className={styles.card}>
              <div />
              <h2>{fundraiseHeading?.content}</h2>
              {documentToReactComponents(fundraiseParagraph?.content?.json)}
              <Link
                className="button button--on-light"
                href={fundraiseCta?.target?.url ?? '/'}
              >
                {fundraiseCta?.text?.content}
              </Link>
            </div>
            <div className={styles.card}>
              <div />
              <h2>{volunteerHeading?.content}</h2>
              {documentToReactComponents(volunteerParagraph?.content?.json)}
              <Link
                className="button button--on-light"
                href={volunteerCta?.target?.url ?? '/'}
              >
                {volunteerCta?.text?.content}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportUsCards;
