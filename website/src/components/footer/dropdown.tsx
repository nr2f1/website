import { Select } from '@base-ui/react/select';
import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import styles from './dropdown.module.scss';

const LocaleSelector = () => {
  return (
    <Select.Root>
      <Select.Trigger id="role" className={styles.select}>
        <Select.Value placeholder={AVAILABLE_LOCALES_LABEL_KEYS[0]?.label} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className={styles.popup}>
          <Select.Popup className={styles.listbox}>
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
