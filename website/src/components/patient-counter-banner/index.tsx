import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPatientCounterBannerDocument,
  type GetPatientCounterBannerQuery,
} from '@graphql/queries/banner/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import {
  countriesNumberHeadingId,
  patientNumberHeadingId,
} from '@models/headings';
import { patientCounterCtaId } from '@models/links';
import { patientCounterParagraphsId } from '@models/paragraphs';
import Link from 'next/link';
import styles from './style.module.scss';

const { query } = getClient();

export interface PatientCounterBannerProps {
  lang: AvailableLocale;
}

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="24"
    fill="none"
    viewBox="0 0 26 24"
  >
    <title>Heart</title>
    <path
      fill="#FF3E57"
      d="m12.527 23.881-.01-.004-.03-.017a14 14 0 0 1-.51-.29 33.566 33.566 0 0 1-5.66-4.228C3.251 16.482.001 12.234.001 7c0-3.904 3.285-7 7.25-7C9.582 0 11.67 1.065 13 2.736 14.33 1.066 16.418 0 18.75 0 22.715 0 26 3.096 26 7c0 5.234-3.25 9.482-6.318 12.342a33.6 33.6 0 0 1-5.66 4.228 21 21 0 0 1-.51.29l-.03.017-.009.004-.003.002a1 1 0 0 1-.94 0z"
    />
  </svg>
);

const PatientCounterBanner: React.FC<PatientCounterBannerProps> = async ({
  lang,
}) => {
  const { data, error } = await query<GetPatientCounterBannerQuery>({
    query: GetPatientCounterBannerDocument,
    variables: {
      countriesNumberHeadingId,
      locale: lang,
      patientCounterCtaId,
      patientCounterParagraphsId,
      patientNumberHeadingId,
    },
  });

  if (error || !data) {
    return null;
  }

  return (
    <div className={styles.patientCounter}>
      <div className="content-wrapper">
        <section>
          <div className={styles.patientCounter__hug}>
            <h2>
              <span>{data.patientNumberHeading?.content}</span>
              <span className={styles.patientCounter__separator}>
                <HeartIcon />
              </span>
              <span>{data.countriesNumberHeading?.content}</span>
            </h2>
            {documentToReactComponents(data.paragraphs?.content?.json)}

            <Link
              href={data.link?.target?.url ?? '/'}
              className="button button--on-dark"
            >
              {data.link?.text?.content}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatientCounterBanner;
