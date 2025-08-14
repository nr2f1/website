import type { CampaignApiResponse } from '@shared/types/api';

export const getCampaigns = async () => {
  try {
    const response = await fetch(`${window.origin}/api/campaigns`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch campaigns from API');
    }

    const data = await response.json();

    return data as CampaignApiResponse[];
  } catch (error) {
    throw new Error(
      `Failed to fetch campaigns from API, message: ${(error as Error).message}`,
    );
  }
};
