import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';

import type { AvailableLocale } from '@i18n/locales';
import { contactUsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';
import { GetContactUsPageDocument, GetContactUsPageQuery } from '@graphql/queries/pages/contact-us/index.generated';

const { query } = getClient();

interface ContactUsPageBodyProps {
  lang: AvailableLocale;
}

export const ContactUsPageBody: React.FC<
  ContactUsPageBodyProps
> = async ({ lang }) => {
  const {
    data: { mainbody },
    error,
  } = await query<GetContactUsPageQuery>({
    query: GetContactUsPageDocument,
    variables: {
      locale: lang,
      contactUsPageParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles.privacypolicy}>
      <div className={styles.privacypolicy__content_wrapper}>
        <article>{documentToReactComponents(mainbody?.content?.json)}</article>
      </div>
    </div>
  );
};

export default ContactUsPageBody;
