import PageBodySection from '@components/page-body-section';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetLivingWithBbsoasBottomPageDocument,
  type GetLivingWithBbsoasBottomPageQuery,
} from '@graphql/queries/pages/living-with-bbsoas/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  bbsoasClinicHeadingId,
  handingLettersHeadingId,
} from '@models/headings';
import {
  bbsoasClinicParagraphsId,
  handingLettersParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';

interface LivingWithBbsoasBottomBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const LivingWithBbsoasBottomBody: React.FC<
  LivingWithBbsoasBottomBodyProps
> = async ({ lang }) => {
  const {
    data: {
      handingLettersHeading,
      handingLettersParagraphs,
      bbsoasClinicHeading,
      bbsoasClinicParagraphs,
    },
    error,
  } = await query<GetLivingWithBbsoasBottomPageQuery>({
    query: GetLivingWithBbsoasBottomPageDocument,
    variables: {
      locale: lang,
      handingLettersHeadingId,
      handingLettersParagraphsId,
      bbsoasClinicHeadingId,
      bbsoasClinicParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <PageBodySection>
      <section>
        <h2 id={createHashLink(handingLettersHeading?.content ?? '')}>
          {handingLettersHeading?.content}
        </h2>
        {documentToReactComponents(handingLettersParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(bbsoasClinicHeading?.content ?? '')}>
          {bbsoasClinicHeading?.content}
        </h2>
        {documentToReactComponents(bbsoasClinicParagraphs?.content?.json)}
      </section>
    </PageBodySection>
  );
};

export default LivingWithBbsoasBottomBody;
