'use client';
import styles from './index.module.scss';

import { ASSETS_URL } from '@config/utils';
import { AVAILABLE_LOCALES, AvailableLocale, english } from '@i18n/locales';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LocaleSelector = () => {
  const [locale, setLocale] = useState<AvailableLocale>(english);
  const router = useRouter();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    setLocale(locale as AvailableLocale);
  }, [pathname]);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setLocale(value as AvailableLocale);
    router.push(`/${value}/${pathnameWithoutLocale}`);
  };
  return (
    <select value={locale} onChange={handleOnChange}>
      {AVAILABLE_LOCALES.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

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
    </header>
  );
};

export default Header;
