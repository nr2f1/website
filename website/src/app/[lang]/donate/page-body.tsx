import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetSupportUsPageDocument,
  type GetSupportUsPageQuery,
} from '@graphql/queries/pages/support-us/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { donatePageParagraphsId, supportUsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';
import { GetDonatePageDocument, GetDonatePageQuery } from '@graphql/queries/pages/donate/index.generated';
import DonateForm from '@components/widgets/form';

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
  } = await query<GetDonatePageQuery>({
    query: GetDonatePageDocument,
    variables: {
      locale: lang,
      donatePageParagraphsId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles.donate}>
      <div className={styles.donate__content_wrapper}>
        <article>
          <section>
            {documentToReactComponents(mainbody?.content?.json)}
          </section>
        </article>
          <div className={styles.donate__form_wrapper}>
            <DonateForm/>
          </div>
      </div>
    </div>
  );
};

export default SupportUsPageBody;
