import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it } from 'vitest';
import Accordion from './index';

const TITLE = 'summary';
const Content = () => <p>Lorem Ipsum</p>;

describe('accordion', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(
      <Accordion title={TITLE} content={<Content />} />,
    );
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('renders copy', () => {
    const { getByText } = render(
      <Accordion title={TITLE} content={<Content />} />,
    );

    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(getByText(TITLE)).toBeInTheDocument();
  });
});
