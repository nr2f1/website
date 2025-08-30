import styles from './skeleton.module.scss';

const FundraisingCampaignsSkeleton: React.FC = () => {
  return (
    <div className={styles.fundraisingCampaignsSkeleton}>
      <div className={styles.fundraisingCampaignsSkeleton__contentWrapper}>
        <section>
          <div className={styles.headingSkeleton} />

          <ul className={styles.campaignsList}>
            {Array.from({ length: 3 }).map((_) => (
              <li key={crypto.randomUUID()} className={styles.campaignSkeleton}>
                <div className={styles.campaignSkeleton__cover} />
                <div className={styles.campaignSkeleton__details}>
                  <div className={styles.campaignSkeleton__title} />
                  <div className={styles.campaignSkeleton__date} />
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.ctaSkeleton}>
            <div className={styles.buttonSkeleton} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FundraisingCampaignsSkeleton;
