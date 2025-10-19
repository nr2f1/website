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

const { query } = getClient();

const LivingWithBbsoasBottomBody: React.FC<
  LivingWithBbsoasBottomBodyProps
> = async ({ lang }) => {
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

  return (
    <PageBodySection>
      <section>
        <h2 id={createHashLink(data.handingLettersHeading?.content ?? '')}>
          {data.handingLettersHeading?.content}
        </h2>
        {documentToReactComponents(
          data.handingLettersParagraphs?.content?.json,
        )}
      </section>
      <section>
        <h2 id={createHashLink(data.bbsoasClinicHeading?.content ?? '')}>
          {data.bbsoasClinicHeading?.content}
        </h2>
        {documentToReactComponents(data.bbsoasClinicParagraphs?.content?.json)}
      </section>
      <section>
        <h2
          id={createHashLink(data.readingGeneticReportHeading?.content ?? '')}
        >
          {data.readingGeneticReportHeading?.content}
        </h2>
        {documentToReactComponents(
          data.readingGeneticReportParagraphs?.content?.json,
          renderOptions(
            data.readingGeneticReportParagraphs?.content?.links as Links,
          ),
        )}
      </section>
    </PageBodySection>
  );
};

export default LivingWithBbsoasBottomBody;
