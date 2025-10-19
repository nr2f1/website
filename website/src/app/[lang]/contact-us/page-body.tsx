import SocialMediaLinks from '@components/footer/social-media-links';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetContactUsPageDocument,
  type GetContactUsPageQuery,
} from '@graphql/queries/pages/contact-us/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { contactUsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

const { query } = getClient();

interface ContactUsPageBodyProps {
  lang: AvailableLocale;
}

export const ContactUsPageBody: React.FC<ContactUsPageBodyProps> = async ({
  lang,
}) => {
  const { data, error } = await query<GetContactUsPageQuery>({
    query: GetContactUsPageDocument,
    variables: {
      contactUsPageParagraphsId,
      locale: lang,
    },
  });

  if (error || !data?.mainbody) {
    return null;
  }

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUs__content_wrapper}>
        <article>
          {documentToReactComponents(data.mainbody?.content?.json)}

          <div className={styles.contactUs__social_media_links}>
            <SocialMediaLinks variant="dark" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContactUsPageBody;
