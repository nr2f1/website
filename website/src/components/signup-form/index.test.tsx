import * as GiveButterService from '@services/givebutter/create-contact';
import {
  type RenderResult,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it, vi } from 'vitest';
import SignUpForm from '.';

const locale = 'en';

const createContactSpy = vi.spyOn(GiveButterService, 'createContact');

describe('SignUpForm', () => {
  it('renders without any accessibility violation', async () => {
    let result: RenderResult;

    await waitFor(() => {
      result = render(<SignUpForm lang={locale} />);
    });

    const results = await waitFor(() => axe(result.container), {
      timeout: 5000,
    });
    expect(results).toHaveNoViolations();
  });

  it('not submit when is a validation error', async () => {
    const user = userEvent.setup();

    await waitFor(() => render(<SignUpForm lang={locale} />));

    const submitButton = screen.getByRole('button', { name: /Sign up/i });
    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getAllByText(/This is a mandatory field/i).length).toBe(4);
      expect(createContactSpy).not.toHaveBeenCalled();
    });
  });

  it('submit when are not validation errors', async () => {
    const user = userEvent.setup();

    await waitFor(() => render(<SignUpForm lang={locale} />));
    const firstNameInput = screen.getByLabelText(/First name/i);
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText(/Last name/i);
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Email address/i);
    expect(emailInput).toBeInTheDocument();

    const roleInput = screen.getByRole('combobox');
    expect(roleInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Sign up/i });
    expect(submitButton).toBeInTheDocument();

    await user.type(firstNameInput, 'John');
    await user.type(lastNameInput, 'Doe');
    await user.type(emailInput, 'example@example.com');
    await user.click(roleInput);
    await user.click(screen.getByText(/Supporter/i));
    await user.click(submitButton);

    await waitFor(() => {
      expect(createContactSpy).toHaveBeenCalledWith({
        city: '',
        country: '',
        email: 'example@example.com',
        firstname: 'John',
        lastname: 'Doe',
        patientFirstName: '',
        postCode: '',
        region: '',
        role: 'supporter',
        streetAdress: '',
      });
    });
  });

  it('render the rest of the form when user select role patient', async () => {
    const user = userEvent.setup();
    const patientFirstName = /BBSOAS patient's first name/i;

    await waitFor(() => render(<SignUpForm lang={locale} />));

    const roleInput = screen.getByRole('combobox');
    expect(roleInput).toBeInTheDocument();

    const patientNameInput = screen.queryByLabelText(patientFirstName);
    expect(patientNameInput).not.toBeInTheDocument();

    await user.click(roleInput);
    await user.click(screen.getByText('BBSOAS parent/carer or patient'));

    await waitFor(() => {
      expect(screen.getByLabelText(patientFirstName)).toBeInTheDocument();
    });
  });
});
