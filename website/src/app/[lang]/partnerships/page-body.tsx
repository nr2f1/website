import styles from './index.module.scss';

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
      locale: lang,
      introId: whatIsBbsoasintroId,
      whatCausesBbsoasHeadingId,
      whatCausesBbsoasParagraphsId,
      symptomsOfBbsoasHeadingId,
      symptomsOfBbsoasParagraphsId,
      developmentDelayAccordionId,
      disabilityAccordionId,
      visualImpairmentAccordionId,
      alacrimaAccordionId,
      nystagmusAccordionId,
      repetitiveBehaviourAccordionId,
      autismAccordionId,
      speechDelayAccordionId,
      swallingAccordionId,
      hypotoniaAccordionId,
      epilepsyAccordionId,
      adhdAccordionId,
      hearingAccordionId,
      symptomsVaryHeadingId,
      symptomsVaryParagraphsId,
      inheritanceHeadingId,
      inheritanceParagraphsId,
      diagnosisHeadingId,
      diagnosisParagraphsId,
      prevalenceHeadingId,
      prevalenceParagraphsId,
      incidenceHeadingId,
      incidenceParagraphsId,
      managementHeadingId,
      managementParagraphsId,
      researchHeadingId,
      researchParagraphsId,
      lifeHeadingId,
      lifeParagraphsId,
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
    en: [
      { '@type': 'AnatomicalStructure', name: 'NR2F1 gene' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Brain' },
      { '@type': 'AnatomicalStructure', name: 'Visual system' },
    ],
    fr: [
      { '@type': 'AnatomicalStructure', name: 'Gène NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cerveau' },
      { '@type': 'AnatomicalStructure', name: 'Système visuel' },
    ],
    de: [
      { '@type': 'AnatomicalStructure', name: 'NR2F1 Gene' },
      { '@type': 'AnatomicalStructure', name: 'Chromosome 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Hirn' },
      { '@type': 'AnatomicalStructure', name: 'Visuelles System' },
    ],
    es: [
      { '@type': 'AnatomicalStructure', name: 'Gen NR2F1' },
      { '@type': 'AnatomicalStructure', name: 'Cromosoma 5q15' },
      { '@type': 'AnatomicalStructure', name: 'Cerebro' },
      { '@type': 'AnatomicalStructure', name: 'Sistema visual' },
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
    name: 'Bosch-Boonstra-Schaaf Optic Atrophy Syndrome (BBSOAS)',
    alternateName: 'BBSOAS',
    description,
    associatedAnatomy: associatedAnatomyLocale[lang],
    signOrSymptom,
  };

  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__row']}>
        <article className={styles['page-body']}>
          <h2>
            We rely on partnerships with other people and organizations to be
            successful.
          </h2>
          <p>
            The NR2F1 Foundation partners with many organizations around the
            world including non-profits, research institutions, government,
            academic and industry. We partner and work together to:
          </p>
          <ul>
            <li>
              drive international research with the shared goal of discovering
              life-changing treatments for BBSOAS patients
            </li>
            <li>
              to better serve those living with BBSOAS by exchanging best
              practices and resources
            </li>
          </ul>
          <h3>Our relationships include:</h3>
        </article>
      </div>
    </div>
  );
};

export default WhatIsBbsoasBody;
