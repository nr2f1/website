import type { NewsCardProps } from '@components/news-card';
import type {
  BlogPageCollection,
  NewsletterCollection,
  PodcastCollection,
} from '@graphql/types';
import { News } from '@shared/types/news';

type NewsCard = Omit<NewsCardProps, 'lang'>;

interface FromBlogNewsletterToNews {
  posts: BlogPageCollection['items'];
  newsletters: NewsletterCollection['items'];
  podcasts: PodcastCollection['items'];
  limit: number;
}

export const fromBlogNewsletterToNews = ({
  posts,
  newsletters,
  podcasts,
  limit,
}: FromBlogNewsletterToNews) => {
  const blogPostsAsNews: NewsCard[] = posts.map((post) => ({
    date: post?.date ?? ('' as string),
    imageUrl: post?.image?.url,
    title: post?.title ?? '',
    url: post?.slug ?? '',
    type: News.BLOG,
  }));

  const newslettersAsNews: NewsCard[] = newsletters.map((newsletter) => ({
    date: newsletter?.date ?? ('' as string),
    title: newsletter?.date ?? '',
    url: newsletter?.newsletterContent?.url ?? '',
    type: News.NEWSLETTER,
  }));

  const podcastsAsNews: NewsCard[] = podcasts.map((podcast) => ({
    date: podcast?.date ?? ('' as string),
    title: podcast?.title ?? '',
    url: podcast?.url ?? '',
    type: News.PODCAST,
  }));

  const allNewsSorted = [
    ...blogPostsAsNews,
    ...newslettersAsNews,
    ...podcastsAsNews,
  ].sort(
    (newsA, newsB) =>
      new Date(newsB.date).getTime() - new Date(newsA.date).getTime(),
  );

  return allNewsSorted.slice(0, limit);
};
