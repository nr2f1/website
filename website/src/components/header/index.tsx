import { getClient } from '@graphql/client';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import {
  aboutUsLinkConferenceId,
  aboutUsLinkFinancialsId,
  aboutUsLinkOrganisationId,
  aboutUsLinkOurNewsId,
  aboutUsLinkOurStrategyId,
  aboutUsLinkParnershipsId,
  contactUsLinkId,
  donateId,
  fundraiseLinkId,
  getInvolvedInBbsoasLinkId,
  livingWithBbsoasLinkId,
  patientCountLinkId,
  publicationsLinkId,
  registerABbsoasPatientLinkId,
  registerPatientId,
  researchLinkId,
  resourcesAvailableToresearchersLinkId,
  shopLinkId,
  supportGroupsLinkId,
  supportUsLinkId,
  volunteerLinkId,
  whatIsBbsoasLinkId,
} from '@models/links';
import {
  livingWithBbsoasMicrocopyId,
  researchMicrocopyId,
  supportUsMicrocopyId,
} from '@models/resource';
import { aboutCopiesId } from '@models/resource-sets';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { cacheLife, cacheTag } from 'next/cache';
import Header from './markup';

const HeaderWithData: React.FC<ComponentPropsWithLocale> = async ({ lang }) => {
  'use cache';
  cacheLife('hours');
  cacheTag('contentful');

  const { query } = getClient();
  const { data, error } = await query({
    query: GetHeaderDocument,
    variables: {
      aboutCopiesId,
      aboutUsLinkConferenceId,
      aboutUsLinkFinancialsId,
      aboutUsLinkOrganisationId,
      aboutUsLinkOurNewsId,
      aboutUsLinkOurStrategyId,
      aboutUsLinkParnershipsId,
      contactUsLinkId,
      donateId,
      fundraiseLinkId,
      getInvolvedInBbsoasLinkId,
      livingWithBbsoasLinkId,
      livingWithBbsoasMicrocopyId,
      locale: lang,
      patientCountLinkId,
      publicationsLinkId,
      registerABbsoasPatientLinkId,
      registerPatientId,
      researchLinkId,
      researchMicrocopyId,
      resourcesAvailableToresearchersLinkId,
      shopLinkId,
      supportGroupsLinkId,
      supportUsLinkId,
      supportUsMicrocopyId,
      volunteerLinkId,
      whatIsBbsoasLinkId,
    },
  });

  if (error || !data) {
    return null;
  }

  return <Header data={data} lang={lang} />;
};

export default HeaderWithData;
