'use client';

import { Select } from '@base-ui/react/select';
import Spinner from '@components/icons/spinner';
import { createContact } from '@services/givebutter/create-contact';
import { useFormik } from 'formik';
import { useEffect, useReducer } from 'react';
import {
  getValidationSchema,
  initialState,
  initialValues,
  Role,
  reducer,
  type SignupFormProps,
  type SignupFormValues,
} from './helper';
import styles from './index.module.scss';

interface ErrorMessageProps {
  errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <p>{errorMessage}</p>
);

const SignupForm: React.FC<SignupFormProps> = ({ lang, registerPatient }) => {
  const [{ content, i18nRequestResult, createContactResult }, dispatch] =
    useReducer(reducer, initialState);

  const onSubmit = async (values: SignupFormValues) => {
    try {
      dispatch({ type: 'setCreateContactLoading' });
      await createContact(values);
      dispatch({ type: 'setCreateContactSuccess' });
    } catch (_error) {
      dispatch({ type: 'setCreateContactError' });
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only on mount
  useEffect(() => {
    import(`./i18n/${lang}.json`)
      .then((module) => {
        dispatch({
          payload: module.default,
          type: 'setContent',
        });
      })
      .catch(() => {
        dispatch({ type: 'setContentError' });
      });

    return () => {
      dispatch({ type: 'setContentIdle' });
    };
  }, []);

  const registerPatientInitialValues = {
    ...initialValues,
    role: Role.ParentPatient,
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
    initialValues: registerPatient
      ? registerPatientInitialValues
      : initialValues,
    onSubmit,
    validationSchema: getValidationSchema(lang),
  });

  const handleSelectRoleOnValueChange = (newValue: string | null) => {
    if (newValue) {
      setFieldValue('role', newValue);
    }
  };

  const handleSelectCountryOnValueChange = (newValue: string | null) => {
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
  const showSpinner = createContactResult === 'loading';
  const showExtraFields = values.role === Role.ParentPatient;
  const shouldRenderForm =
    (i18nRequestResult === 'success' && createContactResult === 'idle') ||
    (i18nRequestResult === 'success' && showSpinner);
  const shouldRenderDefaultCreateContactSucess =
    createContactResult === 'success' && values.role !== Role.ParentPatient;
  const shouldRenderCreateContactSucessParentPatient =
    createContactResult === 'success' && values.role === Role.ParentPatient;
  const shouldRenderHeading = Boolean(registerPatient) === false;

  switch (true) {
    case shouldRenderForm:
      return (
        <>
          {shouldRenderHeading ? (
            <div>
              <p className={styles['form-intro__heading']}>
                {content?.formHeading}
              </p>
            </div>
          ) : null}

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
                  <Select.Root
                    value={values.role}
                    onValueChange={handleSelectRoleOnValueChange}
                  >
                    <Select.Trigger
                      className={
                        roleError
                          ? [styles.select, styles['select--error']].join(' ')
                          : styles.select
                      }
                      id="role"
                      onBlur={handleBlur}
                      title={
                        values.role.length > 0
                          ? values.role
                          : content?.fields.role.label
                      }
                    >
                      <Select.Value placeholder={content?.fields.role.label} />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Positioner className={styles.popup}>
                        <Select.Popup className={styles.listbox}>
                          {content?.roles.map(({ label, value }) => (
                            <Select.Item
                              key={value}
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
                  {roleError && <ErrorMessage errorMessage={errors.role} />}
                </div>
              </div>
            </div>
            {showExtraFields && (
              <div className={styles.form__extra_fields}>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <h3 className={styles.form__heading}>
                      {content?.parent.heading}
                    </h3>
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
                    <h4 className={styles.form__subheading}>
                      {content?.parentContact.heading}
                    </h4>
                  </div>
                </div>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <div className={styles.form__field}>
                      <label htmlFor="country">
                        {content?.fields.country.label}
                      </label>
                      <Select.Root
                        value={values.country}
                        onValueChange={handleSelectCountryOnValueChange}
                      >
                        <Select.Trigger
                          className={
                            countryError
                              ? [styles.select, styles['select--error']].join(
                                  ' ',
                                )
                              : styles.select
                          }
                          id="country"
                          title={content?.fields.country.label}
                          onBlur={handleBlur}
                        >
                          <Select.Value
                            placeholder={content?.fields.country.label}
                          />
                        </Select.Trigger>
                        <Select.Portal>
                          <Select.Positioner className={styles.popup}>
                            <Select.Popup className={styles.listbox}>
                              {content?.countries.map(({ label, value }) => (
                                <Select.Item
                                  key={value}
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
            <button
              type="submit"
              className="button button--on-light"
              data-register-form-button
            >
              {showSpinner ? (
                <span>
                  <Spinner />
                </span>
              ) : (
                content?.signupButton
              )}
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
