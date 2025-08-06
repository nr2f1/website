import PageBody from '@components/page-body';
import { getClient } from '@graphql/client';
import {
  GetResourcesAvailableToResearchersPageDocument,
  type GetResourcesAvailableToResearchersPageQuery,
} from '@graphql/queries/pages/resources-available-to-researchers/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  biorepositorySamplesHeadingId,
  grantsHeadingId,
  miceModelsHeadingId,
  patientRegistryRecordsHeadingId,
} from '@models/headings';
import { createHashLink } from '@shared/utils/hash-links';

interface ResourcesAvailableToResearchersBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const ResourcesAvailableToResearchersBody: React.FC<
  ResourcesAvailableToResearchersBodyProps
> = async ({ lang }) => {
  const {
    data: {
      biorepositorySamplesHeading,
      grantsHeading,
      patientRegistryRecordsHeading,
      miceModelsHeading,
    },
    error,
  } = await query<GetResourcesAvailableToResearchersPageQuery>({
    query: GetResourcesAvailableToResearchersPageDocument,
    variables: {
      biorepositorySamplesHeadingId,
      grantsHeadingId,
      patientRegistryRecordsHeadingId,
      miceModelsHeadingId,
      locale: lang,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    biorepositorySamplesHeading?.content ?? '',
    grantsHeading?.content ?? '',
    patientRegistryRecordsHeading?.content ?? '',
    miceModelsHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        <h2 id={createHashLink(biorepositorySamplesHeading?.content ?? '')}>
          {biorepositorySamplesHeading?.content}
        </h2>
        {/*{documentToReactComponents(patientRegistryParagraphs?.content?.json)}*/}
      </section>
      <section>
        <h2 id={createHashLink(grantsHeading?.content ?? '')}>
          {grantsHeading?.content}
        </h2>
        {/*{documentToReactComponents(patientRegistryParagraphs?.content?.json)}*/}
      </section>
      <section>
        <h2 id={createHashLink(patientRegistryRecordsHeading?.content ?? '')}>
          {patientRegistryRecordsHeading?.content}
        </h2>
        {/*{documentToReactComponents(patientRegistryParagraphs?.content?.json)}*/}
      </section>
      <section>
        <h2 id={createHashLink(miceModelsHeading?.content ?? '')}>
          {miceModelsHeading?.content}
        </h2>
        {/*{documentToReactComponents(patientRegistryParagraphs?.content?.json)}*/}
      </section>
    </PageBody>
  );
};

export default ResourcesAvailableToResearchersBody;
