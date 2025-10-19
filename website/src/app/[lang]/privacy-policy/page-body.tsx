import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPrivacyPolicyPageDocument,
  type GetPrivacyPolicyPageQuery,
} from '@graphql/queries/pages/privacy-policy/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { privacyPolicyPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

const { query } = getClient();

interface PrivacyPolicyPageBodyProps {
  lang: AvailableLocale;
}

export const PrivacyPolicyPageBody: React.FC<
  PrivacyPolicyPageBodyProps
> = async ({ lang }) => {
  const { data, error } = await query<GetPrivacyPolicyPageQuery>({
    query: GetPrivacyPolicyPageDocument,
    variables: {
      locale: lang,
      privacyPolicyPageParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  return (
    <div className={styles.privacypolicy}>
      <div className={styles.privacypolicy__content_wrapper}>
        <article>
          {documentToReactComponents(data.mainbody?.content?.json)}
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPageBody;
