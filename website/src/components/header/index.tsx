'use client';
import styles from './index.module.scss';

import { ASSETS_URL } from '@config/utils';
import Image from 'next/image';
import Link from 'next/link';
import LocaleSelector from './locale-selector';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
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
        <div className={styles.header__top_right}>
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
          </nav>
          <LocaleSelector />
        </div>
      </div>
      <div className={styles.header__bottom}>
        <nav>
          <details>
            <summary>About BBSOS</summary>
            <ul>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>Living with BBSOS</summary>
            <ul>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>Research</summary>
            <ul>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>About us</summary>
            <ul>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>Support us</summary>
            <ul>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
              <li>
                <Link href="/">Menu Item</Link>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  );
};

export default Header;
