import {
  allowedIsoCountryCodes,
  Role,
  type SignupFormValues,
} from '@components/signup-form/helper';
import { object, string, ValidationError } from 'yup';

const validationSchema = object({
  city: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.optional(),
  }),
  country: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.oneOf(allowedIsoCountryCodes).required(),
  }),
  email: string().email().required(),
  firstname: string().required(),
  lastname: string().required(),
  patientFirstName: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.required(),
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
    .required(),
  streetAdress: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.optional(),
  }),
});

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const data: SignupFormValues = await request.json();

  try {
    await validationSchema.validate(data);

    const shouldAddAddress =
      Boolean(data.country) &&
      Boolean(data.region) &&
      Boolean(data.city) &&
      Boolean(data.streetAdress) &&
      Boolean(data.postCode);

    const dto = {
      emails: [{ is_primary: true, type: 'personal', value: data.email }],
      first_name: data.firstname,
      last_name: data.lastname,
    };

    if (data.role === Role.ParentPatient) {
      Object.assign(dto, {
        custom_fields: {
          field_40498: data.patientFirstName,
        },
        tags: ['Parent'],
      });
    }

    if (shouldAddAddress) {
      /*
      Note:
      Givebutter API does not support creating contacts with addresses when the country
      and the zipcode regex do not match, but this is not documented in the API documentation
      https://docs.givebutter.com/reference/create-contact
      */

      Object.assign(dto, {
        addresses: [
          {
            address_1: data.streetAdress,
            address_2: data.streetAdress,
            city: data.city,
            country: data.country,
            is_primary: true,
            state: data.region,
            zipcode: data.postCode,
          },
        ],
      });
    }

    const response = await fetch('https://api.givebutter.com/v1/contacts', {
      body: JSON.stringify(dto),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIVEBUTTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create contact, Givebutter response status: ${response.status}`,
      );
    }

    return new Response(JSON.stringify({ statusText: response.statusText }), {
      status: response.status,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return new Response(JSON.stringify({ errors: error.errors }), {
        status: 400,
      });
    }

    if (error instanceof Error) {
      return new Response(error.message, {
        status: error.message === 'Failed to create contact' ? 400 : 500,
      });
    }

    return new Response('Internal Server Error', { status: 500 });
  }
}
