import Accordion from '@components/accordion';
import PageBody from '@components/page-body';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetWhatIsBbsoasPageDocument,
  type GetWhatIsBbsoasPageQuery,
} from '@graphql/queries/pages/what-is-bbsoas/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  adhdAccordionId,
  alacrimaAccordionId,
  autismAccordionId,
  developmentDelayAccordionId,
  disabilityAccordionId,
  epilepsyAccordionId,
  hearingAccordionId,
  hypotoniaAccordionId,
  nystagmusAccordionId,
  repetitiveBehaviourAccordionId,
  speechDelayAccordionId,
  swallingAccordionId,
  visualImpairmentAccordionId,
} from '@models/accordions';
import {
  diagnosisHeadingId,
  incidenceHeadingId,
  inheritanceHeadingId,
  lifeHeadingId,
  managementHeadingId,
  prevalenceHeadingId,
  researchHeadingId,
  symptomsOfBbsoasHeadingId,
  symptomsVaryHeadingId,
  whatCausesBbsoasHeadingId,
} from '@models/headings';
import {
  diagnosisParagraphsId,
  incidenceParagraphsId,
  inheritanceParagraphsId,
  lifeParagraphsId,
  managementParagraphsId,
  prevalenceParagraphsId,
  researchParagraphsId,
  symptomsOfBbsoasParagraphsId,
  symptomsVaryParagraphsId,
  whatCausesBbsoasParagraphsId,
  whatIsBbsoasintroId,
} from '@models/paragraphs';
import { createHashLink } from '@shared/utils/hash-links';
import type { MedicalCondition, WithContext } from 'schema-dts';

interface RegisterPageBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const WhatIsBbsoasBody: React.FC<RegisterPageBodyProps> = async ({ lang }) => {
  const {
    data: {
      intro,
      whatCausesBbsoasHeading,
      whatCausesBbsoasParagraphs,
      symptomsOfBbsoasHeading,
      symptomsOfBbsoasParagraphs,
      developmentDelayAccordion,
      disabilityAccordion,
      visualImpairmentAccordion,
      alacrimaAccordion,
      nystagmusAccordion,
      repetitiveBehaviourAccordion,
      autismAccordion,
      speechDelayAccordion,
      swallingAccordion,
      hypotoniaAccordion,
      epilepsyAccordion,
      adhdAccordion,
      hearingAccordion,
      symptomsVaryHeading,
      symptomsVaryParagraphs,
      inheritanceHeading,
      inheritanceParagraphs,
      diagnosisHeading,
      diagnosisParagraphs,
      prevalenceHeading,
      prevalenceParagraphs,
      incidenceHeading,
      incidenceParagraphs,
      managementHeading,
      managementParagraphs,
      researchHeading,
      researchParagraphs,
      lifeHeading,
      lifeParagraphs,
    },
    error,
  } = await query<GetWhatIsBbsoasPageQuery>({
    query: GetWhatIsBbsoasPageDocument,
    variables: {
      adhdAccordionId,
      alacrimaAccordionId,
      autismAccordionId,
      developmentDelayAccordionId,
      diagnosisHeadingId,
      diagnosisParagraphsId,
      disabilityAccordionId,
      epilepsyAccordionId,
      hearingAccordionId,
      hypotoniaAccordionId,
      incidenceHeadingId,
      incidenceParagraphsId,
      inheritanceHeadingId,
      inheritanceParagraphsId,
      introId: whatIsBbsoasintroId,
      lifeHeadingId,
      lifeParagraphsId,
      locale: lang,
      managementHeadingId,
      managementParagraphsId,
      nystagmusAccordionId,
      prevalenceHeadingId,
      prevalenceParagraphsId,
      repetitiveBehaviourAccordionId,
      researchHeadingId,
      researchParagraphsId,
      speechDelayAccordionId,
      swallingAccordionId,
      symptomsOfBbsoasHeadingId,
      symptomsOfBbsoasParagraphsId,
      symptomsVaryHeadingId,
      symptomsVaryParagraphsId,
      visualImpairmentAccordionId,
      whatCausesBbsoasHeadingId,
      whatCausesBbsoasParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  const headings = [
    whatCausesBbsoasHeading?.content ?? '',
    symptomsOfBbsoasHeading?.content ?? '',
    symptomsVaryHeading?.content ?? '',
    inheritanceHeading?.content ?? '',
    diagnosisHeading?.content ?? '',
    prevalenceHeading?.content ?? '',
    incidenceHeading?.content ?? '',
    managementHeading?.content ?? '',
    researchHeading?.content ?? '',
    lifeHeading?.content ?? '',
  ];

  const associatedAnatomyLocale: Record<
    AvailableLocale,
    MedicalCondition['associatedAnatomy']
  > = {
    de: [
      { '@type': 'AnatomicalStructure', name: 'NR2F1 Gene' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Hirn' },
      { '@type': 'AnatomicalStructure', name: 'Visuelles System' },
    ],
    en: [
      { '@type': 'AnatomicalStructure', name: 'NR2F1 gene' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Brain' },
      { '@type': 'AnatomicalStructure', name: 'Visual system' },
    ],
    es: [
      { '@type': 'AnatomicalStructure', name: 'Gen NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Cromosoma 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cerebro' },
      { '@type': 'AnatomicalStructure', name: 'Sistema visual' },
    ],
    fr: [
      { '@type': 'AnatomicalStructure', name: 'Gène NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cerveau' },
      { '@type': 'AnatomicalStructure', name: 'Système visuel' },
    ],
    it: [
      { '@type': 'AnatomicalStructure', name: 'Gen NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Cromosoma 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cervello' },
      { '@type': 'AnatomicalStructure', name: 'Sistema visivo' },
    ],
    'pt-BR': [
      { '@type': 'AnatomicalStructure', name: 'Gênero NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Cromossomo 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cérebro' },
      { '@type': 'AnatomicalStructure', name: 'Sistema visual' },
    ],
    'zh-CN': [
      { '@type': 'AnatomicalStructure', name: '基因NR2F1' },
      { '@type': 'AnatomicalStructure', name: '染色体5q15' },
      { '@type': 'AnatomicalStructure', name: '大脑' },
      { '@type': 'AnatomicalStructure', name: '视觉系统' },
    ],
  };

  const description = intro?.content?.json?.content[0]?.content[0]?.value;
  const signOrSymptom = headings.map((heading) => ({
    '@type': 'MedicalSignOrSymptom',
    name: heading,
  })) as MedicalCondition['signOrSymptom'];

  const jsonLd: WithContext<MedicalCondition> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    alternateName: 'BBSOAS',
    associatedAnatomy: associatedAnatomyLocale[lang],
    description,
    name: 'Bosch-Boonstra-Schaaf Optic Atrophy Syndrome (BBSOAS)',
    signOrSymptom,
  };

  return (
    <PageBody lang={lang} headings={headings}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>{documentToReactComponents(intro?.content?.json)}</section>
      <section>
        <h2 id={createHashLink(whatCausesBbsoasHeading?.content ?? '')}>
          {whatCausesBbsoasHeading?.content}
        </h2>
        {documentToReactComponents(whatCausesBbsoasParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(symptomsOfBbsoasHeading?.content ?? '')}>
          {symptomsOfBbsoasHeading?.content}
        </h2>
        {documentToReactComponents(symptomsOfBbsoasParagraphs?.content?.json)}
        <Accordion
          title={developmentDelayAccordion?.title ?? ''}
          content={documentToReactComponents(
            developmentDelayAccordion?.content?.json,
          )}
        />
        <Accordion
          title={disabilityAccordion?.title ?? ''}
          content={documentToReactComponents(
            disabilityAccordion?.content?.json,
          )}
        />
        <Accordion
          title={visualImpairmentAccordion?.title ?? ''}
          content={documentToReactComponents(
            visualImpairmentAccordion?.content?.json,
          )}
        />
        <Accordion
          title={alacrimaAccordion?.title ?? ''}
          content={documentToReactComponents(alacrimaAccordion?.content?.json)}
        />
        <Accordion
          title={nystagmusAccordion?.title ?? ''}
          content={documentToReactComponents(nystagmusAccordion?.content?.json)}
        />
        <Accordion
          title={repetitiveBehaviourAccordion?.title ?? ''}
          content={documentToReactComponents(
            repetitiveBehaviourAccordion?.content?.json,
          )}
        />
        <Accordion
          title={autismAccordion?.title ?? ''}
          content={documentToReactComponents(autismAccordion?.content?.json)}
        />
        <Accordion
          title={speechDelayAccordion?.title ?? ''}
          content={documentToReactComponents(
            speechDelayAccordion?.content?.json,
          )}
        />
        <Accordion
          title={swallingAccordion?.title ?? ''}
          content={documentToReactComponents(swallingAccordion?.content?.json)}
        />
        <Accordion
          title={hypotoniaAccordion?.title ?? ''}
          content={documentToReactComponents(hypotoniaAccordion?.content?.json)}
        />
        <Accordion
          title={epilepsyAccordion?.title ?? ''}
          content={documentToReactComponents(epilepsyAccordion?.content?.json)}
        />
        <Accordion
          title={adhdAccordion?.title ?? ''}
          content={documentToReactComponents(adhdAccordion?.content?.json)}
        />
        <Accordion
          title={hearingAccordion?.title ?? ''}
          content={documentToReactComponents(hearingAccordion?.content?.json)}
        />
      </section>
      <section>
        <h2 id={createHashLink(symptomsVaryHeading?.content ?? '')}>
          {symptomsVaryHeading?.content}
        </h2>
        {documentToReactComponents(symptomsVaryParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(inheritanceHeading?.content ?? '')}>
          {inheritanceHeading?.content}
        </h2>
        {documentToReactComponents(inheritanceParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(diagnosisHeading?.content ?? '')}>
          {diagnosisHeading?.content}
        </h2>
        {documentToReactComponents(diagnosisParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(prevalenceHeading?.content ?? '')}>
          {prevalenceHeading?.content}
        </h2>
        {documentToReactComponents(prevalenceParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(incidenceHeading?.content ?? '')}>
          {incidenceHeading?.content}
        </h2>
        {documentToReactComponents(incidenceParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(managementHeading?.content ?? '')}>
          {managementHeading?.content}
        </h2>
        {documentToReactComponents(managementParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(researchHeading?.content ?? '')}>
          {researchHeading?.content}
        </h2>
        {documentToReactComponents(researchParagraphs?.content?.json)}
      </section>
      <section>
        <h2 id={createHashLink(lifeHeading?.content ?? '')}>
          {lifeHeading?.content}
        </h2>
        {documentToReactComponents(lifeParagraphs?.content?.json)}
      </section>
    </PageBody>
  );
};

export default WhatIsBbsoasBody;
