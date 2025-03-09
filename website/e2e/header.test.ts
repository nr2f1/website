import { expect, test } from '@playwright/test';
import { english } from '../src/i18n/locales';
import { routes } from '../src/routes';

test.beforeEach(async ({ page }) => {
  await page.goto(routes.homepage(english));
});

test.describe('header', () => {
  test('UI elements', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'NR2F1 Foundation' }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Register a patient' }).first(),
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Donate' }).first(),
    ).toBeVisible();

    await expect(page.getByText('About BBSOAS', { exact: true })).toBeVisible();

    await expect(
      page.getByText('Living with BBSOAS', { exact: true }),
    ).toBeVisible();

    await expect(page.getByText('Research', { exact: true })).toBeVisible();

    await expect(page.getByText('About us')).toBeVisible();

    await expect(
      page.getByRole('banner').getByText('Support us'),
    ).toBeVisible();
  });

  test('locale selector', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({
          hasText:
            /^English \(USA\)EspañolEnglish \(USA\)FrançaisDeutschRegister a patientDonate$/,
        })
        .getByRole('combobox'),
    ).toBeVisible();

    await page
      .locator('div')
      .filter({
        hasText:
          /^English \(USA\)EspañolEnglish \(USA\)FrançaisDeutschRegister a patientDonate$/,
      })
      .getByRole('combobox')
      .click();

    await page.getByRole('option', { name: 'Español' }).click();

    await expect(
      page
        .locator('div')
        .filter({
          hasText:
            /^EspañolEspañolEnglish \(USA\)FrançaisDeutschRegistrar un pacienteDonar$/,
        })
        .getByRole('combobox'),
    ).toBeVisible();

    await page
      .locator('div')
      .filter({
        hasText:
          /^EspañolEspañolEnglish \(USA\)FrançaisDeutschRegistrar un pacienteDonar$/,
      })
      .getByRole('combobox')
      .click();
    await page.getByRole('option', { name: 'English (USA)' }).click();

    await expect(
      page
        .locator('div')
        .filter({
          hasText:
            /^English \(USA\)EspañolEnglish \(USA\)FrançaisDeutschRegister a patientDonate$/,
        })
        .getByRole('combobox'),
    ).toBeVisible();
  });

  test('navigation', async ({ page }) => {
    await page.getByText('Living with BBSOAS', { exact: true }).click();

    await expect(
      page.getByRole('link', { name: 'Register a patient' }).nth(1),
    ).toBeVisible();

    await page.getByText('Research', { exact: true }).click();

    await expect(
      page.getByRole('navigation', { name: 'secondary' }).getByRole('listitem'),
    ).toBeVisible();

    await page.getByText('About us').click();
    await expect(page.getByRole('link', { name: 'News' })).toBeVisible();
  });
});
