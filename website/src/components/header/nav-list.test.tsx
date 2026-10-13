import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import NavList from './nav-list';

const navigation = vi.hoisted(() => ({
  pathname: '/en',
  search: '',
}));

vi.mock('next/navigation', () => ({
  usePathname: () => navigation.pathname,
  useSearchParams: () => new URLSearchParams(navigation.search),
}));

const renderOpenMenu = () => {
  const view = render(
    <NavList name="About us">
      <a href="/en/organisation">Organisation</a>
    </NavList>,
  );
  const details = view.container.querySelector('details');
  if (!details) throw new Error('NavList renders no <details>');
  details.open = true;
  return { ...view, details };
};

const rerenderMenu = (rerender: (ui: React.ReactNode) => void) =>
  rerender(
    <NavList name="About us">
      <a href="/en/organisation">Organisation</a>
    </NavList>,
  );

describe('NavList', () => {
  beforeEach(() => {
    navigation.pathname = '/en';
    navigation.search = '';
  });

  it('closes when the pathname changes', () => {
    const { details, rerender } = renderOpenMenu();

    navigation.pathname = '/en/organisation';
    rerenderMenu(rerender);

    expect(details.open).toBe(false);
  });

  it('closes when only the search params change', () => {
    const { details, rerender } = renderOpenMenu();

    navigation.search = 'page=2';
    rerenderMenu(rerender);

    expect(details.open).toBe(false);
  });
});
