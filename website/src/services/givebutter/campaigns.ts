import type { Campaign, GivebutterCampaign } from '@shared/types/api';

const GIVEBUTTER_CAMPAIGNS_URL = 'https://api.givebutter.com/v1/campaigns';
const MAX_CAMPAIGNS = 6;

interface GivebutterCampaignsResponse {
  data: GivebutterCampaign[];
}

// Server-only: reads the private Givebutter key. Throws on any failure so a
// broken response is never written to a cache; the caller decides what to
// render instead (see components/fundraising-campaigns/index.tsx).
export const getCampaigns = async (): Promise<Campaign[]> => {
  const apiKey = process.env.GIVEBUTTER_API_KEY;

  if (!apiKey) {
    throw new Error('GIVEBUTTER_API_KEY is not configured');
  }

  const response = await fetch(GIVEBUTTER_CAMPAIGNS_URL, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Givebutter responded with ${response.status}`);
  }

  const { data } = (await response.json()) as GivebutterCampaignsResponse;

  return data.slice(0, MAX_CAMPAIGNS).map((campaign) => ({
    coverUrl: campaign.cover?.url ?? '',
    createdAt: campaign.created_at,
    title: campaign.title,
    url: campaign.url,
  }));
};
