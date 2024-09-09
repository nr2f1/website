import {
  Role,
  type SignupFormValues,
  allowedIsoCountryCodes,
} from '@components/signup-form/helper';
import { ValidationError, object, string } from 'yup';

const validationSchema = object({
  firstname: string().required(),
  lastname: string().required(),
  email: string().email().required(),
  role: string()
    .oneOf([Role.ParentPatient, Role.Specialist, Role.Supporter])
    .required(),
  patientFirstName: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.required(),
  }),
  country: string().when('role', {
    is: Role.ParentPatient,
    // biome-ignore lint/suspicious/noThenProperty: it is a valid method
    then: (schema) => schema.oneOf(allowedIsoCountryCodes).required(),
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
      first_name: data.firstname,
      last_name: data.lastname,
      emails: [{ type: 'personal', value: data.email, is_primary: true }],
    };

    if (data.role === Role.ParentPatient) {
      Object.assign(dto, {
        custom_fields: {
          field_40498: data.patientFirstName,
        },
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
            state: data.region,
            zipcode: data.postCode,
            country: data.country,
            is_primary: true,
          },
        ],
      });
    }

    const response = await fetch('https://api.givebutter.com/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIVEBUTTER_API_KEY}`,
      },
      body: JSON.stringify(dto),
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
