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

vi.mock('next/image', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // @ts-ignore
    ...actual,
    default(props: unknown) {
      // @ts-ignore
      // biome-ignore lint/a11y/useAltText: This is a test file
      return <img {...props} />;
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
    const { getByRole } = render(<Header />);

    await waitFor(() => {
      const logo = getByRole('img', { name: 'nr2f1 foundation logo' });
      expect(logo).toBeInTheDocument();
    });
  });
});
