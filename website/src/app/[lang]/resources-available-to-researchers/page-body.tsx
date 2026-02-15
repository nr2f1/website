import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
import {
  biorepositorySamplesParagraphsId,
  grantsSamplesParagraphsId,
  miceModelsParagraphsId,
  patientRegistryRecordsParagraphsId,
  resourcesAvailableintroParagraphsId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import styles from './index.module.scss';

interface ResourcesAvailableToResearchersBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const ResourcesAvailableToResearchersBody: React.FC<
  ResourcesAvailableToResearchersBodyProps
> = async ({ lang }) => {
  const { data, error } = await query<GetResourcesAvailableToResearchersPageQuery>({
    query: GetResourcesAvailableToResearchersPageDocument,
    variables: {
      biorepositorySamplesHeadingId,
      biorepositorySamplesParagraphsId,
      grantsHeadingId,
      grantsSamplesParagraphsId,
      locale: lang,
      miceModelsHeadingId,
      miceModelsParagraphsId,
      patientRegistryRecordsHeadingId,
      patientRegistryRecordsParagraphsId,
      resourcesAvailableintroParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const {
    biorepositorySamplesHeading,
    grantsHeading,
    patientRegistryRecordsHeading,
    miceModelsHeading,
    resourcesAvailableintroParagraphs,
    biorepositorySamplesParagraphs,
    grantsSamplesParagraphs,
    patientRegistryRecordsParagraphs,
    miceModelsParagraphs,
  } = data;

  const headings = [
    biorepositorySamplesHeading?.content ?? '',
    grantsHeading?.content ?? '',
    patientRegistryRecordsHeading?.content ?? '',
    miceModelsHeading?.content ?? '',
  ];

  return (
    <PageBody lang={lang} headings={headings}>
      <section>
        {documentToReactComponents(
          resourcesAvailableintroParagraphs?.content?.json,
        )}
      </section>
      <section>
        <h2 id={createHashLink(biorepositorySamplesHeading?.content ?? '')}>
          {biorepositorySamplesHeading?.content}
        </h2>
        {documentToReactComponents(
          biorepositorySamplesParagraphs?.content?.json,
        )}
      </section>
      <section>
        <h2 id={createHashLink(grantsHeading?.content ?? '')}>
          {grantsHeading?.content}
        </h2>
        {documentToReactComponents(grantsSamplesParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(patientRegistryRecordsHeading?.content ?? '')}>
          {patientRegistryRecordsHeading?.content}
        </h2>
        {documentToReactComponents(
          patientRegistryRecordsParagraphs?.content?.json,
        )}
      </section>
      <section className={styles.containsTable}>
        <h2 id={createHashLink(miceModelsHeading?.content ?? '')}>
          {miceModelsHeading?.content}
        </h2>
        {documentToReactComponents(miceModelsParagraphs?.content?.json)}
      </section>
    </PageBody>
  );
};

export default ResourcesAvailableToResearchersBody;
