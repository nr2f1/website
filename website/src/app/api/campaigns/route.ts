const headers = new Headers({ 'content-type': 'application/json' });

interface GivebutterCampaignResponse {
  data: GivebutterCampaign[];
}

interface GivebutterCampaign {
  title: string;
  cover: {
    url: string;
  };
  created_at: string;
  url: string;
  raised: number;
  currency: string;
}

export async function GET(request: Request) {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const response = await fetch('https://api.givebutter.com/v1/campaigns', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIVEBUTTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const { data } = (await response.json()) as GivebutterCampaignResponse;

    const campaigns = data
      .slice(0, 6)
      .map(
        ({
          title,
          cover: { url: coverUrl },
          created_at,
          url,
          raised,
          currency,
        }) => ({
          coverUrl,
          created_at,
          currency,
          raised,
          title,
          url,
        }),
      );

    return new Response(JSON.stringify(campaigns), {
      headers,
      status: response.status,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response('Failed to get Givebutter campaigns', {
        status: Number(error.message),
      });
    }

    return new Response('Internal Server Error', { status: 500 });
  }
}
