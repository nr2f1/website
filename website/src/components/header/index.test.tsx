import * as HeaderGraphql from '@graphql/queries/header/index.generated';
import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from './markup';

const locale = 'en';

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // @ts-expect-error
    ...actual,
    usePathname() {
      return `/${locale}`;
    },
    useRouter() {
      return {
        push: () => vi.fn(),
      };
    },
  };
});

const result = {
  data: {
    aboutBbsoas: {
      linksCollection: {
        items: [],
      },
      name: 'Sobre nosotros',
    },
    aboutUs: {
      linksCollection: {
        items: [],
      },
      name: 'Acerca de BBSOAS',
    },
    donate: {
      content: 'Donar',
      href: '/',
    },
    livingWithBbsoas: {
      linksCollection: {
        items: [
          {
            content: 'about-bbsoas-link',
            href: '/',
          },
          {
            content: 'Living with BBSOAS link',
            href: '/',
          },
        ],
      },
      name: 'Vivir con BBSOAS',
    },
    registerPatient: {
      content: 'Registrar un paciente',
      href: '/',
    },
    research: {
      linksCollection: {
        items: [
          {
            content: 'About us link',
            href: '/',
          },
        ],
      },
      name: 'Investigación',
    },
    supportUs: {
      linksCollection: {
        items: [
          {
            content: 'about-bbsoas-link',
            href: '/',
          },
        ],
      },
      name: 'Apoyanos',
    },
  },
};

const useGetHeaderSuspenseQuerySpy = vi.spyOn(
  HeaderGraphql,
  'useGetHeaderSuspenseQuery',
);

describe('Header', () => {
  useGetHeaderSuspenseQuerySpy.mockImplementation(() => ({
    ...result,
    // @ts-expect-error
    client: null,
    // @ts-expect-error
    error: null,
    // @ts-expect-error
    fetchMore: null,
    // @ts-expect-error
    networkStatus: null,
  }));

  it('renders without any accessibility violation', async () => {
    const { container } = render(<Header lang={locale} />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('render', async () => {
    const { getAllByRole } = render(<Header lang={locale} />);

    const [primary, secondary] = getAllByRole('navigation');
    expect(primary).toBeInTheDocument();
    expect(secondary).toBeInTheDocument();
  });
});
