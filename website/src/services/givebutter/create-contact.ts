import type { SignupFormValues } from '@components/signup-form/helper';

export const createContact = async (data: SignupFormValues) => {
  try {
    const response = await fetch(`${window.origin}/api/create-contact`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
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
