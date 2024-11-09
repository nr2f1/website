import type { ReactNode } from 'react';
import styles from './index.module.scss';

interface BannerProps {
  headingContent: string;
  textContent: ReactNode;
  ctaContent: string;
  ctaUrl: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({
  headingContent,
  textContent,
  ctaContent,
  ctaUrl,
  imageUrl,
}) => {
  return (
    <div className={styles.banner}>
      <div className="content-wrapper">
        <section className={styles.banner__row}>
          <div className={styles.banner__col}>
            <h2>{headingContent}</h2>
            {textContent}

            <a href={ctaUrl} className="button button--on-light">
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
