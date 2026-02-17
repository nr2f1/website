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
  readingGeneticReportHeadingId,
} from '@models/headings';
import {
  bbsoasClinicParagraphsId,
  handingLettersParagraphsId,
  readingGeneticReportParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import { type Links, renderOptions } from '@shared/utils/rich-text';

interface LivingWithBbsoasBottomBodyProps {
  lang: AvailableLocale;
}

const LivingWithBbsoasBottomBody: React.FC<
  LivingWithBbsoasBottomBodyProps
> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query<GetLivingWithBbsoasBottomPageQuery>({
    query: GetLivingWithBbsoasBottomPageDocument,
    variables: {
      bbsoasClinicHeadingId,
      bbsoasClinicParagraphsId,
      handingLettersHeadingId,
      handingLettersParagraphsId,
      locale: lang,
      readingGeneticReportHeadingId,
      readingGeneticReportParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    bbsoasClinicHeading,
    bbsoasClinicParagraphs,
    handingLettersHeading,
    handingLettersParagraphs,
    readingGeneticReportHeading,
    readingGeneticReportParagraphs,
  } = data;

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
      <section>
        <h2 id={createHashLink(readingGeneticReportHeading?.content ?? '')}>
          {readingGeneticReportHeading?.content}
        </h2>
        {documentToReactComponents(
          readingGeneticReportParagraphs?.content?.json,
          renderOptions(
            readingGeneticReportParagraphs?.content?.links as Links,
          ),
        )}
      </section>
    </PageBodySection>
  );
};

export default LivingWithBbsoasBottomBody;
