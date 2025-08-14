import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetSupportUsPageDocument,
  type GetSupportUsPageQuery,
} from '@graphql/queries/pages/support-us/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { supportUsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

const { query } = getClient();

interface SupportUsPageBodyProps {
  lang: AvailableLocale;
}

export const SupportUsPageBody: React.FC<SupportUsPageBodyProps> = async ({
  lang,
}) => {
  const {
    data: { mainbody },
    error,
  } = await query<GetSupportUsPageQuery>({
    query: GetSupportUsPageDocument,
    variables: {
      locale: lang,
      supportUsPageParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles.supportUs}>
      <div className={styles.supportUs__content_wrapper}>
        <article>
          <section>
            {documentToReactComponents(mainbody?.content?.json)}
          </section>
        </article>
      </div>
    </div>
  );
};

export default SupportUsPageBody;
