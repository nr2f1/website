import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import styles from './index.module.scss';

import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';

const SignupForm = () => {
  return (
    <form action="" className={styles.form}>
      <div className="row">
        <div className="col">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
          />
        </div>
        <div className="col">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Smith"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@email.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="role">I am a:</label>
          <Select
            id="role"
            className={styles.select}
            slotProps={{
              popup: {
                className: styles.popup,
              },
              listbox: {
                className: styles.listbox,
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
          </Select>{' '}
        </div>
      </div>
      <button type="submit" className="button button--on-light">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
