import { describe, expect, it } from 'vitest';
import { localiseHref } from './localise-href';

describe('localiseHref', () => {
  it('prefixes a root-relative internal path with the locale', () => {
    expect(localiseHref('/donate', 'en')).toBe('/en/donate');
    expect(localiseHref('/what-is-bbsoas', 'es')).toBe('/es/what-is-bbsoas');
  });

  it('maps the bare root to the localised homepage', () => {
    expect(localiseHref('/', 'fr')).toBe('/fr');
  });

  it('leaves a path that already starts with a known locale untouched', () => {
    expect(localiseHref('/en/donate', 'en')).toBe('/en/donate');
    expect(localiseHref('/pt-BR/research', 'en')).toBe('/pt-BR/research');
    expect(localiseHref('/zh-CN', 'en')).toBe('/zh-CN');
  });

  it('does not mistake a path segment that merely starts with a locale', () => {
    // "enquiries" starts with "en" but is not the "en" locale segment.
    expect(localiseHref('/enquiries', 'en')).toBe('/en/enquiries');
  });

  it('leaves absolute and protocol-relative URLs untouched', () => {
    expect(localiseHref('https://givebutter.com/abc', 'en')).toBe(
      'https://givebutter.com/abc',
    );
    expect(localiseHref('//cdn.example.com/x.png', 'en')).toBe(
      '//cdn.example.com/x.png',
    );
  });

  it('leaves mailto, tel and in-page anchors untouched', () => {
    expect(localiseHref('mailto:hello@nr2f1.org', 'en')).toBe(
      'mailto:hello@nr2f1.org',
    );
    expect(localiseHref('tel:+123', 'en')).toBe('tel:+123');
    expect(localiseHref('#section', 'en')).toBe('#section');
  });

  it('leaves non-root-relative paths untouched', () => {
    expect(localiseHref('relative/path', 'en')).toBe('relative/path');
  });

  it('returns an empty string for nullish input', () => {
    expect(localiseHref(undefined, 'en')).toBe('');
    expect(localiseHref(null, 'en')).toBe('');
    expect(localiseHref('', 'en')).toBe('');
  });
});
