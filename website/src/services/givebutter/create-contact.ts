import { Role, type SignupFormValues } from '@components/signup-form/helper';

export const createContact = async (data: SignupFormValues) => {
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
      addresses: [
        {
          address_1: data.streetAdress,
          city: data.city,
          state: data.region,
          zipcode: data.postCode,
          country: data.country,
          is_primary: true,
        },
      ],
    });
  }

  try {
    const response = await fetch('https://api.givebutter.com/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIVEBUTTER_API_KEY}`,
      },
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      throw new Error('Failed to create contact');
    }
  } catch (error) {
    throw new Error(
      `Failed to create contact, message: ${(error as Error).message}`,
    );
  }
};
