import { render, screen, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it } from 'vitest';
import FundraisingCampaigns from './markup';

const now = new Date('2026-10-13T12:00:00Z');

const campaigns = [
  {
    coverUrl: 'https://cdn.example.com/walk.jpg',
    createdAt: '2026-07-13T12:00:00Z',
    title: 'Walk for BBSOAS',
    url: 'https://givebutter.com/c/walk',
  },
];

const props = {
  campaigns,
  ctaHref: 'https://givebutter.com/nr2f1',
  ctaText: 'See all campaigns',
  heading: 'Fundraising campaigns',
  lang: 'en' as const,
  now,
};

describe('FundraisingCampaigns', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(<FundraisingCampaigns {...props} />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('renders a card per campaign with a relative creation date', () => {
    render(<FundraisingCampaigns {...props} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Fundraising campaigns',
    );
    expect(
      screen.getByRole('link', { name: /Walk for BBSOAS/ }),
    ).toHaveAttribute('href', 'https://givebutter.com/c/walk');
    expect(screen.getByText(/3 months ago/)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'See all campaigns' }),
    ).toHaveAttribute('href', 'https://givebutter.com/nr2f1');
  });

  it('shows an error line instead of cards when campaigns are unavailable', () => {
    render(<FundraisingCampaigns {...props} campaigns={null} />);

    expect(screen.getByText('Error loading campaigns')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
