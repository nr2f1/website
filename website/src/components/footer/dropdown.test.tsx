import { AVAILABLE_LOCALES_LABEL_KEYS } from '@i18n/locales';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axe from '@tests/a11y/test-utils';
import { describe, expect, it } from 'vitest';
import LocaleSelector from './dropdown';

const [es] = AVAILABLE_LOCALES_LABEL_KEYS;

describe('accordion', () => {
  it('renders without any accessibility violation', async () => {
    const { container } = render(<LocaleSelector />);
    const results = await waitFor(() => axe(container), { timeout: 5000 });
    expect(results).toHaveNoViolations();
  });

  it('allow selecting options', async () => {
    const { getByRole } = render(<LocaleSelector />);
    const user = userEvent.setup();

    await user.pointer({ target: getByRole('combobox'), keys: '[MouseLeft]' });

    const listbox = within(getByRole('listbox'));

    await user.click(listbox.getByText(new RegExp(es.label, 'i')));

    await waitFor(() => {
      const hiddenInput = screen.getByRole('textbox', { hidden: true });
      expect(hiddenInput).toHaveValue(es.value);
    });
  });
});
