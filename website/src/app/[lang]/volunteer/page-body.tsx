import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetVolunteerPageDocument,
  type GetVolunteerPageQuery,
} from '@graphql/queries/pages/volunteer/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { volunteerParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';


interface VolunteerBodyProps {
  lang: AvailableLocale;
}

export const VolunteerBody: React.FC<VolunteerBodyProps> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query<GetVolunteerPageQuery>({
    query: GetVolunteerPageDocument,
    variables: {
      locale: lang,
      volunteerParagraphsId,
    },
  });

  if (error || !data) {
    return null;
  }

  const { mainbody } = data;

  return (
    <div className={styles.volunteer}>
      <div className={styles.volunteer__content_wrapper}>
        <article>
          <section>
            {documentToReactComponents(mainbody?.content?.json)}
          </section>
        </article>
      </div>
    </div>
  );
};

export default VolunteerBody;
