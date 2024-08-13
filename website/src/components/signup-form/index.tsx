'use client';

import styles from './index.module.scss';

import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import type { MuiEvent } from '@shared/types/mui';
import { useFormik } from 'formik';
import { useEffect, useReducer } from 'react';
import {
  getValidationSchema,
  initialState,
  initialValues,
  reducer,
  Role,
  type SignupFormProps,
  type SignupFormValues
} from './helper';


interface ErrorMessageProps {
  errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage = 'This is a mandatory field',
}) => <p>{errorMessage}</p>;


const SignupForm: React.FC<SignupFormProps> = ({ lang = 'es' }) => {
  const [{ content, i18nRequestResult }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const onSubmit = (values: SignupFormValues) => {
    console.log('values', values);
  };


  // biome-ignore lint/correctness/useExhaustiveDependencies: Only on mount
  useEffect(() => {
    import(`./i18n/${lang}.json`)
      .then((module) => {
        dispatch({
          type: 'setContent',
          payload: module.default,
        });
      })
      .catch(() => {
        dispatch({ type: 'setError' });
      });

      return () => {
        dispatch({type: 'setIdle'});
      }
  }, []);

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
    validationSchema: getValidationSchema(lang),
  });

  const handleSelectRoleOnChange = (
    _event: MuiEvent,
    newValue: string | null,
  ) => {
    if (newValue) {
      setFieldValue('role', newValue);
    }
  };

  const handleSelectCountryOnChange = (
    _event: MuiEvent,
    newValue: string | null,
  ) => {
    if (newValue) {
      setFieldValue('country', newValue);
    }
  };

  // errors
  const firstnameError = touched.firstname && errors.firstname;
  const lastnameError = touched.lastname && errors.lastname;
  const emailError = touched.email && errors.email;
  const roleError = touched.role && errors.role;
  const patientFirstNameError =
    touched.patientFirstName && errors.patientFirstName;
  const countryError = touched.country && errors.country;
  const regionError = touched.region && errors.region;
  const cityError = touched.city && errors.city;
  const streetAdressError = touched.streetAdress && errors.streetAdress;
  const postCodeError = touched.postCode && errors.postCode;

  // conditional rendering
  const showExtraFields = values.role === Role.ParentPatient;
  const shouldRenderForm = i18nRequestResult === 'success';

  return (shouldRenderForm && 
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
              {firstnameError && (
                <ErrorMessage errorMessage={errors.firstname} />
              )}
            </div>
          </div>
          <div className={styles.form__col}>
            <div className={styles.form__field}>
              <label
                className={lastnameError ? 'error' : ''}
                htmlFor="lastname"
              >
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
                onChange={handleSelectRoleOnChange}
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
                {content && content.roles.map(({ label, value }) => (
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
                  first name and address with us? We use this to keep track of
                  the number of diagnoses worldwide.
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
                  (Sentence to explain why we need these and what we will use
                  them for.)
                </p>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label htmlFor="country">Country</label>
                  <Select
                    className={
                      countryError
                        ? [styles.select, styles['select--error']].join(' ')
                        : styles.select
                    }
                    id="country"
                    onBlur={handleBlur}
                    onChange={handleSelectCountryOnChange}
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
                    {content && content.countries.map(({ label, value }) => (
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
                  {countryError && (
                    <ErrorMessage errorMessage={errors.country} />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label htmlFor="region">
                    State/Province/Region{' '}
                    <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="region"
                    name="region"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Region Name"
                    type="text"
                    value={values.region}
                  />
                  {regionError && <ErrorMessage errorMessage={errors.region} />}
                </div>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label htmlFor="streetAdress">
                    Street address <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="streetAdress"
                    name="streetAdress"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="123 Street Name"
                    type="text"
                    value={values.streetAdress}
                  />
                  {streetAdressError && (
                    <ErrorMessage errorMessage={errors.streetAdress} />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label htmlFor="city">
                    City <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="City Name"
                    type="text"
                    value={values.city}
                  />
                  {cityError && <ErrorMessage errorMessage={errors.city} />}
                </div>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label htmlFor="postCode">
                    Postal/zip code <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="postCode"
                    name="postCode"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Postal/zip code"
                    type="text"
                    value={values.postCode}
                  />
                  {postCodeError && (
                    <ErrorMessage errorMessage={errors.postCode} />
                  )}
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
