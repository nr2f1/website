import type { ReactNode } from 'react';
import styles from './index.module.scss';

interface BannerProps {
  headingContent: string;
  textContent: ReactNode;
  ctaContent: string;
  ctaUrl: string;
  imageUrl: string;
  theme?: 'pink' | 'navy';
  openNewTab?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  headingContent,
  textContent,
  ctaContent,
  ctaUrl,
  imageUrl,
  theme = 'pink',
  openNewTab = false,
}) => {
  return (
    <div
      className={`${styles.banner} ${theme === 'pink' ? '' : styles['banner--navy']}`}
    >
      <div className="content-wrapper">
        <section className={styles.banner__row}>
          <div className={styles.banner__col}>
            <h2>{headingContent}</h2>
            {textContent}

            <a
              href={ctaUrl}
              className={`button ${openNewTab ? ' button--on-light-open-new-tab' : 'button--on-light'}`}
              title={ctaContent}
            >
              {ctaContent}
            </a>
          </div>
          <div
            className={styles.banner__col}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
