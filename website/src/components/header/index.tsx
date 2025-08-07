import { PreloadQuery } from '@graphql/client';
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
  livingWithBbsoasLinkId,
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
import { Suspense } from 'react';
import Header, { type HeaderProps } from './markup';

const HeaderWithData: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <PreloadQuery
      // @ts-ignore
      query={GetHeaderDocument}
      variables={{
        aboutCopiesId,
        aboutUsLinkConferenceId,
        aboutUsLinkFinancialsId,
        aboutUsLinkOrganisationId,
        aboutUsLinkOurNewsId,
        aboutUsLinkOurStrategyId,
        aboutUsLinkParnershipsId,
        contactUsLinkId,
        donateId,
        livingWithBbsoasLinkId,
        livingWithBbsoasMicrocopyId,
        locale: lang,
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
      }}
    >
      {/* TODO: handle loading */}
      <Suspense fallback={<span>loading</span>}>
        <Header lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default HeaderWithData;
