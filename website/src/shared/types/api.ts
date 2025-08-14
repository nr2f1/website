export interface GivebutterCampaign {
  title: string;
  cover: {
    url: string;
  };
  created_at: string;
  url: string;
  raised: number;
  currency: string;
}

export interface CampaignApiResponse {
  coverUrl: string;
  created_at: string;
  currency: string;
  raised: number;
  title: string;
  url: string;
}
