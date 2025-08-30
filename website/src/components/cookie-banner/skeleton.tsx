import styles from './skeleton.module.scss';

const CookieBannerSkeleton: React.FC = () => {
  return (
    <section
      className={styles.cookieBannerSkeleton}
      aria-label="Loading cookie consent banner"
    >
      <div className="content-wrapper">
        <div className={styles.headingSkeleton} />
        <div className={styles.paragraphSkeleton}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.lineShort} />
        </div>
        <div className={styles.buttonsSkeleton}>
          <div className={styles.buttonSkeleton} />
          <div className={styles.buttonSkeleton} />
        </div>
      </div>
    </section>
  );
};

export default CookieBannerSkeleton;
