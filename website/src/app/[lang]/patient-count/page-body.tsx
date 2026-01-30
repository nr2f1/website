import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPatientCountPageDocument,
  type GetPatientCountPageQuery,
} from '@graphql/queries/pages/patient-count/index.generated';
import { patientCountIntroParagraphId } from '@models/paragraphs';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';

const { query } = getClient();

const PatientCountPageBody: React.FC<ComponentPropsWithLocale> = async ({
  lang,
}) => {
  const {
    data: { patientCountIntroParagraph },
    error,
  } = await query<GetPatientCountPageQuery>({
    query: GetPatientCountPageDocument,
    variables: {
      locale: lang,
      patientCountIntroParagraphId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    'NR2F1 Foundation Global Patient Count',
    'Join or Update the NR2F1 Patient Registry',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        {documentToReactComponents(patientCountIntroParagraph?.content?.json)}
      </section>
    </PageBody>
  );
};

export default PatientCountPageBody;
