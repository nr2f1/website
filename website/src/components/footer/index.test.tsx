import * as FooterGraphql from '@graphql/queries/footer/index.generated';
import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Footer from './markup';

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
    stayInTouch: {
      content: 'Stay in touch',
    },
    socialMediaText: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'Connect with us via our social media channels:',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
    footerForm: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'Sign up to receive news and updates from the NR2F1 Foundation',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
    copyright: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'copyright',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
    warning: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'warning',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
    contactUs: {
      content: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: 'contact us',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
    },
  },
};

const useGetFooterSuspenseQuerySpy = vi.spyOn(
  FooterGraphql,
  'useGetFooterSuspenseQuery',
);

describe('Header', () => {
  useGetFooterSuspenseQuerySpy.mockImplementation(() => ({
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
    const { container } = render(<Footer lang={locale} />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });
});
