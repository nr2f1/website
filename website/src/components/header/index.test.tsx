import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from '.';

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // @ts-ignore
    ...actual,
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
  it('renders without any accessibility violation', async () => {
    const { container } = render(<Header />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('render', async () => {
    const { getAllByRole } = render(<Header />);

    await waitFor(() => {
      const [primary, secondary] = getAllByRole('navigation');
      expect(primary).toBeInTheDocument();
      expect(secondary).toBeInTheDocument();
    });
  });
});
