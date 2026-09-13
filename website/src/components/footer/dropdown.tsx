'use client';

import { Select } from '@base-ui/react/select';
import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import { useRef } from 'react';
import styles from './dropdown.module.scss';

const LocaleSelector = () => {
  // Renders the popup next to the trigger (like the previous `disablePortal`)
  const portalContainer = useRef<HTMLSpanElement | null>(null);

  return (
    <Select.Root items={AVAILABLE_LOCALES_LABEL_KEYS}>
      <Select.Trigger id="role" className={styles.select}>
        <Select.Value />
      </Select.Trigger>
      <span ref={portalContainer} />
      <Select.Portal container={portalContainer}>
        <Select.Positioner
          align="start"
          alignItemWithTrigger={false}
          className={styles.popup}
          sideOffset={4}
        >
          <Select.Popup render={<ul />} className={styles.listbox}>
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
