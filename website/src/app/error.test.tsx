import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ErrorPage from './error';

vi.mock('@app/fonts', () => ({
  nunitoSans: { variable: 'font-nunito-sans' },
}));

describe('ErrorPage', () => {
  const error = Object.assign(new Error('Secret internals'), {
    digest: 'abc123',
  });

  it('offers a retry and never prints the error message', async () => {
    const reset = vi.fn();
    // The page renders its own <html>, so mount it on the document itself
    // rather than inside Testing Library's default <div> container.
    render(<ErrorPage error={error} reset={reset} />, {
      container: document as unknown as HTMLElement,
    });

    await userEvent.click(screen.getByRole('button', { name: 'Try again' }));

    expect(reset).toHaveBeenCalledOnce();
    expect(screen.getByText(/abc123/)).toBeInTheDocument();
    expect(screen.queryByText(/Secret internals/)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go back home' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('lists both actions as list items so the menu is not an empty list', () => {
    render(<ErrorPage error={error} reset={vi.fn()} />, {
      container: document as unknown as HTMLElement,
    });

    const items = within(screen.getByRole('list')).getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(
      within(items[0]).getByRole('button', { name: 'Try again' }),
    ).toBeInTheDocument();
    expect(
      within(items[1]).getByRole('link', { name: 'Go back home' }),
    ).toBeInTheDocument();
  });
});
