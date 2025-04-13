import styles from './index.module.scss';

import { getClient } from '@graphql/client';
import {
  GetMembershipPartnersDocument,
  type GetMembershipPartnersQuery,
} from '@graphql/queries/memberships-partners/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { membershipPartnersId } from '@models/navlinks';

interface MembershipsPartnersProps {
  lang: AvailableLocale;
}

const MembershipsPartners: React.FC<MembershipsPartnersProps> = async ({
  lang,
}) => {
  const { query } = getClient();

  const {
    data: { navigationList },
    error,
  } = await query<GetMembershipPartnersQuery>({
    query: GetMembershipPartnersDocument,
    variables: {
      membershipPartnersId,
      locale: lang,
    },
  });

  if (error || !navigationList || !navigationList.linksCollection?.items) {
    return null;
  }

  const membershipPartnersAssets = navigationList.linksCollection.items.map(
    (item) => ({
      href: item?.target?.url ?? '/',
      alt: item?.text?.content ?? '',
      // @ts-ignore
      imageUrl: item?.referenceCollection?.items?.[0]?.asset?.url ?? '',
    }),
  );

  return (
    <div className={styles['memberships-partners']}>
      <div className="content-wrapper">
        <section>
          <h2>{navigationList.name}</h2>
          <ul>
            {membershipPartnersAssets.map(({ href, alt, imageUrl }) => (
              <li key={crypto.randomUUID()}>
                <a href={href} title={alt} target="_blank" rel="noreferrer">
                  <picture>
                    <img src={imageUrl} alt={alt} />
                  </picture>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MembershipsPartners;
