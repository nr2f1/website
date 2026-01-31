import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPatientCountPageDocument,
  type GetPatientCountPageQuery,
} from '@graphql/queries/pages/patient-count/index.generated';
import { patientCountHeadingCountId } from '@models/headings';
import {
  patientCountIntroParagraphId,
  patientCountParagraphId,
} from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

const { query } = getClient();

const PatientCountPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const {
    data: {
      patientCountIntroParagraph,
      patientCountHeadingCount,
      patientCountParagraph,
    },
    error,
  } = await query<GetPatientCountPageQuery>({
    query: GetPatientCountPageDocument,
    variables: {
      locale: lang,
      patientCountHeadingCountId,
      patientCountIntroParagraphId,
      patientCountParagraphId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    patientCountHeadingCount?.content ?? '',
    'Join or Update the NR2F1 Patient Registry',
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
    </PageBody>
  );
};

export default PatientCountPageBody;
