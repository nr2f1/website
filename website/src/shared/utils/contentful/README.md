# Contentful Image Optimization

This module provides comprehensive image optimization utilities for Contentful assets, featuring automatic responsive image generation, modern format support (AVIF/WebP), and performance optimizations.

## Features

- 🚀 **Automatic Image Optimization**: Converts images to modern formats (AVIF, WebP) with fallbacks
- 📱 **Responsive Images**: Generates optimized images for different screen sizes and pixel densities
- ⚡ **Performance Focused**: Includes lazy loading, progressive enhancement, and optimized quality settings
- 🎯 **Contentful Integration**: Built specifically for Contentful's image transformation API
- ♿ **Accessibility Ready**: Proper alt text handling and keyboard navigation support

## Quick Start

### Basic Usage with Rich Text

The `rich-text.tsx` utility automatically optimizes images embedded in Contentful rich text content:

```tsx
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '@shared/utils/rich-text';

// Images in rich text content are automatically optimized
const content = documentToReactComponents(richTextJson, renderOptions(links));
```

### Using the OptimizedImage Component

```tsx
import { OptimizedImage } from '@shared/components';

function MyComponent() {
  return (
    <OptimizedImage
      src="https://images.ctfassets.net/your-space/asset-id/image.jpg"
      alt="Description of the image"
      width={800}
      height={600}
      className="my-image-class"
    />
  );
}
```

### Specialized Image Components

```tsx
import {
  HeroOptimizedImage,
  ThumbnailOptimizedImage,
  CardOptimizedImage
} from '@shared/components';

// Hero images (larger sizes, higher quality)
<HeroOptimizedImage src={heroUrl} alt="Hero image" width={1920} height={1080} />

// Thumbnails (smaller sizes, optimized for performance)
<ThumbnailOptimizedImage src={thumbUrl} alt="Thumbnail" width={300} height={200} />

// Card images (medium sizes, balanced quality/performance)
<CardOptimizedImage src={cardUrl} alt="Card image" width={600} height={400} />
```

## API Reference

### `createOptimizedImageUrl(baseUrl, options)`

Creates a single optimized image URL with specified transformations.

```tsx
const optimizedUrl = createOptimizedImageUrl(
  'https://images.ctfassets.net/space/asset/image.jpg',
  {
    width: 800,
    height: 600,
    quality: 85,
    format: 'webp',
    fit: 'fill',
    progressive: true
  }
);
```

**Options:**
- `width?: number` - Target width in pixels
- `height?: number` - Target height in pixels
- `quality?: number` - Image quality (1-100, default: 85)
- `format?: 'avif' | 'webp' | 'jpg' | 'png'` - Output format (default: 'avif')
- `fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb'` - How to fit the image (default: 'fill')
- `focus?: string` - Focus area for cropping ('center', 'face', 'top', etc.)
- `radius?: number` - Border radius for rounded corners
- `progressive?: boolean` - Enable progressive loading (default: true)

### `createResponsiveImageSources(baseUrl, originalWidth, options, sizes)`

Generates responsive image sources for different screen sizes and pixel densities.

```tsx
const sources = createResponsiveImageSources(
  'https://images.ctfassets.net/space/asset/image.jpg',
  1200, // original width
  { quality: 90, format: 'webp' },
  { mobile: 768, tablet: 1024, desktop: 1200 }
);
```

### `createOptimizedImageProps(baseUrl, width, height, alt, options, sizes)`

Complete utility that returns all props needed for a responsive `<picture>` element.

```tsx
const imageProps = createOptimizedImageProps(
  'https://images.ctfassets.net/space/asset/image.jpg',
  800,
  600,
  'Alt text description',
  { quality: 85, format: 'avif' },
  { mobile: 768, tablet: 1024, desktop: 1200 }
);

// Returns:
// {
//   img: { src, alt, width, height, loading, decoding, sizes, style },
//   sources: {
//     avif: { mobile, tablet, desktop },
//     webp: { mobile, tablet, desktop }
//   }
// }
```

## Generated HTML Structure

The optimization utilities generate modern `<picture>` elements with multiple format support:

```html
<picture>
  <!-- AVIF format (best compression, modern browsers) -->
  <source
    media="(max-width: 768px)"
    srcset="image-400.avif 1x, image-800.avif 2x"
    type="image/avif"
  />
  <source
    media="(max-width: 1024px)"
    srcset="image-600.avif 1x, image-1200.avif 2x"
    type="image/avif"
  />
  <source
    srcset="image-800.avif 1x, image-1600.avif 2x"
    type="image/avif"
  />

  <!-- WebP format (good compression, wide support) -->
  <source
    media="(max-width: 768px)"
    srcset="image-400.webp 1x, image-800.webp 2x"
    type="image/webp"
  />
  <source
    media="(max-width: 1024px)"
    srcset="image-600.webp 1x, image-1200.webp 2x"
    type="image/webp"
  />
  <source
    srcset="image-800.webp 1x, image-1600.webp 2x"
    type="image/webp"
  />

  <!-- JPEG fallback (universal support) -->
  <img
    src="image-800.jpg"
    alt="Description"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
  />
</picture>
```

## Performance Benefits

### File Size Reduction
- **AVIF**: Up to 50% smaller than JPEG with better quality
- **WebP**: 25-35% smaller than JPEG with comparable quality
- **Progressive JPEG**: Faster perceived loading

### Network Optimization
- **Responsive Images**: Only download appropriate size for device
- **Retina Support**: 2x images for high-DPI displays
- **Lazy Loading**: Images load only when needed
- **Modern Formats**: Automatic format selection based on browser support

### Performance Metrics
Example file size comparison for a 1200×800 photo:
- Original JPEG: 280KB
- Optimized JPEG: 85KB (-70%)
- WebP: 58KB (-79%)
- AVIF: 41KB (-85%)

## Browser Support

### Format Support
- **AVIF**: Chrome 85+, Firefox 93+, Safari 16+
- **WebP**: Chrome 32+, Firefox 65+, Safari 14+
- **JPEG**: Universal support (fallback)

### Progressive Enhancement
The implementation uses progressive enhancement:
1. Modern browsers get AVIF (smallest files)
2. Older browsers get WebP (good compression)
3. Legacy browsers get optimized JPEG (universal support)

## Configuration

### Default Responsive Breakpoints

```tsx
const DEFAULT_RESPONSIVE_SIZES = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};
```

### Recommended Quality Settings

```tsx
// Different use cases
const QUALITY_SETTINGS = {
  thumbnail: 75,      // Small images, prioritize performance
  content: 85,        // Blog images, balance quality/size
  hero: 90,          // Large hero images, prioritize quality
  print: 95,         // High-quality images
};
```

## Best Practices

### 1. Choose Appropriate Sizes
```tsx
// Good: Realistic maximum sizes
<OptimizedImage
  sizes={{ mobile: 400, tablet: 600, desktop: 800 }}
  // ...
/>

// Avoid: Unnecessarily large sizes
<OptimizedImage
  sizes={{ mobile: 1920, tablet: 2400, desktop: 3840 }}
  // ...
/>
```

### 2. Use Semantic Alt Text
```tsx
// Good: Descriptive alt text
<OptimizedImage alt="Research team analyzing data in laboratory" />

// Avoid: Generic or empty alt text
<OptimizedImage alt="Image" />
<OptimizedImage alt="" />
```

### 3. Prioritize Above-the-Fold Images
```tsx
// Hero images should load immediately
<HeroOptimizedImage priority />

// Content images can lazy load
<OptimizedImage loading="lazy" />
```

### 4. Consider Image Dimensions
```tsx
// Provide accurate dimensions to prevent layout shift
<OptimizedImage
  width={800}
  height={600}
  style={{ aspectRatio: '4/3' }}
/>
```

## Troubleshooting

### Common Issues

**Images not optimizing:**
- Ensure URLs contain `images.ctfassets.net` or `ctfassets.net`
- Check that asset exists and is accessible
- Verify Contentful space permissions

**Layout shift on load:**
- Always provide width and height attributes
- Use `aspect-ratio` CSS property
- Consider using placeholder images

**Performance issues:**
- Use appropriate image sizes for context
- Enable lazy loading for below-the-fold images
- Optimize quality settings based on use case

### Debugging

Enable console logging to debug image optimization:

```tsx
// In rich-text.tsx, the console.log shows asset details
console.log({ node }); // Shows the asset being processed
```

Check generated URLs in developer tools to verify transformations are applied correctly.

## Migration Guide

### From Regular img Tags

```tsx
// Before
<img src={asset.url} alt={asset.description} />

// After
<OptimizedImage
  src={asset.url}
  alt={asset.description}
  width={asset.width}
  height={asset.height}
/>
```

### From Next.js Image

```tsx
// Before
import Image from 'next/image';
<Image src={src} alt={alt} width={800} height={600} />

// After
import { OptimizedImage } from '@shared/components';
<OptimizedImage src={src} alt={alt} width={800} height={600} />
```

## Contributing

When adding new image optimization features:

1. **Add tests** for new transformation options
2. **Update TypeScript types** for new parameters
3. **Document** new features in this README
4. **Consider backwards compatibility** for existing implementations
5. **Test across browsers** for format support

## Resources

- [Contentful Images API](https://www.contentful.com/developers/docs/references/images-api/)
- [MDN Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [AVIF Browser Support](https://caniuse.com/avif)
- [WebP Browser Support](https://caniuse.com/webp)
