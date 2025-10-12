import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import type { AvailableLocale } from '@i18n/locales';
import { News } from '@shared/types/news';

interface FromNewsToNewsCards {
  lang: AvailableLocale;
  posts: BlogPageCollection['items'];
  newsletters: NewsletterCollection['items'];
  podcasts: PodcastCollection['items'];
  start?: number;
  end: number;
}

export interface NewsCardProps {
  date: string;
  imageUrl?: string | null;
  lang: AvailableLocale;
  url: string;
  title: string;
  type?: News;
}

interface NewsType {
  [News.BLOG]: string;
  [News.NEWSLETTER]: string;
}

export const newsTypeLocale: Record<AvailableLocale, NewsType> = {
  de: {
    blog: 'Blogbeitrag',
    newsletter: 'Newsletter',
  },
  en: {
    blog: 'Blog post',
    newsletter: 'Newsletter',
  },
  es: {
    blog: 'Entrada de blog',
    newsletter: 'Boletín informativo',
  },
  fr: {
    blog: 'Article de blog',
    newsletter: "Bulletin d'information",
  },
  it: {
    blog: 'Articolo di blog',
    newsletter: 'Newsletter',
  },
  'pt-BR': {
    blog: 'Artigo de blog',
    newsletter: 'Newsletter',
  },
};

export const fromNewsToNewsCards = ({
  lang,
  posts,
  newsletters,
  podcasts,
  start = 0,
  end,
}: FromNewsToNewsCards): NewsCardProps[] => {
  const postAsNews: NewsCardProps[] = posts
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, image, slug }) => ({
      date: date ?? '',
      imageUrl: image?.url ?? null,
      lang,
      title: title ?? '',
      type: News.BLOG,
      url: slug ?? '',
    }));

  const newslettersAsNews: NewsCardProps[] = newsletters
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, newsletterContent }) => ({
      date: date ?? '',
      lang,
      title: title ?? '',
      type: News.NEWSLETTER,
      url: newsletterContent?.url ?? '',
    }));

  const podcastsAsNews: NewsCardProps[] = podcasts
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map(({ title, date, url }) => ({
      date: date ?? '',
      lang,
      title: title ?? '',
      type: News.PODCAST,
      url: url ?? '',
    }));

  return [...postAsNews, ...newslettersAsNews, ...podcastsAsNews]
    .sort((newsA, newsB) => {
      const dateA = newsA.date ? new Date(newsA.date) : new Date(0);
      const dateB = newsB.date ? new Date(newsB.date) : new Date(0);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(start, end);
};
