import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PartnerLogo, { partnerLogoProps } from './index';

const png = {
  contentType: 'image/png',
  height: 400,
  url: 'https://images.ctfassets.net/space/logo.png',
  width: 1000,
};

describe('partnerLogoProps', () => {
  it('requests a 2x AVIF at the display size and sizes the img', () => {
    const props = partnerLogoProps({
      alt: 'Partner',
      asset: png,
      displayHeight: 96,
    });

    expect(props).toMatchObject({
      alt: 'Partner',
      height: 96,
      loading: 'lazy',
      width: 240,
    });
    expect(props?.src).toBe(
      'https://images.ctfassets.net/space/logo.png?w=480&h=192&q=85&fm=avif&fit=fill',
    );
  });

  it('serves SVG untouched but still sized', () => {
    const props = partnerLogoProps({
      alt: '',
      asset: {
        ...png,
        contentType: 'image/svg+xml',
        url: 'https://images.ctfassets.net/space/logo.svg',
      },
      displayHeight: 96,
    });

    expect(props).toMatchObject({
      height: 96,
      src: 'https://images.ctfassets.net/space/logo.svg',
      width: 240,
    });
  });

  it('serves an asset without dimensions untouched and unsized', () => {
    const props = partnerLogoProps({
      alt: '',
      asset: {
        contentType: 'image/svg+xml',
        height: null,
        url: 'https://images.ctfassets.net/space/logo.svg',
        width: null,
      },
      displayHeight: 96,
    });

    expect(props).toEqual({
      alt: '',
      decoding: 'async',
      loading: 'lazy',
      src: 'https://images.ctfassets.net/space/logo.svg',
    });
  });

  it('returns null without a url', () => {
    expect(partnerLogoProps({ alt: '', asset: null, displayHeight: 96 })).toBe(
      null,
    );
  });
});

describe('PartnerLogo', () => {
  it('renders an img with intrinsic dimensions', () => {
    render(<PartnerLogo alt="Partner" asset={png} displayHeight={96} />);

    const img = screen.getByRole('img', { name: 'Partner' });
    expect(img).toHaveAttribute('width', '240');
    expect(img).toHaveAttribute('height', '96');
  });
});
