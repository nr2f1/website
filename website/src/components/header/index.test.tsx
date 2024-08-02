import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from './layout';

const locale = 'en';

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
      return `/${locale}`;
    },
  };
});

describe('Header', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(<Header lang={locale} />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('render', async () => {
    const { getAllByRole } = render(<Header lang={locale} />);

    await waitFor(() => {
      const [primary, secondary] = getAllByRole('navigation');
      expect(primary).toBeInTheDocument();
      expect(secondary).toBeInTheDocument();
    });
  });
});
