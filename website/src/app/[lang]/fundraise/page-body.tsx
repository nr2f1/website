import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetSupportUsPageDocument,
  type GetSupportUsPageQuery,
} from '@graphql/queries/pages/support-us/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { fundraisePageParagraphsId, supportUsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';
import { GetFunraisePageDocument, GetFunraisePageQuery } from '@graphql/queries/pages/fundraise/index.generated';
import { campaignsHeadingId } from '@models/headings';
import Link from 'next/link';
import { blogPostUrl } from '@routes/index';

const { query } = getClient();

interface FundraisePageBodyProps {
  lang: AvailableLocale;
}


interface CampaignProps {
  body: Document;
  heading: string;
  slug?: string;
}

const CampaignIdea: React.FC<CampaignProps> = ({heading, body, slug}) => {
  return (
    <li className={styles.fundraisePage__campaign}>
      <div>
        <h3>{heading}</h3>
        <div>
          {documentToReactComponents(body)}
        </div>


        {slug && <Link href={blogPostUrl({locale: "en", slug})} className="button button--on-light">Learn more</Link>}
      </div>
      <div>
        <picture>
          <img src="https://images.ctfassets.net/9j9d6tsmuyzl/774VJYnW69qB6Qt8Ikv1AR/23790fed7fd197171e60cc1c7eac7baa/Edith-collage.jpg" alt="" />
        </picture>
      </div>
    </li>
  )
}





export const FundraisePageBody: React.FC<FundraisePageBodyProps> = async ({
  lang,
}) => {
  const {
    data: { mainBody, campaignsHeading, campaigns },
    error,
  } = await query<GetFunraisePageQuery>({
    query: GetFunraisePageDocument,
    variables: {
      locale: lang,
      fundraisePageParagraphsId,
      campaignsHeadingId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles.fundraisePage}>
      <div className={styles.fundraisePage__content_wrapper}>
        <article>
          <section>
            {documentToReactComponents(mainBody?.content?.json)}
          </section>
          <section>
            <h2>{campaignsHeading?.content}</h2>
            <ul>
              <li className={styles.fundraisePage__campaign}>
                <div>
                  <h3>Bake sale</h3>
                  <div>
                    <p>
                      United Kingdom
                    </p>
                    <p>
                      Raised $2,582 over 8 months
                    </p>
                  </div>
                  <a href="" className="button button--on-light">Learn more</a>
                </div>
                <div>
                  <picture>
                    <img src="https://images.ctfassets.net/9j9d6tsmuyzl/774VJYnW69qB6Qt8Ikv1AR/23790fed7fd197171e60cc1c7eac7baa/Edith-collage.jpg" alt="" />
                  </picture>
                </div>
              </li>

              {campaigns?.items.map(({heading, body, associatedBlog: {slug}}) => (<CampaignIdea key={crypto.randomUUID()} heading={heading} body={body.json} slug={slug} />))}




            </ul>


          </section>
        </article>
      </div>
    </div>
  );
};

export default FundraisePageBody;
