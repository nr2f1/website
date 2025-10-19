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

const { query } = getClient();

const LivingWithBbsoasUpperBody: React.FC<RegisterPageBodyProps> = async ({
  lang,
}) => {
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

  const headings = [
    data.testAndTherapiesHeading?.content ?? '',
    data.registerPatientHeading?.content ?? '',
    data.understandingBbsoasHeading?.content ?? '',
    data.handingLettersHeading?.content ?? '',
    data.bbsoasClinicHeading?.content ?? '',
    data.readingGeneticReportHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(data.testAndTherapiesHeading?.content ?? '')}>
          {data.testAndTherapiesHeading?.content}
        </h2>
        {documentToReactComponents(
          data.testAndTherapiesParagraphs?.content?.json,
        )}
      </section>
      <section className={styles.register}>
        <h2 id={createHashLink(data.registerPatientHeading?.content ?? '')}>
          {data.registerPatientHeading?.content}
        </h2>
        {documentToReactComponents(
          data.registerPatientParagraphs?.content?.json,
        )}
        <Link
          href={data.registerPatientCta?.target?.url ?? ''}
          className={`button button--on-light ${styles.register__button}`}
          id="button"
        >
          {data.registerPatientCta?.text?.content ?? ''}
        </Link>
      </section>
      <section>
        <h2 id={createHashLink(data.understandingBbsoasHeading?.content ?? '')}>
          {data.understandingBbsoasHeading?.content}
        </h2>
        {documentToReactComponents(
          data.understandingBbsoasParagraphs?.content?.json,
        )}
      </section>
    </PageBody>
  );
};

export default LivingWithBbsoasUpperBody;
