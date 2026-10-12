import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it } from 'vitest';
import Banner from './index';

describe('banner', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(
      <Banner
        headingContent="heading"
        textContent={<p>Lorem Ipsum</p>}
        ctaContent="click here"
        ctaUrl="https://example.com"
        imageUrl="https://example.com/image.jpg"
      />,
    );
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('renders copy', () => {
    const { getByRole } = render(
      <Banner
        headingContent="heading"
        textContent={<p>Lorem Ipsum</p>}
        ctaContent="click here"
        ctaUrl="https://example.com"
        imageUrl="https://example.com/image.jpg"
      />,
    );

    // The link's accessible name carries the heading as context (via
    // aria-label) so it is descriptive rather than a generic "click here".
    const link = getByRole('link', { name: 'click here heading' });

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('heading');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('click here');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
