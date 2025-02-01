import type { NewsCardProps } from '@components/news-card';
import type { BlogPageCollection, NewsletterCollection } from '@graphql/types';
import { News } from '@shared/types/news';

type NewsCard = Omit<NewsCardProps, 'lang'>;

interface FromBlogNewsletterToNews {
  posts: BlogPageCollection['items'];
  newsletters: NewsletterCollection['items'];
  limit: number;
}

export const fromBlogNewsletterToNews = ({
  posts,
  newsletters,
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

  const allNewsSorted = [...blogPostsAsNews, ...newslettersAsNews].sort(
    (newsA, newsB) =>
      new Date(newsB.date).getTime() - new Date(newsA.date).getTime(),
  );

  return allNewsSorted.slice(0, limit);
};
