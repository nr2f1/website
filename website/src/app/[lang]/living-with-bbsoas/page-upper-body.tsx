import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetLivingWithBbsoasUpperPageDocument,
  type GetLivingWithBbsoasUpperPageQuery,
} from '@graphql/queries/living-with-bbsoas-page/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
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

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const LivingWithBbsoasUpperBody: React.FC<RegisterPageBodyProps> = async ({
  lang,
}) => {
  const {
    data: {
      testAndTherapiesHeading,
      testAndTherapiesParagraphs,
      registerPatientHeading,
      registerPatientParagraphs,
      registerPatientCta,
      understandingBbsoasHeading,
      understandingBbsoasParagraphs,
    },
    error,
  } = await query<GetLivingWithBbsoasUpperPageQuery>({
    query: GetLivingWithBbsoasUpperPageDocument,
    variables: {
      locale: lang,
      testAndTherapiesHeadingId,
      testAndTherapiesParagraphsId,
      registerPatientHeadingId,
      registerPatientParagraphsId,
      registerPatientLinkId,
      understandingBbsoasHeadingId,
      understandingBbsoasParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    testAndTherapiesHeading?.content ?? '',
    registerPatientHeading?.content ?? '',
    understandingBbsoasHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(testAndTherapiesHeading?.content ?? '')}>
          {testAndTherapiesHeading?.content}
        </h2>
        {documentToReactComponents(testAndTherapiesParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(registerPatientHeading?.content ?? '')}>
          {registerPatientHeading?.content}
        </h2>
        {documentToReactComponents(registerPatientParagraphs?.content?.json)}
        <Link
          href={registerPatientCta?.href ?? ''}
          className="button button--on-light"
        >
          {registerPatientCta?.content ?? ''}
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
