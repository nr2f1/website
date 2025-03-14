'use client';
import styles from './locale-selector.module.scss';

import {
  AVAILABLE_LOCALES_LABEL_KEYS,
  type AvailableLocale,
  english,
} from '@i18n/locales';

import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import type { MuiEvent } from '@shared/types/mui';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface LocaleSelectorProps {
  isMobile?: boolean;
}

const LocaleSelector: React.FC<LocaleSelectorProps> = ({
  isMobile = false,
}) => {
  const [locale, setLocale] = useState<AvailableLocale>(english);
  const router = useRouter();
  const pathname = usePathname();

  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    setLocale(locale as AvailableLocale);
  }, [pathname]);

  const handleOnChange = (
    _event: MuiEvent,
    newValue: AvailableLocale | null,
  ) => {
    if (newValue) {
      setLocale(newValue);
      router.push(`/${newValue}/${pathnameWithoutLocale}`);
    }
  };

  return (
    <Select
      value={locale}
      onChange={handleOnChange}
      title={locale}
      className={
        isMobile
          ? `${styles.select} ${styles['select--mobile']}`
          : styles.select
      }
      slotProps={{
        popup: {
          disablePortal: true,
          className: isMobile
            ? `${styles.popup} ${styles['popup--mobile']}`
            : styles.popup,
        },
        listbox: {
          className: isMobile
            ? `${styles.listbox} ${styles['listbox--mobile']}`
            : styles.listbox,
        },
      }}
    >
      {AVAILABLE_LOCALES_LABEL_KEYS.map(({ label, value }) => (
        <Option
          key={value}
          value={value}
          label={label}
          className={styles.option}
        >
          {label}
        </Option>
      ))}
    </Select>
  );
};

export default LocaleSelector;
