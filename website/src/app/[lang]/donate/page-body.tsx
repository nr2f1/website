import DonateForm from '@components/widgets/form';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetDonatePageDocument,
  type GetDonatePageQuery,
} from '@graphql/queries/pages/donate/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { donatePageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

const { query } = getClient();

interface DonatePageBodyProps {
  lang: AvailableLocale;
}

export const DonatePageBody: React.FC<DonatePageBodyProps> = async ({
  lang,
}) => {
  const {
    data: { mainbody },
    error,
  } = await query<GetDonatePageQuery>({
    query: GetDonatePageDocument,
    variables: {
      donatePageParagraphsId,
      locale: lang,
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
          <DonateForm />
        </div>
      </div>
    </div>
  );
};

export default DonatePageBody;
