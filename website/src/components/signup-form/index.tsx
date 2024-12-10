'use client';

import styles from './index.module.scss';

import { Option } from '@mui/base/Option';
import { Select } from '@mui/base/Select';
import { createContact } from '@services/givebutter/create-contact';
import type { MuiEvent } from '@shared/types/mui';
import { useFormik } from 'formik';
import { useEffect, useReducer } from 'react';
import {
  Role,
  type SignupFormProps,
  type SignupFormValues,
  getValidationSchema,
  initialState,
  initialValues,
  reducer,
} from './helper';

interface ErrorMessageProps {
  errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <p>{errorMessage}</p>
);

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const [{ content, i18nRequestResult, createContactResult }, dispatch] =
    useReducer(reducer, initialState);

  const onSubmit = async (values: SignupFormValues) => {
    try {
      await createContact(values);
      dispatch({ type: 'setCreateContactSuccess' });
    } catch (error) {
      dispatch({ type: 'setCreateContactError' });
    }
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
        dispatch({ type: 'setContentError' });
      });

    return () => {
      dispatch({ type: 'setContentIdle' });
    };
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
  const shouldRenderForm =
    i18nRequestResult === 'success' && createContactResult === 'idle';
  const shouldRenderDefaultCreateContactSucess =
    createContactResult === 'success' && values.role !== Role.ParentPatient;
  const shouldRenderCreateContactSucessParentPatient =
    createContactResult === 'success' && values.role === Role.ParentPatient;

  switch (true) {
    case shouldRenderForm:
      return (
        <>
          <div>
            <p className={styles['form-intro__heading']}>
              {content?.formHeading}
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label
                    className={firstnameError ? 'error' : ''}
                    htmlFor="firstname"
                  >
                    {content?.fields.firstname.label}
                  </label>
                  <input
                    className={firstnameError ? 'error' : ''}
                    id="firstname"
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={content?.fields.firstname.placeholder}
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
                    {content?.fields.lastname.label}
                  </label>
                  <input
                    className={lastnameError ? 'error' : ''}
                    id="lastname"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={content?.fields.lastname.placeholder}
                    type="text"
                    value={values.lastname}
                  />
                  {lastnameError && (
                    <ErrorMessage errorMessage={errors.lastname} />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <div className={styles.form__field}>
                  <label className={emailError ? 'error' : ''} htmlFor="email">
                    {content?.fields.email.label}
                  </label>
                  <input
                    className={emailError ? 'error' : ''}
                    id="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={content?.fields.email.placeholder}
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
                  <label htmlFor="role">{content?.fields.role.label}</label>
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
                        disablePortal: true,
                        className: styles.popup,
                      },
                      listbox: {
                        className: styles.listbox,
                      },
                    }}
                    value={values.role}
                  >
                    {content?.roles.map(({ label, value }) => (
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
                    <p className={styles.form__heading}>
                      {content?.parent.heading}
                    </p>
                    <p className={styles.form__text}>{content?.parent.text}</p>
                  </div>
                </div>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <div className={styles.form__field}>
                      <label htmlFor="patientFirstName">
                        {content?.fields.patientFirstName.label}
                      </label>
                      <input
                        id="patientFirstName"
                        name="patientFirstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={
                          content?.fields.patientFirstName.placeholder
                        }
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
                      {content?.parentContact.heading}
                    </p>
                    <p className={styles.form__text}>
                      {content?.parentContact.text}
                    </p>
                  </div>
                </div>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <div className={styles.form__field}>
                      <label htmlFor="country">
                        {content?.fields.country.label}
                      </label>
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
                        {content?.countries.map(({ label, value }) => (
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
                        {content?.fields.region.label}{' '}
                        <span className="optional">({content?.optional})</span>
                      </label>
                      <input
                        id="region"
                        name="region"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={content?.fields.region.placeholder}
                        type="text"
                        value={values.region}
                      />
                      {regionError && (
                        <ErrorMessage errorMessage={errors.region} />
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <div className={styles.form__field}>
                      <label htmlFor="streetAdress">
                        {content?.fields.streetAdress.label}{' '}
                        <span className="optional">({content?.optional})</span>
                      </label>
                      <input
                        id="streetAdress"
                        name="streetAdress"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={content?.fields.streetAdress.placeholder}
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
                        {content?.fields.city.label}{' '}
                        <span className="optional">({content?.optional})</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={content?.fields.city.placeholder}
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
                        {content?.fields.postCode.label}{' '}
                        <span className="optional">({content?.optional})</span>
                      </label>
                      <input
                        id="postCode"
                        name="postCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={content?.fields.postCode.placeholder}
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
              {content?.signupButton}
            </button>
          </form>
        </>
      );
    case shouldRenderDefaultCreateContactSucess:
      return (
        <div>
          <p className={styles['form-intro__heading']}>
            {content?.formSuccessHeadingDefault}
          </p>
          <p className={styles['form-intro__text']}>
            {content?.formSuccessMessage}
          </p>
        </div>
      );
    case shouldRenderCreateContactSucessParentPatient:
      return (
        <div>
          <p className={styles['form-intro__heading']}>
            {content?.formSuccessHeadingParentPatient}
          </p>
          <p className={styles['form-intro__text']}>
            {content?.formSuccessMessage}
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default SignupForm;
