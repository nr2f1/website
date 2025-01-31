import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it } from 'vitest';
import SocialMediaLinks from './social-media-links';

describe('SocialMediaLinks', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(<SocialMediaLinks />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });
});
