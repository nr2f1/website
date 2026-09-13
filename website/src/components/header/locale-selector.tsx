'use client';

import { Select } from '@base-ui/react/select';
import {
  AVAILABLE_LOCALES_LABEL_KEYS,
  type AvailableLocale,
  english,
} from '@i18n/locales';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
  // Renders the popup next to the trigger (like the previous `disablePortal`)
  // so it inherits the surrounding menu styles and flips when space is tight
  const portalContainer = useRef<HTMLSpanElement | null>(null);

  const pathnameWithoutLocale = pathname.split('/').slice(2).join('/');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    setLocale(locale as AvailableLocale);
  }, [pathname]);

  const handleOnChange = (newValue: AvailableLocale | null) => {
    if (newValue) {
      setLocale(newValue);
      router.push(`/${newValue}/${pathnameWithoutLocale}`);
    }
  };

  return (
    <Select.Root
      items={AVAILABLE_LOCALES_LABEL_KEYS}
      onValueChange={handleOnChange}
      value={locale}
    >
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
      <span ref={portalContainer} />
      <Select.Portal container={portalContainer}>
        <Select.Positioner
          align="start"
          alignItemWithTrigger={false}
          sideOffset={4}
          className={
            isMobile
              ? `${styles.popup} ${styles['popup--mobile']}`
              : styles.popup
          }
        >
          <Select.Popup
            render={<ul />}
            className={
              isMobile
                ? `${styles.listbox} ${styles['listbox--mobile']}`
                : styles.listbox
            }
          >
            {AVAILABLE_LOCALES_LABEL_KEYS.map(({ label, value }) => (
              <Select.Item
                key={value}
                render={<li />}
                value={value}
                className={styles.option}
              >
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
