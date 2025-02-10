import { expect, test } from '@playwright/test';
import { english } from '../src/i18n/locales';

test.beforeEach(async ({ page }) => {
  await page.goto(`/${english}`);
});

test('hero', async ({ page }) => {
  await expect(
    page.getByRole('heading', {
      name: "It's a rare diagnosis, but you're not alone",
    }),
  ).toBeVisible();

  await expect(page.getByText("We're a non-profit")).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Learn more about BBSOAS' }),
  ).toBeVisible();
});

test('What we do', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'What we do' })).toBeVisible();

  await expect(
    page.getByText(
      'Our vision is that every single family and individual living with rare NR2F1',
    ),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Educate people' }),
  ).toBeVisible();

  await expect(page.getByText('Let us teach you about BBSOAS')).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Empower families' }),
  ).toBeVisible();

  await expect(
    page.getByText(
      'Our vision is that every single family and individual living with BBSOAS will',
    ),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Drive research' }),
  ).toBeVisible();

  await expect(page.getByText('So much about BBSOAS remains')).toBeVisible();
});

test('Support us banner', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Support our work' }),
  ).toBeVisible();
  await expect(page.getByText('There are plenty of ways to')).toBeVisible();

  await expect(page.getByRole('link', { name: 'Support us' })).toBeVisible();
});

test('Latest news', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Latest News' }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'View all updates' }),
  ).toBeVisible();
});

test('Memberships & partners', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Memberships & partners' }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'candid guidestar' }),
  ).toBeVisible();

  await expect(page.getByRole('link', { name: 'Global genes' })).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'The Consortium for Outcome' }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Rare epilepsy network' }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'National organization for' }),
  ).toBeVisible();
});
