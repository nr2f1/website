import type { AvailableLocale } from '@i18n/locales';
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
  en: 'This is a mandatory field',
  fr: 'Ce champ est obligatoire',
  es: 'Este campo es obligatorio',
  de: 'Dies ist ein Pflichtfeld',
};

export interface CountryOptionProps {
  label: string;
  value: string;
}

export const allowedIsoCountryCodes = [
  "AFG",
  "ALB",
  "DZA",
  "AND",
  "AGO",
  "ATG",
  "ARG",
  "ARM",
  "AUS",
  "AUT",
  "AZE",
  "BHS",
  "BHR",
  "BGD",
  "BRB",
  "BLR",
  "BEL",
  "BLZ",
  "BEN",
  "BTN",
  "BOL",
  "BIH",
  "BWA",
  "BRA",
  "BRN",
  "BGR",
  "BFA",
  "BDI",
  "CPV",
  "KHM",
  "CMR",
  "CAN",
  "CAF",
  "TCD",
  "CHL",
  "CHN",
  "COL",
  "COM",
  "COG",
  "COD",
  "CRI",
  "HRV",
  "CUB",
  "CYP",
  "CZE",
  "DNK",
  "DJI",
  "DMA",
  "DOM",
  "ECU",
  "EGY",
  "SLV",
  "GNQ",
  "ERI",
  "EST",
  "SWZ",
  "ETH",
  "FJI",
  "FIN",
  "FRA",
  "GAB",
  "GMB",
  "GEO",
  "DEU",
  "GHA",
  "GRC",
  "GRD",
  "GTM",
  "GIN",
  "GNB",
  "GUY",
  "HTI",
  "HND",
  "HUN",
  "ISL",
  "IND",
  "IDN",
  "IRN",
  "IRQ",
  "IRL",
  "ISR",
  "ITA",
  "JAM",
  "JPN",
  "JOR",
  "KAZ",
  "KEN",
  "KIR",
  "PRK",
  "KOR",
  "KWT",
  "KGZ",
  "LAO",
  "LVA",
  "LBN",
  "LSO",
  "LBR",
  "LBY",
  "LIE",
  "LTU",
  "LUX",
  "MDG",
  "MWI",
  "MYS",
  "MDV",
  "MLI",
  "MLT",
  "MHL",
  "MRT",
  "MUS",
  "MEX",
  "FSM",
  "MDA",
  "MCO",
  "MNG",
  "MNE",
  "MAR",
  "MOZ",
  "MMR",
  "NAM",
  "NRU",
  "NPL",
  "NLD",
  "NZL",
  "NIC",
  "NER",
  "NGA",
  "MKD",
  "NOR",
  "OMN",
  "PAK",
  "PLW",
  "PAN",
  "PNG",
  "PRY",
  "PER",
  "PHL",
  "POL",
  "PRT",
  "QAT",
  "ROU",
  "RUS",
  "RWA",
  "KNA",
  "LCA",
  "VCT",
  "WSM",
  "SMR",
  "STP",
  "SAU",
  "SEN",
  "SRB",
  "SYC",
  "SLE",
  "SGP",
  "SVK",
  "SVN",
  "SLB",
  "SOM",
  "ZAF",
  "SSD",
  "ESP",
  "LKA",
  "SDN",
  "SUR",
  "SWE",
  "CHE",
  "SYR",
  "TJK",
  "TZA",
  "THA",
  "TLS",
  "TGO",
  "TON",
  "TTO",
  "TUN",
  "TUR",
  "TKM",
  "TUV",
  "UGA",
  "UKR",
  "ARE",
  "GBR",
  "USA",
  "URY",
  "UZB",
  "VUT",
  "VEN",
  "VNM",
  "YEM",
  "ZMB",
  "ZWE"
]

export const getValidationSchema = (lang: AvailableLocale) => {
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
    country: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) =>
        schema.oneOf(allowedIsoCountryCodes).required(errorMessage),
    }),
    region: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    streetAdress: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    city: string().when('role', {
      is: Role.ParentPatient,
      // biome-ignore lint/suspicious/noThenProperty: it is a valid method
      then: (schema) => schema.optional(),
    }),
    postCode: string().when('role', {
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
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  patientFirstName: '',
  country: '',
  region: '',
  streetAdress: '',
  city: '',
  postCode: '',
};


export interface SignupFormProps {
  lang: AvailableLocale;
}

export interface Content {
  countries: CountryOptionProps[];
  validatioErrorMessage: string;
  roles: RoleOptionProps[];
  fields: {
    firstname: {
      label: string;
      placeholder: string;
    }
    lastname: {
      label: string;
      placeholder: string;
    }
    email: {
      label: string;
      placeholder: string;
    }
    role: {
      label: string;
    }
    patientFirstName: {
      label: string;
      placeholder: string;
    }
    country: {
      label: string;
    }
    region: {
      label: string;
      placeholder: string;
    }
    streetAdress: {
      label: string;
      placeholder: string;
    }  
    city: {
      label: string;
      placeholder: string;
    }
    postCode: {
      label: string;
      placeholder: string;
    }
    signupButton: string;
  }
  parent: {
    heading: string;
    text: string;
  }
  parentContact: {
    heading: string;
    text: string;
  }
}

export interface State {
  content: Content | undefined;
  i18nRequestResult: 'idle' | 'loading' | 'success' | 'error';
}

export type Action =
  | { type: 'setLoading' }
  | { type: 'setIdle' }
  | { type: 'setContent'; payload: Content }
  | { type: 'setError' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setIdle': {
      return {
        ...state,
        content: undefined,
        i18nRequestResult: 'idle',
      };
    }
    case 'setLoading': {
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
    case 'setError': {
      return {
        ...state,
        content: undefined,
        i18nRequestResult: 'error',
      };
    }
    default:
      throw new Error('Invalid action type');
  }
};

export const initialState: State = {
  content: undefined,
  i18nRequestResult: 'idle',
};
