import { createOptimizedImageUrl } from '@shared/utils/image-optimisation';

const SVG_CONTENT_TYPE = 'image/svg+xml';

export interface PartnerLogoAsset {
  contentType?: string | null;
  height?: number | null;
  url?: string | null;
  width?: number | null;
}

export interface PartnerLogoProps {
  alt: string;
  asset: PartnerLogoAsset | null | undefined;
  // Rendered height in CSS pixels. Raster assets are requested at 2x.
  displayHeight: number;
}

// Contentful's Images API resizes raster files but serves SVG untouched, so
// only raster logos get a resized AVIF. Both get intrinsic width and height
// so the browser reserves the space before the file arrives.
export const partnerLogoProps = ({
  alt,
  asset,
  displayHeight,
}: PartnerLogoProps) => {
  if (!asset?.url) {
    return null;
  }

  const base = { alt, decoding: 'async' as const, loading: 'lazy' as const };
  const { contentType, height, url, width } = asset;

  if (!width || !height) {
    return { ...base, src: url };
  }

  const displayWidth = Math.round((width * displayHeight) / height);
  const src =
    contentType === SVG_CONTENT_TYPE
      ? url
      : createOptimizedImageUrl(url, {
          format: 'avif',
          height: displayHeight * 2,
          width: displayWidth * 2,
        });

  return { ...base, height: displayHeight, src, width: displayWidth };
};

const PartnerLogo: React.FC<PartnerLogoProps> = (props) => {
  const imgProps = partnerLogoProps(props);

  if (!imgProps) {
    return null;
  }

  return (
    <picture>
      <img {...imgProps} alt={imgProps.alt} />
    </picture>
  );
};

export default PartnerLogo;
