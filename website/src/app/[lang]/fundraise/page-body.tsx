import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { getClient } from '@graphql/client';
import {
  GetFunraisePageDocument,
  type GetFunraisePageQuery,
} from '@graphql/queries/pages/fundraise/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { campaignsHeadingId } from '@models/headings';
import { fundraisePageParagraphsId } from '@models/paragraphs';
import { blogPostUrl } from '@routes/index';
import { createBlogImageProps } from '@shared/utils/image-optimisation';
import Link from 'next/link';
import styles from './index.module.scss';

const { query } = getClient();

interface FundraisePageBodyProps {
  lang: AvailableLocale;
}

interface CampaignProps {
  body: Document;
  heading: string;
  slug?: string | null;
  image: {
    url: string;
    description?: string;
    width: number;
    height: number;
  } | null;
  lang: AvailableLocale;
}

const CampaignIdea: React.FC<CampaignProps> = ({
  heading,
  body,
  slug,
  image,
  lang,
}) => {
  const imageProps = createBlogImageProps({
    alt: image?.description ?? '',
    baseUrl: image?.url ?? '',
    originalWidth: image?.width ?? 0,
  });

  return (
    <li className={styles.fundraisePage__campaign}>
      <div>
        <h3>{heading}</h3>
        <div>{documentToReactComponents(body)}</div>

        {slug && (
          <Link
            href={blogPostUrl({ locale: lang, slug })}
            className="button button--on-light"
          >
            Learn more
          </Link>
        )}
      </div>
      <div className={styles.fundraisePage__campaign__image}>
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
          <img {...imageProps.img} alt={image?.description ?? ''} />
        </picture>
      </div>
    </li>
  );
};

export const FundraisePageBody: React.FC<FundraisePageBodyProps> = async ({
  lang,
}) => {
  const { data, error } = await query<GetFunraisePageQuery>({
    query: GetFunraisePageDocument,
    variables: {
      campaignsHeadingId,
      fundraisePageParagraphsId,
      locale: lang,
    },
  });

  if (error || !data) {
    return null;
  }

  return (
    <div className={styles.fundraisePage}>
      <div className={styles.fundraisePage__content_wrapper}>
        <article>
          <section>
            {documentToReactComponents(data.mainBody?.content?.json)}
          </section>
          <section>
            <h2>{data.campaignsHeading?.content}</h2>
            <ul>
              {data.campaigns?.items.map((campaign) => (
                <CampaignIdea
                  key={crypto.randomUUID()}
                  lang={lang}
                  heading={campaign?.heading || ''}
                  body={campaign?.body?.json}
                  slug={campaign?.associatedBlog?.slug}
                  image={
                    campaign?.image?.url &&
                    campaign.image.width &&
                    campaign.image.height
                      ? {
                          description: campaign.image.description || undefined,
                          height: campaign.image.height,
                          url: campaign.image.url,
                          width: campaign.image.width,
                        }
                      : null
                  }
                />
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default FundraisePageBody;
