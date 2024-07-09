import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from '.';

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // @ts-ignore
    ...actual,
    // your mocked methods
    useRouter() {
      return {
        push: () => vi.fn(),
      };
    },
    usePathname() {
      return '/en';
    },
  };
});

describe('Header', () => {
  it('should render', async () => {
    const { container } = render(<Header />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('should render', async () => {
    const { getByRole } = render(<Header />);
    const logo = getByRole('img', { name: 'nr2f1 foundation logo' });
    expect(logo).toBeInTheDocument();
  });
});
