import PageHeader from '@components/page-header';
import PageLatestNews from '@components/page-latest-news';
import SupportBanner from '@components/support-banner';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import { GetPostDocument } from '@graphql/queries/post/index.generated';
import { AVAILABLE_LOCALES } from '@i18n/locales';
import { BASE_URL, blogPostUrl, getLanguageAlternates } from '@routes/index';
import { getAllBlogPosts } from '@services/contentful/blog-posts';
import type { NewsPagePropsWithLocale } from '@shared/types/page-with-locale-params';
import { renderOptions } from '@shared/utils/rich-text';
import type { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';
import type { BlogPosting, Organization, WithContext } from 'schema-dts';
import styles from './index.module.scss';

export async function generateStaticParams() {
  const slugs = (await getAllBlogPosts()).map(({ slug }) => slug);

  return AVAILABLE_LOCALES.flatMap((lang) =>
    slugs.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: NewsPagePropsWithLocale): Promise<Metadata> {
  const { query } = getClient();
  const { lang, slug } = await params;

  const { data } = await query({
    query: GetPostDocument,
    variables: { locale: lang, slug },
  });

  const post = data?.blogPageCollection?.items[0];

  if (!post) {
    notFound();
  }

  const title = post.title ?? '';
  const description = post.excerpt ?? '';
  const imgUrl = post.image?.url ?? '';

  return {
    alternates: {
      canonical: BASE_URL + blogPostUrl({ locale: lang, slug }),
      languages: getLanguageAlternates((locale) =>
        blogPostUrl({ locale, slug }),
      ),
    },
    description,
    openGraph: {
      description,
      images: {
        url: imgUrl,
      },
      locale: lang,
      title,
      type: 'article',
      url: BASE_URL + blogPostUrl({ locale: lang, slug }),
    },
    title,
  };
}

const Page: NextPage<NewsPagePropsWithLocale> = async ({ params }) => {
  const { query } = getClient();
  const { lang, slug } = await params;

  const { data } = await query({
    query: GetPostDocument,
    variables: { locale: lang, slug },
  });

  const post = data?.blogPageCollection?.items[0];

  if (!post) {
    notFound();
  }

  const nr2f1Foundation: Organization = {
    '@type': 'Organization',
    name: 'NR2F1 Foundation',
    url: BASE_URL,
  };

  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    abstract: post?.excerpt ?? '',
    author: nr2f1Foundation,
    datePublished: post?.date ?? undefined,
    headline: post?.title ?? '',
    image: post?.image?.url ?? undefined,
    inLanguage: lang,
    publisher: nr2f1Foundation,
    url: BASE_URL + blogPostUrl({ locale: lang, slug }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a safe usage
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        pageTitle={post?.title ?? ''}
        imageUrl={post?.image?.url ?? undefined}
        lang={lang}
        lastUpdated={post?.date ?? ''}
      />
      <article className={styles.post}>
        <div className={styles.post__layout}>
          <div className={styles.post__row}>
            <div className={styles.post__content}>
              {documentToReactComponents(
                post?.body?.json,
                renderOptions(post?.body?.links),
              )}
            </div>
            <div className={styles.post__aside}>
              <PageLatestNews lang={lang} />
            </div>
          </div>
        </div>
      </article>
      <SupportBanner lang={lang} />
    </>
  );
};

export default Page;
