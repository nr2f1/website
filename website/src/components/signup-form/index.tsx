'use client';

import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import styles from './index.module.scss';

import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import { useFormik } from 'formik';
import { object, string } from 'yup';

interface SignupFormValues {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  role: '',
};

type MuiEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>
  | React.FocusEvent<Element, Element>
  | null;

const VALIDATION_ERROR_MESSAGE = 'This is a mandatory field';

const validationSchema = object({
  firstname: string().required(VALIDATION_ERROR_MESSAGE),
  lastname: string().required(VALIDATION_ERROR_MESSAGE),
  email: string()
    .email('Invalid email address')
    .required(VALIDATION_ERROR_MESSAGE),
  role: string().required(VALIDATION_ERROR_MESSAGE),
});

const SignupForm = () => {
  const onSubmit = (values: SignupFormValues) => {
    console.log('values', values);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSelectOnChange = (_event: MuiEvent, newValue: string | null) => {
    if (newValue) {
      setFieldValue('role', newValue);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="field">
            <label htmlFor="firstname">First name</label>
            <input
              id="firstname"
              name="firstname"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="John"
              type="text"
              value={values.firstname}
            />
          </div>
        </div>
        <div className="col">
          <div className="field">
            <label htmlFor="lastname">Last name</label>
            <input
              id="lastname"
              name="lastname"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Smith"
              type="text"
              value={values.lastname}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="name@email.com"
              type="email"
              value={values.email}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="field">
            <label htmlFor="role">I am a:</label>
            <Select
              className={styles.select}
              id="role"
              onBlur={handleBlur}
              onChange={handleSelectOnChange}
              slotProps={{
                popup: {
                  className: styles.popup,
                },
                listbox: {
                  className: styles.listbox,
                },
              }}
              value={values.role}
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
          </div>
        </div>
      </div>
      <button type="submit" className="button button--on-light">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
