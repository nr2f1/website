import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPatientCountPageDocument,
  type GetPatientCountPageQuery,
} from '@graphql/queries/pages/patient-count/index.generated';
import {
  howToTakePartHeadingId,
  patientCountHeadingCountId,
  patientCountHeadingJoinId,
} from '@models/headings';
import { registerPatientLinkId } from '@models/links';
import {
  howToTakePartParagraphId,
  missionParagraphId,
  patientCountIntroParagraphId,
  patientCountParagraphId,
  patientCountParagraphJoinId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import Link from 'next/link';
import styles from './index.module.scss';

const { query } = getClient();

const PatientCountPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const { data, error } = await query<GetPatientCountPageQuery>({
    query: GetPatientCountPageDocument,
    variables: {
      howToTakePartHeadingId,
      howToTakePartParagraphId,
      locale: lang,
      missionParagraphId,
      patientCountHeadingCountId,
      patientCountHeadingJoinId,
      patientCountIntroParagraphId,
      patientCountParagraphId,
      patientCountParagraphJoinId,
      registerPatientLinkId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    patientCountIntroParagraph,
    patientCountHeadingCount,
    patientCountParagraph,
    patientCountHeadingJoin,
    patientCountParagraphJoin,
    howToTakePartHeading,
    howToTakePartParagraph,
    registerPatientCta,
    missionParagraph,
  } = data;

  const headings = [
    patientCountHeadingCount?.content ?? '',
    patientCountHeadingJoin?.content ?? '',
    howToTakePartHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        {documentToReactComponents(patientCountIntroParagraph?.content?.json)}
      </section>
      <section className={styles.containsTable}>
        <h2 id={createHashLink(patientCountHeadingCount?.content ?? '')}>
          {patientCountHeadingCount?.content ?? ''}
        </h2>
        {documentToReactComponents(patientCountParagraph?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(patientCountHeadingJoin?.content ?? '')}>
          {patientCountHeadingJoin?.content ?? ''}
        </h2>
        {documentToReactComponents(patientCountParagraphJoin?.content?.json)}
      </section>
      <section className={styles.register}>
        <h2 id={createHashLink(howToTakePartHeading?.content ?? '')}>
          {howToTakePartHeading?.content ?? ''}
        </h2>
        {documentToReactComponents(howToTakePartParagraph?.content?.json)}
        <Link
          href={registerPatientCta?.target?.url ?? ''}
          className={`button button--on-light ${styles.register__button}`}
          id="button"
        >
          {registerPatientCta?.text?.content ?? ''}
        </Link>
      </section>
      <div className={styles.mission}>
        {documentToReactComponents(missionParagraph?.content?.json)}
      </div>
    </PageBody>
  );
};

export default PatientCountPageBody;
