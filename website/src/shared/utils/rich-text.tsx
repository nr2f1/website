import type { RenderNode } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';

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

// From https://miguelcrespo.co/posts/rendering-youtube-videos-using-rich-text-contentful/
// Create an iframe when a hyperlink is a youtube video
export const renderNode: RenderNode = {
  // If the node is a link
  [INLINES.HYPERLINK]: (node) => {
    console.log({ node });
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
  },
};
