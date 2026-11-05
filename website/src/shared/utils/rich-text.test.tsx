import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, type Document, INLINES } from '@contentful/rich-text-types';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getYouTubeVideoId, renderOptions, renderText } from './rich-text';

describe('getYouTubeVideoId', () => {
  it('extracts videoId from standard youtube.com watch URLs', () => {
    expect(
      getYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    ).toBe('dQw4w9WgXcQ');
    expect(getYouTubeVideoId('https://youtube.com/watch?v=dQw4w9WgXcQ')).toBe(
      'dQw4w9WgXcQ',
    );
  });

  it('extracts videoId when other query parameters precede v', () => {
    expect(
      getYouTubeVideoId(
        'https://www.youtube.com/watch?feature=shared&v=dQw4w9WgXcQ',
      ),
    ).toBe('dQw4w9WgXcQ');
  });

  it('extracts videoId from mobile youtube URLs', () => {
    expect(getYouTubeVideoId('https://m.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(
      'dQw4w9WgXcQ',
    );
  });

  it('extracts videoId from youtu.be short links', () => {
    expect(getYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe(
      'dQw4w9WgXcQ',
    );
    expect(
      getYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ?si=abcdef123456'),
    ).toBe('dQw4w9WgXcQ');
  });

  it('extracts videoId from embed and shorts URLs', () => {
    expect(getYouTubeVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(
      'dQw4w9WgXcQ',
    );
    expect(
      getYouTubeVideoId('https://www.youtube.com/shorts/dQw4w9WgXcQ'),
    ).toBe('dQw4w9WgXcQ');
  });

  it('returns null for non-youtube URLs, channels, or invalid inputs', () => {
    expect(getYouTubeVideoId('https://example.com')).toBeNull();
    expect(
      getYouTubeVideoId('https://www.youtube.com/channel/UC1234567890'),
    ).toBeNull();
    expect(getYouTubeVideoId('not-a-valid-url')).toBeNull();
  });
});

describe('renderOptions', () => {
  it('renders a youtube video iframe when hyperlink is a youtube URL', () => {
    const document: Document = {
      content: [
        {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'Watch this video',
                },
              ],
              data: { uri: 'https://youtu.be/dQw4w9WgXcQ' },
              nodeType: INLINES.HYPERLINK,
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    };

    render(<div>{documentToReactComponents(document, renderOptions())}</div>);

    const iframe = screen.getByTitle('https://youtube.com/embed/dQw4w9WgXcQ');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      'src',
      'https://youtube.com/embed/dQw4w9WgXcQ',
    );
  });

  it('renders a normal anchor tag when hyperlink is not a youtube URL', () => {
    const document: Document = {
      content: [
        {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  nodeType: 'text',
                  value: 'Example link',
                },
              ],
              data: { uri: 'https://example.com' },
              nodeType: INLINES.HYPERLINK,
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    };

    render(<div>{documentToReactComponents(document, renderOptions())}</div>);

    const link = screen.getByRole('link', { name: 'Example link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});

describe('renderText', () => {
  it('splits multiline text with br elements', () => {
    const { container } = render(<div>{renderText('Hello\nWorld')}</div>);
    expect(container.querySelectorAll('br')).toHaveLength(1);
    expect(container).toHaveTextContent('Hello');
    expect(container).toHaveTextContent('World');
  });
});
