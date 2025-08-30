import styles from './skeleton.module.scss';

const HeaderSkeleton: React.FC = () => {
  return (
    <header className={styles.headerSkeleton}>
      <div className={styles.headerSkeleton__top}>
        <div className={styles.headerSkeleton__contentWrapper}>
          <div className={styles.headerSkeleton__logo} />
          <div className={styles.headerSkeleton__topRight}>
            <div className={styles.headerSkeleton__localeSelector} />
            <nav>
              <ul>
                <li>
                  <div className={styles.headerSkeleton__button} />
                </li>
                <li>
                  <div className={styles.headerSkeleton__button} />
                </li>
              </ul>
            </nav>
            <div className={styles.headerSkeleton__hamburger} />
          </div>
        </div>
      </div>
      <div className={styles.headerSkeleton__bottom}>
        <div className={styles.headerSkeleton__contentWrapper}>
          <nav>
            <div className={styles.headerSkeleton__navItem} />
            <div className={styles.headerSkeleton__navItem} />
            <div className={styles.headerSkeleton__navItem} />
            <div className={styles.headerSkeleton__navItem} />
            <div className={styles.headerSkeleton__navItem} />
            <div className={styles.headerSkeleton__navItem} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
