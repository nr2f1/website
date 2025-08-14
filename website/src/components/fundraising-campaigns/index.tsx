import { PreloadQuery } from '@graphql/client';
import { GetFundraisingCampaignsDocument } from '@graphql/queries/fundraising-campaigns/index.generated';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { Suspense } from 'react';
import FundrasingCampaigns, { type GivebutterCampaignProps } from './markup';

export const FundrasingCampaignsWithData: React.FC<GivebutterCampaignProps> = ({
  lang,
}) => {
  return (
    <PreloadQuery
      query={GetFundraisingCampaignsDocument}
      variables={{
        fundraisingCampaignsHeadingId,
        fundraisingCampaignsLinkId,
        lang,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <FundrasingCampaigns lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default FundrasingCampaignsWithData;
