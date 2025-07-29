import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getClient } from '@graphql/client';
import {
  GetPartnershipsPageDocument,
  type GetPartnershipsPageQuery,
} from '@graphql/queries/pages/partnerships/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { partnersHeadingId, partnershipsPageheadingId } from '@models/headings';
import {
  cincinnatiAssetId,
  combinedBrainAssetId,
  globalGenesAssetId,
  nr2f1FranceAssetId,
  renAssetId,
  schaafLaboratoryAssetId,
  uniqueAssetId,
  valroseAssetId,
} from '@models/images';
import {
  cincinnatiLinkId,
  combinedBrainLinkId,
  globalGenesLinkId,
  nr2f1FranceLinkId,
  renLinkId,
  schaafLaboratoryLinkId,
  uniqueLinkId,
  valroseLinkId,
} from '@models/links';
import { partnershipsPageParagraphsId } from '@models/paragraphs';
import styles from './index.module.scss';

interface PartnershipsBodyProps {
  lang: AvailableLocale;
}

const { query } = getClient();

const PartnershipsBody: React.FC<PartnershipsBodyProps> = async ({ lang }) => {
  const {
    data: {
      heading,
      paragraphs,
      partnersHeading,
      nr2f1FranceLink,
      nr2f1FranceAsset,
      schaafLaboratoryLink,
      schaafLaboratoryAsset,
      cincinnatiAsset,
      cincinnatiLink,
      valroseAsset,
      valroseLink,
      combinedBrainAsset,
      combinedBrainLink,
      renAsset,
      renLink,
      globalGenesLink,
      globalGenesAsset,
      uniqueLink,
      uniqueAsset,
    },
    error,
  } = await query<GetPartnershipsPageQuery>({
    query: GetPartnershipsPageDocument,
    variables: {
      cincinnatiAssetId,
      cincinnatiLinkId,
      combinedBrainAssetId,
      combinedBrainLinkId,
      globalGenesAssetId,
      globalGenesLinkId,
      locale: lang,
      nr2f1FranceAssetId,
      nr2f1FranceLinkId,
      partnersHeadingId,
      partnershipsPageheadingId,
      partnershipsPageParagraphsId,
      renAssetId,
      renLinkId,
      schaafLaboratoryAssetId,
      schaafLaboratoryLinkId,
      uniqueAssetId,
      uniqueLinkId,
      valroseAssetId,
      valroseLinkId,
    },
  });

  if (error) {
    return null;
  }

  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__row']}>
        <article className={styles['page-body']}>
          <section>
            <h2>{heading?.content ?? ''}</h2>
            {documentToReactComponents(paragraphs?.content?.json)}
          </section>
          <section>
            <h3>{partnersHeading?.content ?? ''}</h3>
            <ul className={styles['partners-list']}>
              <li>
                <a href={nr2f1FranceLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={nr2f1FranceAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{nr2f1FranceLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={schaafLaboratoryLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={schaafLaboratoryAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{schaafLaboratoryLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={cincinnatiLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={cincinnatiAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{cincinnatiLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={valroseLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={valroseAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{valroseLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={combinedBrainLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={combinedBrainAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{combinedBrainLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={renLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={renAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{renLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={globalGenesLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={globalGenesAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{globalGenesLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={uniqueLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={uniqueAsset?.url ?? ''}
                      alt=""
                      role="presentation"
                    />
                  </picture>
                  <span>{uniqueLink?.text?.content ?? ''}</span>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PartnershipsBody;
