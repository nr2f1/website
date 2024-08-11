'use client';

import styles from './index.module.scss';

import type { AvailableLocale } from '@i18n/locales';
import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Role, roles, validatioErrorMessage } from './i18n';

interface SignupFormValues {
  firstname: string;
  lastname: string;
  email: string;
  role: string | Role;
  patientFirstName?: string;
  country?: string;
}

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  patientFirstName: '',
  country: '',
};

type MuiEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>
  | React.FocusEvent<Element, Element>
  | null;

interface ErrorMessageProps {
  errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage = 'This is a mandatory field',
}) => <p>{errorMessage}</p>;

const getValidationSchema = (lang: AvailableLocale) => {
  const errorMessage = validatioErrorMessage[lang];

  return object({
    firstname: string().required(errorMessage),
    lastname: string().required(errorMessage),
    email: string().email().required(errorMessage),
    role: string()
      .oneOf([Role.ParentPatient, Role.Specialist, Role.Supporter])
      .required(errorMessage),
    patientFirstName: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.required(errorMessage),
    }),
  });
};

interface SignupFormProps {
  lang: AvailableLocale;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang = 'en' }) => {
  const validationSchema = getValidationSchema(lang);
  const roleOptions = roles[lang];

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
  const patientFirstNameError =
    touched.patientFirstName && errors.patientFirstName;

  const showExtraFields = values.role === Role.ParentPatient;

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
            {firstnameError && <ErrorMessage errorMessage={errors.firstname} />}
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
            {lastnameError && <ErrorMessage errorMessage={errors.lastname} />}
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
            {emailError && <ErrorMessage errorMessage={errors.email} />}
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
              {roleOptions.map(({ label, value }) => (
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
            {roleError && <ErrorMessage errorMessage={errors.role} />}
          </div>
        </div>
      </div>
      {showExtraFields && (
        <div className={styles.form__extra_fields}>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <p className={styles.form__heading}>Help us with our mission</p>
              <p className={styles.form__text}>
                If you're a BBSOAS parent, could you share your BBSOAS child's
                first name and address with us? We use this to keep track of the
                number of diagnoses worldwide.
              </p>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <div className={styles.form__field}>
                <label htmlFor="patientFirstName">
                  BBSOAS patient's first name
                </label>
                <input
                  id="patientFirstName"
                  name="patientFirstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Sarah"
                  type="text"
                  value={values.patientFirstName}
                />
                {patientFirstNameError && (
                  <ErrorMessage errorMessage={errors.patientFirstName} />
                )}
              </div>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <p className={styles.form__heading}>
                BBSOAS parent/carer or patient's contact details
              </p>
              <p className={styles.form__text}>
                (Sentence to explain why we need these and what we will use them
                for.)
              </p>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__col}>
              <div className={styles.form__field}>
                <label htmlFor="country">Country</label>
                <Select
                  className={
                    roleError
                      ? [styles.select, styles['select--error']].join(' ')
                      : styles.select
                  }
                  id="country"
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
                  value={values.country}
                >
                  {roleOptions.map(({ label, value }) => (
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
                {roleError && <ErrorMessage errorMessage={errors.role} />}
              </div>
            </div>
          </div>
        </div>
      )}
      <button type="submit" className="button button--on-light">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
