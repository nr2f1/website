import type { AvailableLocale } from '@i18n/locales';
import type { RequestResult } from '@shared/types/request';
import { object, string } from 'yup';

export enum Role {
  ParentPatient = 'parent-patient',
  Specialist = 'specialist',
  Supporter = 'supporter',
}

export interface RoleOptionProps {
  label: string;
  value: Role;
}

type ValidationErrorMessage = Record<AvailableLocale, string>;

export const validatioErrorMessage: ValidationErrorMessage = {
  de: 'Dies ist ein Pflichtfeld',
  en: 'This is a mandatory field',
  es: 'Este campo es obligatorio',
  fr: 'Ce champ est obligatoire',
  it: 'Questo campo è obbligatorio',
};

export interface CountryOptionProps {
  label: string;
  value: string;
}

export const allowedIsoCountryCodes = [
  'AFG',
  'ALB',
  'DZA',
  'AND',
  'AGO',
  'ATG',
  'ARG',
  'ARM',
  'AUS',
  'AUT',
  'AZE',
  'BHS',
  'BHR',
  'BGD',
  'BRB',
  'BLR',
  'BEL',
  'BLZ',
  'BEN',
  'BTN',
  'BOL',
  'BIH',
  'BWA',
  'BRA',
  'BRN',
  'BGR',
  'BFA',
  'BDI',
  'CPV',
  'KHM',
  'CMR',
  'CAN',
  'CAF',
  'TCD',
  'CHL',
  'CHN',
  'COL',
  'COM',
  'COG',
  'COD',
  'CRI',
  'HRV',
  'CUB',
  'CYP',
  'CZE',
  'DNK',
  'DJI',
  'DMA',
  'DOM',
  'ECU',
  'EGY',
  'SLV',
  'GNQ',
  'ERI',
  'EST',
  'SWZ',
  'ETH',
  'FJI',
  'FIN',
  'FRA',
  'GAB',
  'GMB',
  'GEO',
  'DEU',
  'GHA',
  'GRC',
  'GRD',
  'GTM',
  'GIN',
  'GNB',
  'GUY',
  'HTI',
  'HND',
  'HUN',
  'ISL',
  'IND',
  'IDN',
  'IRN',
  'IRQ',
  'IRL',
  'ISR',
  'ITA',
  'JAM',
  'JPN',
  'JOR',
  'KAZ',
  'KEN',
  'KIR',
  'PRK',
  'KOR',
  'KWT',
  'KGZ',
  'LAO',
  'LVA',
  'LBN',
  'LSO',
  'LBR',
  'LBY',
  'LIE',
  'LTU',
  'LUX',
  'MDG',
  'MWI',
  'MYS',
  'MDV',
  'MLI',
  'MLT',
  'MHL',
  'MRT',
  'MUS',
  'MEX',
  'FSM',
  'MDA',
  'MCO',
  'MNG',
  'MNE',
  'MAR',
  'MOZ',
  'MMR',
  'NAM',
  'NRU',
  'NPL',
  'NLD',
  'NZL',
  'NIC',
  'NER',
  'NGA',
  'MKD',
  'NOR',
  'OMN',
  'PAK',
  'PLW',
  'PAN',
  'PNG',
  'PRY',
  'PER',
  'PHL',
  'POL',
  'PRT',
  'QAT',
  'ROU',
  'RUS',
  'RWA',
  'KNA',
  'LCA',
  'VCT',
  'WSM',
  'SMR',
  'STP',
  'SAU',
  'SEN',
  'SRB',
  'SYC',
  'SLE',
  'SGP',
  'SVK',
  'SVN',
  'SLB',
  'SOM',
  'ZAF',
  'SSD',
  'ESP',
  'LKA',
  'SDN',
  'SUR',
  'SWE',
  'CHE',
  'SYR',
  'TJK',
  'TZA',
  'THA',
  'TLS',
  'TGO',
  'TON',
  'TTO',
  'TUN',
  'TUR',
  'TKM',
  'TUV',
  'UGA',
  'UKR',
  'ARE',
  'GBR',
  'USA',
  'URY',
  'UZB',
  'VUT',
  'VEN',
  'VNM',
  'YEM',
  'ZMB',
  'ZWE',
];

export const getValidationSchema = (lang: AvailableLocale) => {
  const errorMessage = validatioErrorMessage[lang];

  return object({
    city: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    country: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) =>
        schema.oneOf(allowedIsoCountryCodes).required(errorMessage),
    }),
    email: string().email().required(errorMessage),
    firstname: string().required(errorMessage),
    lastname: string().required(errorMessage),
    patientFirstName: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.required(errorMessage),
    }),
    postCode: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    region: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    role: string()
      .oneOf([Role.ParentPatient, Role.Specialist, Role.Supporter])
      .required(errorMessage),
    streetAdress: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
  });
};

export interface SignupFormValues {
  firstname: string;
  lastname: string;
  email: string;
  role: string | Role;
  patientFirstName?: string;
  country?: string;
  region?: string;
  streetAdress?: string;
  city?: string;
  postCode?: string;
}

export const initialValues = {
  city: '',
  country: '',
  email: '',
  firstname: '',
  lastname: '',
  patientFirstName: '',
  postCode: '',
  region: '',
  role: '',
  streetAdress: '',
};

export interface SignupFormProps {
  lang: AvailableLocale;
  registerPatient?: boolean;
}

export interface Content {
  countries: CountryOptionProps[];
  validatioErrorMessage: string;
  roles: RoleOptionProps[];
  fields: {
    firstname: {
      label: string;
      placeholder: string;
    };
    lastname: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    role: {
      label: string;
    };
    patientFirstName: {
      label: string;
      placeholder: string;
    };
    country: {
      label: string;
    };
    region: {
      label: string;
      placeholder: string;
    };
    streetAdress: {
      label: string;
      placeholder: string;
    };
    city: {
      label: string;
      placeholder: string;
    };
    postCode: {
      label: string;
      placeholder: string;
    };
    signupButton: string;
  };
  formHeading: string;
  formSuccessHeadingDefault: string;
  formSuccessHeadingParentPatient: string;
  formSuccessMessage: string;
  parent: {
    heading: string;
    text: string;
  };
  parentContact: {
    heading: string;
    text: string;
  };
  signupButton: string;
  optional: string;
}

export interface State {
  content: Content | undefined;
  i18nRequestResult: RequestResult;
  createContactResult: RequestResult;
}

export type Action =
  | { type: 'setContentLoading' }
  | { type: 'setContentIdle' }
  | { type: 'setContent'; payload: Content }
  | { type: 'setContentError' }
  | { type: 'setCreateContactLoading' }
  | { type: 'setCreateContactSuccess' }
  | { type: 'setCreateContactError' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setContentIdle': {
      return {
        ...state,
        content: undefined,
        i18nRequestResult: 'idle',
      };
    }
    case 'setContentLoading': {
      return {
        ...state,
        i18nRequestResult: 'loading',
      };
    }
    case 'setContent': {
      return {
        ...state,
        content: action.payload,
        i18nRequestResult: 'success',
      };
    }
    case 'setContentError': {
      return {
        ...state,
        content: undefined,
        i18nRequestResult: 'error',
      };
    }
    case 'setCreateContactLoading': {
      return {
        ...state,
        createContactResult: 'loading',
      };
    }
    case 'setCreateContactSuccess': {
      return {
        ...state,
        createContactResult: 'success',
      };
    }
    case 'setCreateContactError': {
      return {
        ...state,
        createContactResult: 'error',
      };
    }
    default:
      throw new Error(`Invalid action type ${JSON.stringify(action)}`);
  }
};

export const initialState: State = {
  content: undefined,
  createContactResult: 'idle',
  i18nRequestResult: 'idle',
};
