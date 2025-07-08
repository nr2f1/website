import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import styles from './dropdown.module.scss';

const LocaleSelector = () => {
  return (
    <Select
      id="role"
      className={styles.select}
      slotProps={{
        listbox: {
          className: styles.listbox,
        },
        popup: {
          className: styles.popup,
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
