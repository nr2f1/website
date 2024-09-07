import { describe, expect, it, vi } from 'vitest';
import axe from '@tests/a11y/test-utils';
import {
  render,
  waitFor,
  screen,
  type RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '.';
import * as GiveButterService from '@services/givebutter/create-contact';

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
});
