import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetLivingWithBbsoasUpperPageDocument,
  type GetLivingWithBbsoasUpperPageQuery,
} from '@graphql/queries/pages/living-with-bbsoas/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  bbsoasClinicHeadingId,
  handingLettersHeadingId,
  readingGeneticReportHeadingId,
  registerPatientHeadingId,
  testAndTherapiesHeadingId,
  understandingBbsoasHeadingId,
} from '@models/headings';
import { registerPatientLinkId } from '@models/links';
import {
  registerPatientParagraphsId,
  testAndTherapiesParagraphsId,
  understandingBbsoasParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import Link from 'next/link';
import styles from './index.module.scss';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const LivingWithBbsoasUpperBody: React.FC<RegisterPageBodyProps> = async ({
  lang,
}) => {
  const { query } = getClient();
  const { data, error } = await query<GetLivingWithBbsoasUpperPageQuery>({
    query: GetLivingWithBbsoasUpperPageDocument,
    variables: {
      bbsoasClinicHeadingId,
      handingLettersHeadingId,
      locale: lang,
      readingGeneticReportHeadingId,
      registerPatientHeadingId,
      registerPatientLinkId,
      registerPatientParagraphsId,
      testAndTherapiesHeadingId,
      testAndTherapiesParagraphsId,
      understandingBbsoasHeadingId,
      understandingBbsoasParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    bbsoasClinicHeading,
    handingLettersHeading,
    registerPatientCta,
    registerPatientHeading,
    registerPatientParagraphs,
    testAndTherapiesHeading,
    testAndTherapiesParagraphs,
    understandingBbsoasHeading,
    understandingBbsoasParagraphs,
    readingGeneticReportHeading,
  } = data;

  const headings = [
    testAndTherapiesHeading?.content ?? '',
    registerPatientHeading?.content ?? '',
    understandingBbsoasHeading?.content ?? '',
    handingLettersHeading?.content ?? '',
    bbsoasClinicHeading?.content ?? '',
    readingGeneticReportHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(testAndTherapiesHeading?.content ?? '')}>
          {testAndTherapiesHeading?.content}
        </h2>
        {documentToReactComponents(testAndTherapiesParagraphs?.content?.json)}
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
      <section>
        <h2 id={createHashLink(understandingBbsoasHeading?.content ?? '')}>
          {understandingBbsoasHeading?.content}
        </h2>
        {documentToReactComponents(
          understandingBbsoasParagraphs?.content?.json,
        )}
      </section>
    </PageBody>
  );
};

export default LivingWithBbsoasUpperBody;
