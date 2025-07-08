import styles from './index.module.scss';

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
      locale: lang,
      partnershipsPageheadingId,
      partnershipsPageParagraphsId,
      partnersHeadingId,
      nr2f1FranceLinkId,
      nr2f1FranceAssetId,
      schaafLaboratoryLinkId,
      schaafLaboratoryAssetId,
      cincinnatiAssetId,
      cincinnatiLinkId,
      valroseAssetId,
      valroseLinkId,
      combinedBrainAssetId,
      combinedBrainLinkId,
      renAssetId,
      renLinkId,
      globalGenesLinkId,
      globalGenesAssetId,
      uniqueLinkId,
      uniqueAssetId,
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
            <ul>
              <li>
                <picture>
                  <img
                    src={nr2f1FranceAsset?.url ?? ''}
                    alt={nr2f1FranceLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={nr2f1FranceLink?.target?.url ?? ''}>
                  {nr2f1FranceLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={schaafLaboratoryAsset?.url ?? ''}
                    alt={schaafLaboratoryLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={schaafLaboratoryLink?.target?.url ?? ''}>
                  {schaafLaboratoryLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={cincinnatiAsset?.url ?? ''}
                    alt={cincinnatiLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={cincinnatiLink?.target?.url ?? ''}>
                  {cincinnatiLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={valroseAsset?.url ?? ''}
                    alt={valroseLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={valroseLink?.target?.url ?? ''}>
                  {valroseLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={combinedBrainAsset?.url ?? ''}
                    alt={combinedBrainLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={combinedBrainLink?.target?.url ?? ''}>
                  {combinedBrainLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={renAsset?.url ?? ''}
                    alt={renLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={renLink?.target?.url ?? ''}>
                  {renLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={globalGenesAsset?.url ?? ''}
                    alt={globalGenesLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={globalGenesLink?.target?.url ?? ''}>
                  {globalGenesLink?.text?.content ?? ''}
                </a>
              </li>
              <li>
                <picture>
                  <img
                    src={uniqueAsset?.url ?? ''}
                    alt={uniqueLink?.text?.content ?? ''}
                  />
                </picture>
                <a href={uniqueLink?.target?.url ?? ''}>
                  {uniqueLink?.text?.content ?? ''}
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
