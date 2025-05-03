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

    await expect(
      page.locator('summary').filter({ hasText: 'About us' }),
    ).toBeVisible();

    await page.locator('summary').filter({ hasText: 'About us' }).click();

    await expect(
      page.getByRole('banner').getByText('What we do'),
    ).toBeVisible();

    await expect(
      page.getByRole('banner').getByText('Who we are'),
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'What is BBSOAS?' }),
    ).toBeVisible();

    await expect(
      page.locator('summary').filter({ hasText: 'Living with BBSOAS' }),
    ).toBeVisible();

    await expect(
      page.locator('summary').filter({ hasText: 'Research' }),
    ).toBeVisible();

    await expect(
      page.locator('summary').filter({ hasText: 'Support us' }),
    ).toBeVisible();

    await expect(page.getByRole('link', { name: 'Contact us' })).toBeVisible();

    // await page.locator('summary').filter({ hasText: 'Support us' }).click();
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
});
