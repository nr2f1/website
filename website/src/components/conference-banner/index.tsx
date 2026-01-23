import type { ComponentPropsWithLocale } from '@shared/types/page-with-locale-params';
import Link from 'next/link';
import styles from './index.module.scss';

const ConferenceBanner: React.FC<ComponentPropsWithLocale> = () => {
  return (
    <div className={styles.conferenceBanner}>
      <div className={`content-wrapper ${styles.conferenceBanner__wrapper}`}>
        <div>
          <p>Family & Scientific Conference 2026</p>
          <p>April 8-10 in Orlando, Florida</p>
        </div>
        <div>
          <div>
            <output>77</output>
            <span>days</span>
          </div>
          <div>
            <output>6</output>
            <span>hrs</span>
          </div>
          <div>
            <output>46</output>
            <span>min</span>
          </div>
          <div>
            <output>12</output>
            <span>sec</span>
          </div>
        </div>
        <div>
          <Link href="/">Book now!</Link>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
