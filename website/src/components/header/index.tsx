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
  forResearchersLinkId,
  livingWithBbsoasLinkId,
  publicationsLinkId,
  registerABbsoasPatientLinkId,
  registerPatientId,
  researchLinkId,
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
        locale: lang,
        registerPatientId,
        donateId,
        aboutCopiesId,
        aboutUsLinkOrganisationId,
        aboutUsLinkOurStrategyId,
        aboutUsLinkOurNewsId,
        aboutUsLinkFinancialsId,
        aboutUsLinkParnershipsId,
        aboutUsLinkConferenceId,
        whatIsBbsoasLinkId,
        contactUsLinkId,
        livingWithBbsoasMicrocopyId,
        livingWithBbsoasLinkId,
        registerABbsoasPatientLinkId,
        supportGroupsLinkId,
        researchMicrocopyId,
        researchLinkId,
        publicationsLinkId,
        forResearchersLinkId,
        supportUsMicrocopyId,
        supportUsLinkId,
        volunteerLinkId,
        shopLinkId,
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
