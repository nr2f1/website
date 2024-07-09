import styles from './index.module.scss';

import { ASSETS_URL } from '@config/utils';
import Image from 'next/image';
import Link from 'next/link';
import LocaleSelector from './locale-selector';
import NavList, { NavItem } from './nav-list';

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
  {
    href: '/',
    label: 'Menu Item',
  },
];

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
          <nav title="primary">
            <ul>
              <li>
                <Link
                  href="/"
                  className="button button--on-dark"
                  title="Register a patient"
                >
                  Register a patient
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="button button--accent-on-dark"
                  title="Donate"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
          <LocaleSelector />
        </div>
      </div>
      <div className={styles.header__bottom}>
        <nav title="secondary">
          <NavList name="About BBSOS" items={navItems} />
          <NavList name="Living with BBSOS" items={navItems} />
          <NavList name="Research" items={navItems} />
          <NavList name="About us" items={navItems} />
          <NavList name="Support us" items={navItems} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
