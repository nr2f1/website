'use client';
import styles from './index.module.scss';

import { ASSETS_URL } from '@config/utils';
import Image from 'next/image';
import Link from 'next/link';
import LocaleSelector from './locale-selector';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image
            src={`${ASSETS_URL}/nr2f1-foundation-logo-color-white-text-original.png`}
            alt="nr2f1 foundation logo"
            width={1000}
            height={1000}
            loading="eager"
          />
        </Link>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/" className="button button--on-dark">
                Register a patient
              </Link>
            </li>
            <li>
              <Link href="/" className="button button--accent-on-dark">
                Donate
              </Link>
            </li>
          </ul>
          <LocaleSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
