import PageBody from '@components/page-body';
import { getClient } from '@graphql/client';
import type { AvailableLocale } from '@i18n/locales';
import { initiativesHeadingId } from '@models/headings';
import { createHashLink } from '@shared/utils/hash-links';
import {
  GetResearchPageDocument,
  GetResearchPageQuery,
} from '@graphql/queries/pages/research/index.generated';

interface ResearchPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const ResearchPageBody: React.FC<ResearchPageBodyProps> = async ({ lang }) => {
  const {
    data: { initiativesHeading },
    error,
  } = await query<GetResearchPageQuery>({
    query: GetResearchPageDocument,
    variables: {
      locale: lang,
      initiativesHeadingId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [initiativesHeading?.content ?? ''];

  return (
    <PageBody lang={lang} headings={headings}>
      {/*<section>
        {documentToReactComponents(
          resourcesAvailableintroParagraphs?.content?.json,
        )}
      </section>*/}
      <section>
        <h2 id={createHashLink(initiativesHeading?.content ?? '')}>
          {initiativesHeading?.content}
        </h2>
        {/*{documentToReactComponents(
          biorepositorySamplesParagraphs?.content?.json,
        )}*/}
      </section>
    </PageBody>
  );
};

export default ResearchPageBody;
