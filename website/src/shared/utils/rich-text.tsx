import type { Block, Inline } from '@contentful/rich-text-types';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Asset, Entry } from '@graphql/types';
import type { ReactNode } from 'react';
import { createBlogImageProps } from './image-optimisation';

// From https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
// Create <br> tag for new line in text
export const renderText = (text: string) => {
  return text
    .split('\n')
    .reduce((children: React.ReactNode[], textSegment, index) => {
      return children.concat(
        index > 0 && <br key={crypto.randomUUID()} />,
        textSegment,
      );
    }, []);
};

export interface Links {
  assets: {
    block: Asset[];
  };
  entries: {
    block: Entry[];
    inline: Entry[];
  };
}

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

export const renderOptions = (links: Links) => {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      // From https://miguelcrespo.co/posts/rendering-youtube-videos-using-rich-text-contentful/
      // Create an iframe when a hyperlink is a youtube video
      [INLINES.HYPERLINK]: (node: Block | Inline, _children: ReactNode) => {
        // Only process youtube links
        if (node.data.uri.includes('youtube.com')) {
          // Extract videoId from the URL
          const match =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
              node.data.uri,
            );
          const videoId = match && match[7].length === 11 ? match[7] : null;
          return (
            videoId && (
              <section className="video-container">
                <iframe
                  className="video"
                  title={`https://youtube.com/embed/${videoId}`}
                  src={`https://youtube.com/embed/${videoId}`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </section>
            )
          );
        }

        // Create a link when it's not a youtube video
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {node.content.map((content) => {
              return (
                <span key={crypto.randomUUID()}>
                  {'value' in content ? content.value : ''}
                </span>
              );
            })}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline, _children: ReactNode) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        if (!asset) return null;

        // Get original dimensions or fallback values
        const originalWidth = asset.width || 800;
        const originalHeight = asset.height || 600;
        const alt = asset.description || asset.title || '';

        // Use the optimized image utility
        const imageProps = createBlogImageProps(
          asset.url,
          originalWidth,
          originalHeight,
          alt,
        );

        return (
          <picture>
            <source
              media={imageProps.sources.avif.mobile.media}
              srcSet={imageProps.sources.avif.mobile.srcSet}
              type={imageProps.sources.avif.mobile.type}
            />
            <source
              media={imageProps.sources.avif.tablet.media}
              srcSet={imageProps.sources.avif.tablet.srcSet}
              type={imageProps.sources.avif.tablet.type}
            />
            <source
              srcSet={imageProps.sources.avif.desktop.srcSet}
              type={imageProps.sources.avif.desktop.type}
            />
            <source
              media={imageProps.sources.webp.mobile.media}
              srcSet={imageProps.sources.webp.mobile.srcSet}
              type={imageProps.sources.webp.mobile.type}
            />
            <source
              media={imageProps.sources.webp.tablet.media}
              srcSet={imageProps.sources.webp.tablet.srcSet}
              type={imageProps.sources.webp.tablet.type}
            />
            <source
              srcSet={imageProps.sources.webp.desktop.srcSet}
              type={imageProps.sources.webp.desktop.type}
            />
            <img {...imageProps.img} alt={alt} />
          </picture>
        );
      },
    },
  };
};
