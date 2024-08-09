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

const ErrorMessage = () => <p>{VALIDATION_ERROR_MESSAGE}</p>;

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
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    values,
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

  const firstnameError = touched.firstname && errors.firstname;
  const lastnameError = touched.lastname && errors.lastname;
  const emailError = touched.email && errors.email;
  const roleError = touched.role && errors.role;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__row}>
        <div className={styles.form__col}>
          <div className={styles.form__field}>
            <label
              className={firstnameError ? 'error' : ''}
              htmlFor="firstname"
            >
              First name
            </label>
            <input
              className={firstnameError ? 'error' : ''}
              id="firstname"
              name="firstname"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="John"
              type="text"
              value={values.firstname}
            />
            {firstnameError && <ErrorMessage />}
          </div>
        </div>
        <div className={styles.form__col}>
          <div className={styles.form__field}>
            <label className={lastnameError ? 'error' : ''} htmlFor="lastname">
              Last name
            </label>
            <input
              className={lastnameError ? 'error' : ''}
              id="lastname"
              name="lastname"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Smith"
              type="text"
              value={values.lastname}
            />
            {lastnameError && <ErrorMessage />}
          </div>
        </div>
      </div>
      <div className={styles.form__row}>
        <div className={styles.form__col}>
          <div className={styles.form__field}>
            <label className={emailError ? 'error' : ''} htmlFor="email">
              Email address
            </label>
            <input
              className={emailError ? 'error' : ''}
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="name@email.com"
              type="email"
              value={values.email}
            />
            {emailError && <ErrorMessage />}
          </div>
        </div>
      </div>
      <div className={styles.form__row}>
        <div className={styles.form__col}>
          <div className={styles.form__field}>
            <label htmlFor="role">I am a:</label>
            <Select
              className={
                roleError
                  ? [styles.select, styles['select--error']].join(' ')
                  : styles.select
              }
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
            {roleError && <ErrorMessage />}
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
