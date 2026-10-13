import type { AvailableLocale } from '@i18n/locales';
import type { Campaign } from '@shared/types/api';
import getRelativeTime from '@shared/utils/get-relative-time';
import styles from './index.module.scss';

const createdI18n: Record<AvailableLocale, string> = {
  de: 'Erstellt',
  en: 'Created',
  es: 'Creado',
  fr: 'Créé',
  it: 'Creato',
  'pt-BR': 'Criado',
  'zh-CN': '创建',
};

interface CampaignCardProps extends Campaign {
  lang: AvailableLocale;
  now: Date;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  coverUrl,
  createdAt,
  lang,
  now,
  title,
  url,
}) => {
  const { isoDurationString, relativeString } = getRelativeTime({
    from: new Date(createdAt),
    lang,
    to: now,
  });

  return (
    <li className={styles.campaign}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={styles.campaign__cover}
          style={{ backgroundImage: `url(${coverUrl})` }}
        />
        <div className={styles.campaign__details}>
          <h3>{title}</h3>
          <p>
            {createdI18n[lang]}{' '}
            <time dateTime={isoDurationString}>{relativeString}</time>
          </p>
        </div>
      </a>
    </li>
  );
};

export interface FundraisingCampaignsProps {
  // `null` means the Givebutter request failed; the section then shows an
  // error line instead of cards.
  campaigns: Campaign[] | null;
  ctaHref: string;
  ctaText: string;
  heading: string;
  lang: AvailableLocale;
  // Taken once by the cached wrapper so every card agrees on "now".
  now: Date;
}

const FundraisingCampaigns: React.FC<FundraisingCampaignsProps> = ({
  campaigns,
  ctaHref,
  ctaText,
  heading,
  lang,
  now,
}) => (
  <div className={styles.fundraising_campaigns}>
    <div className={styles.fundraising_campaigns__content_wrapper}>
      <section>
        <h2>{heading}</h2>
        {campaigns === null ? (
          <p>Error loading campaigns</p>
        ) : (
          <ul>
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.url}
                lang={lang}
                now={now}
                {...campaign}
              />
            ))}
          </ul>
        )}
        <div className={styles.fundraising_campaigns__cta}>
          <a href={ctaHref} className="button button--on-light-open-new-tab">
            {ctaText}
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default FundraisingCampaigns;
