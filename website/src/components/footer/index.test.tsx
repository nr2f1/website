import * as FooterGraphql from '@graphql/queries/footer/index.generated';
import { render, waitFor } from '@testing-library/react';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Footer from './markup';

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
    contactUs: {
      content: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'contact us',
                },
              ],
              data: {},
              nodeType: 'paragraph',
            },
          ],
          data: {},
          nodeType: 'document',
        },
      },
    },
    copyright: {
      content: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'copyright',
                },
              ],
              data: {},
              nodeType: 'paragraph',
            },
          ],
          data: {},
          nodeType: 'document',
        },
      },
    },
    footerForm: {
      content: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value:
                    'Sign up to receive news and updates from the NR2F1 Foundation',
                },
              ],
              data: {},
              nodeType: 'paragraph',
            },
          ],
          data: {},
          nodeType: 'document',
        },
      },
    },
    socialMediaText: {
      content: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'Connect with us via our social media channels:',
                },
              ],
              data: {},
              nodeType: 'paragraph',
            },
          ],
          data: {},
          nodeType: 'document',
        },
      },
    },
    stayInTouch: {
      content: 'Stay in touch',
    },
    warning: {
      content: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'warning',
                },
              ],
              data: {},
              nodeType: 'paragraph',
            },
          ],
          data: {},
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
    const { container } = render(<Footer lang={locale} />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });
});
