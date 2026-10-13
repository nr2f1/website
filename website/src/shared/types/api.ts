// One campaign in Givebutter's GET /v1/campaigns response (only the fields
// services/givebutter/campaigns.ts reads).
export interface GivebutterCampaign {
  cover: { url: string } | null;
  created_at: string;
  currency: string;
  raised: number;
  title: string;
  url: string;
}

// What the fundraising cards render.
export interface Campaign {
  coverUrl: string;
  createdAt: string;
  title: string;
  url: string;
}
