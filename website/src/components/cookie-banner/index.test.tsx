import type { GetCookieBannerQuery } from '@graphql/queries/cookie-banner/index.generated';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import CookieBanner from './markup';

const data = {
  heading: { content: 'We use cookies' },
  paragraphs: null,
  resourceSet: {
    resourcesCollection: {
      items: [
        { key: 'cookie-banner-accept', value: 'Accept all' },
        { key: 'cookie-banner-reject', value: 'Reject all' },
      ],
    },
  },
} as unknown as GetCookieBannerQuery;

describe('CookieBanner', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('shows the CMS copy to a visitor who has not chosen', async () => {
    render(<CookieBanner data={data} />);

    expect(
      await screen.findByRole('heading', { name: 'We use cookies' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accept all' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Reject all' })).toBeVisible();
  });

  it('hides once the visitor makes a choice', async () => {
    render(<CookieBanner data={data} />);

    fireEvent.click(await screen.findByRole('button', { name: 'Reject all' }));

    expect(
      screen.queryByRole('region', { name: 'Cookie consent banner' }),
    ).not.toBeInTheDocument();
  });
});
