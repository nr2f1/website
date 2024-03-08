'use client';

import { AVAILABLE_LOCALES, AvailableLocale, english } from '@i18n/locales';
import './index.scss';

import MainLogo from '@components/logos/main';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
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
    <header>
      <div className="content-wrapper">
        <div className="logo">
          <MainLogo />

          <select value={locale} onChange={handleOnChange}>
            {AVAILABLE_LOCALES.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
