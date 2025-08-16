/**
 * Contentful Image Optimization Utilities
 *
 * This module provides utilities for optimizing images from Contentful
 * using Contentful's built-in image transformation API.
 */

export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'avif' | 'webp' | 'jpg' | 'png';
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  focus?:
    | 'center'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom'
    | 'top_right'
    | 'top_left'
    | 'bottom_right'
    | 'bottom_left'
    | 'face'
    | 'faces';
  radius?: number;
  progressive?: boolean;
}

export interface ResponsiveImageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const DEFAULT_RESPONSIVE_SIZES: ResponsiveImageSizes = {
  desktop: 1200,
  mobile: 768,
  tablet: 1024,
};

/**
 * Creates an optimized Contentful image URL with the specified transformations
 */
export const createOptimizedImageUrl = (
  baseUrl: string,
  options: ImageTransformOptions = {},
): string => {
  if (!baseUrl) return '';

  const {
    width,
    height,
    quality = 85,
    format = 'avif',
    fit = 'fill',
    focus,
    radius,
    progressive,
  } = options;

  // Remove existing query parameters
  const cleanUrl = baseUrl.split('?')[0];
  const params = new URLSearchParams();

  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());
  params.set('fm', format);
  params.set('fit', fit);
  if (focus) params.set('f', focus);
  if (radius) params.set('r', radius.toString());
  if (progressive) params.set('fl', 'progressive');

  return `${cleanUrl}?${params.toString()}`;
};

/**
 * Creates a responsive image source set for different screen sizes and pixel densities
 */
export const createResponsiveImageSources = (
  baseUrl: string,
  originalWidth: number,
  options: Partial<ImageTransformOptions> = {},
  sizes: ResponsiveImageSizes = DEFAULT_RESPONSIVE_SIZES,
) => {
  const mobileWidth = Math.min(originalWidth, sizes.mobile);
  const tabletWidth = Math.min(originalWidth, sizes.tablet);
  const desktopWidth = Math.min(originalWidth, sizes.desktop);

  return {
    desktop: {
      '1x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: desktopWidth,
      }),
      '2x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: desktopWidth * 2,
      }),
    },
    mobile: {
      '1x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: mobileWidth,
      }),
      '2x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: mobileWidth * 2,
      }),
    },
    tablet: {
      '1x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: tabletWidth,
      }),
      '2x': createOptimizedImageUrl(baseUrl, {
        ...options,
        width: tabletWidth * 2,
      }),
    },
  };
};

/**
 * Creates srcSet strings for responsive images
 */
export const createSrcSet = (
  sources: ReturnType<typeof createResponsiveImageSources>,
) => {
  return {
    desktop: `${sources.desktop['1x']} 1x, ${sources.desktop['2x']} 2x`,
    mobile: `${sources.mobile['1x']} 1x, ${sources.mobile['2x']} 2x`,
    tablet: `${sources.tablet['1x']} 1x, ${sources.tablet['2x']} 2x`,
  };
};

/**
 * Creates a fallback image URL (typically JPEG for maximum compatibility)
 */
export const createFallbackImageUrl = (
  baseUrl: string,
  width: number,
  quality = 85,
): string => {
  return createOptimizedImageUrl(baseUrl, {
    format: 'jpg',
    quality,
    width,
  });
};

/**
 * Generates appropriate sizes attribute for responsive images
 */
export const generateSizesAttribute = (
  sizes: ResponsiveImageSizes = DEFAULT_RESPONSIVE_SIZES,
): string =>
  `(max-width: ${sizes.mobile}px) 100vw, (max-width: ${sizes.tablet}px) 100vw, ${sizes.desktop}px`;

/**
 * Complete utility for creating optimized responsive image props
 */
export const createOptimisedImageProps = (
  baseUrl: string,
  originalWidth: number,
  originalHeight: number,
  alt: string,
  options: Partial<ImageTransformOptions> = {},
  sizes: ResponsiveImageSizes = DEFAULT_RESPONSIVE_SIZES,
) => {
  const sources = createResponsiveImageSources(
    baseUrl,
    originalWidth,
    options,
    sizes,
  );
  const srcSet = createSrcSet(sources);
  const fallbackUrl = createFallbackImageUrl(
    baseUrl,
    Math.min(originalWidth, sizes.desktop),
  );

  return {
    img: {
      alt,
      decoding: 'async' as const,
      height: originalHeight,
      loading: 'lazy' as const,
      sizes: generateSizesAttribute(sizes),
      src: fallbackUrl,
      style: {
        aspectRatio: `${originalWidth} / ${originalHeight}`,
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
      },
      width: originalWidth,
    },
    sources: {
      avif: {
        desktop: {
          srcSet: srcSet.desktop,
          type: 'image/avif',
        },
        mobile: {
          media: `(max-width: ${sizes.mobile}px)`,
          srcSet: srcSet.mobile,
          type: 'image/avif',
        },
        tablet: {
          media: `(max-width: ${sizes.tablet}px)`,
          srcSet: srcSet.tablet,
          type: 'image/avif',
        },
      },
      webp: {
        desktop: {
          srcSet: createSrcSet(
            createResponsiveImageSources(
              baseUrl,
              originalWidth,
              { ...options, format: 'webp' },
              sizes,
            ),
          ).desktop,
          type: 'image/webp',
        },
        mobile: {
          media: `(max-width: ${sizes.mobile}px)`,
          srcSet: createSrcSet(
            createResponsiveImageSources(
              baseUrl,
              originalWidth,
              { ...options, format: 'webp' },
              sizes,
            ),
          ).mobile,
          type: 'image/webp',
        },
        tablet: {
          media: `(max-width: ${sizes.tablet}px)`,
          srcSet: createSrcSet(
            createResponsiveImageSources(
              baseUrl,
              originalWidth,
              { ...options, format: 'webp' },
              sizes,
            ),
          ).tablet,
          type: 'image/webp',
        },
      },
    },
  };
};

/**
 * Utility for creating optimized images specifically for blog content
 */
export const createBlogImageProps = (
  baseUrl: string,
  originalWidth: number,
  originalHeight: number,
  alt: string,
) => {
  return createOptimisedImageProps(
    baseUrl,
    originalWidth,
    originalHeight,
    alt,
    {
      format: 'avif',
      quality: 85,
    },
    {
      desktop: 1200,
      mobile: 768,
      tablet: 1024,
    },
  );
};
