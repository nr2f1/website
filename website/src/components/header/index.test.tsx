import { MockedProvider } from '@apollo/client/testing';
import { GetHeaderDocument } from '@graphql/queries/header/index.generated';
import { donateId, registerPatientId } from '@models/links';
import {
  aboutBbsoasId,
  aboutUsId,
  livingWithBbsoasId,
  researchId,
  supportUsId,
} from '@models/navlinks';
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

const mocks = [
  {
    request: {
      query: GetHeaderDocument,

      variables: {
        locale: locale,
        registerPatientId,
        donateId,
        aboutBbsoasId,
        livingWithBbsoasId,
        researchId,
        aboutUsId,
        supportUsId,
      },
    },

    result: {
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
    },
  },
];

describe('Header', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <Header lang={locale} />
      </MockedProvider>,
    );
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('render', async () => {
    const { getAllByRole } = render(
      <MockedProvider mocks={mocks}>
        <Header lang={locale} />
      </MockedProvider>,
    );

    await waitFor(() => {
      const [primary, secondary] = getAllByRole('navigation');
      expect(primary).toBeInTheDocument();
      expect(secondary).toBeInTheDocument();
    });
  });
});
