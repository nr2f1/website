import { PreloadQuery } from '@graphql/client';
import { GetFundraisingCampaignsDocument } from '@graphql/queries/fundraising-campaigns/index.generated';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { Suspense } from 'react';
import FundrasingCampaigns, { type GivebutterCampaignProps } from './markup';
import FundraisingCampaignsSkeleton from './skeleton';

export const FundrasingCampaignsWithData: React.FC<GivebutterCampaignProps> = ({
  lang,
}) => {
  return (
    <PreloadQuery
      query={GetFundraisingCampaignsDocument}
      variables={{
        fundraisingCampaignsHeadingId,
        fundraisingCampaignsLinkId,
        locale: lang,
      }}
    >
      <Suspense fallback={<FundraisingCampaignsSkeleton />}>
        <FundrasingCampaigns lang={lang} />
      </Suspense>
    </PreloadQuery>
  );
};

export default FundrasingCampaignsWithData;
