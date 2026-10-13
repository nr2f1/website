import { getClient } from '@graphql/client';
import { GetFundraisingCampaignsDocument } from '@graphql/queries/fundraising-campaigns/index.generated';
import { fundraisingCampaignsHeadingId } from '@models/headings';
import { fundraisingCampaignsLinkId } from '@models/links';
import { getCampaigns } from '@services/givebutter/campaigns';
import type { Campaign } from '@shared/types/api';
import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import { cacheLife, cacheTag } from 'next/cache';
import FundraisingCampaigns from './markup';

// Cached as one unit so the Givebutter request and the "created … ago" clock
// run at cache-fill time, not on every request. 'minutes' (revalidate after a
// minute, serve for up to an hour) keeps a Givebutter outage visible for at
// most a minute; the Contentful copy underneath still comes from the hourly
// `getClient()` cache.
const FundraisingCampaignsWithData: React.FC<
  ComponentPropsWithLocale
> = async ({ lang }) => {
  'use cache';
  cacheLife('minutes');
  cacheTag('contentful', 'givebutter');

  const { query } = getClient();
  const { data } = await query({
    // Some locales lack translations and must still prerender; 'all' keeps
    // the partial data instead of throwing.
    errorPolicy: 'all',
    query: GetFundraisingCampaignsDocument,
    variables: {
      fundraisingCampaignsHeadingId,
      fundraisingCampaignsLinkId,
      locale: lang,
    },
  });

  let campaigns: Campaign[] | null;

  try {
    campaigns = await getCampaigns();
  } catch (error) {
    console.error('Givebutter campaigns unavailable', error);
    campaigns = null;
  }

  return (
    <FundraisingCampaigns
      campaigns={campaigns}
      ctaHref={data?.fundraisingCampaignsLink?.target?.url ?? '/'}
      ctaText={data?.fundraisingCampaignsLink?.text?.content ?? ''}
      heading={data?.fundraisingCampaignsHeading?.content ?? ''}
      lang={lang}
      now={new Date()}
    />
  );
};

export default FundraisingCampaignsWithData;
