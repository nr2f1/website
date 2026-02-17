'use client';

import { Select } from '@base-ui/react/select';
import {
  AVAILABLE_LOCALES_LABEL_KEYS,
  type AvailableLocale,
  english,
} from '@i18n/locales';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './locale-selector.module.scss';

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

  const handleOnValueChange = (newValue: AvailableLocale | null) => {
    if (newValue) {
      setLocale(newValue);
      router.push(`/${newValue}/${pathnameWithoutLocale}`);
    }
  };

  return (
    <Select.Root value={locale} onValueChange={handleOnValueChange}>
      <Select.Trigger
        title={locale}
        className={
          isMobile
            ? `${styles.select} ${styles['select--mobile']}`
            : styles.select
        }
      >
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className={
            isMobile
              ? `${styles.popup} ${styles['popup--mobile']}`
              : styles.popup
          }
        >
          <Select.Popup
            className={
              isMobile
                ? `${styles.listbox} ${styles['listbox--mobile']}`
                : styles.listbox
            }
          >
            {AVAILABLE_LOCALES_LABEL_KEYS.map(({ label, value }) => (
              <Select.Item key={value} value={value} className={styles.option}>
                <Select.ItemText>{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
};

export default LocaleSelector;
