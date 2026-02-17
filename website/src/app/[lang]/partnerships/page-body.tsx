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
  nicoAssetId,
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
  nicoLinkId,
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

const PartnershipsBody: React.FC<PartnershipsBodyProps> = async ({ lang }) => {
  const { query } = getClient();
  const { data, error } = await query<GetPartnershipsPageQuery>({
    query: GetPartnershipsPageDocument,
    variables: {
      cincinnatiAssetId,
      cincinnatiLinkId,
      combinedBrainAssetId,
      combinedBrainLinkId,
      globalGenesAssetId,
      globalGenesLinkId,
      locale: lang,
      nicoAssetId,
      nicoLinkId,
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

  if (error || !data) {
    return null;
  }

  const {
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
    nicoLink,
    nicoAsset,
  } = data;

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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
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
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
                      role="presentation"
                    />
                  </picture>
                  <span>{uniqueLink?.text?.content ?? ''}</span>
                </a>
              </li>
              <li>
                <a href={nicoLink?.target?.url ?? ''}>
                  <picture>
                    <img
                      src={nicoAsset?.url ?? ''}
                      alt=""
                      // biome-ignore lint/a11y/noRedundantRoles: this is a safe usage
                      role="presentation"
                    />
                  </picture>
                  <span>{nicoLink?.text?.content ?? ''}</span>
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
