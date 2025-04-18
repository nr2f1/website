import * as HeaderGraphql from '@graphql/queries/header/index.generated';
import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Header from './markup';

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

const result = {
  data: {
    registerPatient: {
      content: 'Registrar un paciente',
      href: '/',
    },
    donate: {
      content: 'Donar',
      href: '/',
    },
    aboutBbsoas: {
      name: 'Sobre nosotros',
      linksCollection: {
        items: [],
      },
    },
    aboutUs: {
      name: 'Acerca de BBSOAS',
      linksCollection: {
        items: [],
      },
    },
    livingWithBbsoas: {
      name: 'Vivir con BBSOAS',
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
    },
    research: {
      name: 'Investigación',
      linksCollection: {
        items: [
          {
            content: 'About us link',
            href: '/',
          },
        ],
      },
    },
    supportUs: {
      name: 'Apoyanos',
      linksCollection: {
        items: [
          {
            content: 'about-bbsoas-link',
            href: '/',
          },
        ],
      },
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
    // @ts-ignore
    client: null,
    // @ts-ignore
    error: null,
    // @ts-ignore
    fetchMore: null,
    // @ts-ignore
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
