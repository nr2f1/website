import { getClient } from '@graphql/client';
import {
  GetMembershipPartnersDocument,
  type GetMembershipPartnersQuery,
} from '@graphql/queries/memberships-partners/index.generated';
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

  const { data, error } = await query<GetMembershipPartnersQuery>({
    query: GetMembershipPartnersDocument,
    variables: {
      locale: lang,
      membershipPartnersId,
    },
  });

  if (error || !data) {
    return null;
  }

  const { navigationList } = data;

  const membershipPartnersAssets =
    data.navigationList?.linksCollection?.items.map((item) => ({
      alt: item?.text?.content ?? '',
      href: item?.target?.url ?? '/',
      // @ts-ignore
      imageUrl: item?.referenceCollection?.items?.[0]?.asset?.url ?? '',
    }));

  return (
    <div className={styles['memberships-partners']}>
      <div className="content-wrapper">
        <section>
          <h2>{navigationList?.name}</h2>
          <ul>
            {membershipPartnersAssets?.map(({ href, alt, imageUrl }) => (
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
