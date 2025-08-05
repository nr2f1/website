import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetOurFinancialsPageDocument,
  type GetOurFinancialsPageQuery,
} from '@graphql/queries/pages/our-financials/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { ourFinancialsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

const { query } = getClient();

interface OurFinancialsPageBodyProps {
  lang: AvailableLocale;
}

export const OurFinancialsPageBody: React.FC<
  OurFinancialsPageBodyProps
> = async ({ lang }) => {
  const {
    data: { mainbody },
    error,
  } = await query<GetOurFinancialsPageQuery>({
    query: GetOurFinancialsPageDocument,
    variables: {
      locale: lang,
      ourFinancialsPageParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles.ourFinancials}>
      <div className={styles.ourFinancials__content_wrapper}>
        <article>{documentToReactComponents(mainbody?.content?.json)}</article>
      </div>
    </div>
  );
};

export default OurFinancialsPageBody;
