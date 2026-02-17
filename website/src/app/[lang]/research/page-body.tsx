import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetResearchPageDocument,
  type GetResearchPageQuery,
} from '@graphql/queries/pages/research/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  initiativesHeadingId,
  registerPatientHeadingId,
} from '@models/headings';
import { registerPatientLinkId } from '@models/links';
import {
  initiativesParagraphsId,
  registerPatientParagraphsId,
  researchIntroParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import Link from 'next/link';
import styles from './index.module.scss';

interface ResearchPageBodyProps {
  lang: AvailableLocale;
}


const ResearchPageBody: React.FC<ResearchPageBodyProps> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query<GetResearchPageQuery>({
    query: GetResearchPageDocument,
    variables: {
      initiativesHeadingId,
      initiativesParagraphsId,
      locale: lang,
      registerPatientHeadingId,
      registerPatientLinkId,
      registerPatientParagraphsId,
      researchIntroParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    initiativesHeading,
    registerPatientHeading,
    registerPatientParagraphs,
    registerPatientCta,
    researchIntroParagraphs,
    initiativesParagraphs,
  } = data;

  const headings = [initiativesHeading?.content ?? ''];

  return (
    <PageBody lang={lang} headings={headings}>
      <section className={styles.intro}>
        {documentToReactComponents(researchIntroParagraphs?.content?.json)}
      </section>
      <section className={styles.register}>
        <h2 id={createHashLink(registerPatientHeading?.content ?? '')}>
          {registerPatientHeading?.content}
        </h2>
        {documentToReactComponents(registerPatientParagraphs?.content?.json)}
        <Link
          href={registerPatientCta?.target?.url ?? ''}
          className={`button button--on-light ${styles.register__button}`}
          id="button"
        >
          {registerPatientCta?.text?.content ?? ''}
        </Link>
      </section>
      <section className={styles.initiatives}>
        <h2 id={createHashLink(initiativesHeading?.content ?? '')}>
          {initiativesHeading?.content}
        </h2>
        {documentToReactComponents(initiativesParagraphs?.content?.json)}
      </section>
    </PageBody>
  );
};

export default ResearchPageBody;
