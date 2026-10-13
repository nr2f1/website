import PartnerLogo from '@components/partner-logo';
import { getClient } from '@graphql/client';
import { GetMembershipPartnersDocument } from '@graphql/queries/memberships-partners/index.generated';
import type { AvailableLocale } from '@i18n/locales';
import { membershipPartnersId } from '@models/navlinks';
import styles from './index.module.scss';

interface MembershipsPartnersProps {
  lang: AvailableLocale;
}

const MembershipsPartners: React.FC<MembershipsPartnersProps> = async ({
  lang,
}) => {
  const { query } = getClient();

  const { data, error } = await query({
    query: GetMembershipPartnersDocument,
    variables: {
      locale: lang,
      membershipPartnersId,
    },
  });

  const navigationList = data?.navigationList;

  if (error || !navigationList || !navigationList.linksCollection?.items) {
    return null;
  }

  const membershipPartnersAssets = navigationList.linksCollection.items.map(
    (item) => ({
      alt: item?.text?.content ?? '',
      asset: item?.referenceCollection?.items?.[0]?.asset,
      href: item?.target?.url ?? '/',
    }),
  );

  return (
    <div className={styles['memberships-partners']}>
      <div className="content-wrapper">
        <section>
          <h2>{navigationList.name}</h2>
          <ul>
            {membershipPartnersAssets.map(({ alt, asset, href }) => (
              <li key={href}>
                <a href={href} title={alt} target="_blank" rel="noreferrer">
                  <PartnerLogo alt={alt} asset={asset} displayHeight={96} />
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
