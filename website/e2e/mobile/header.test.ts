import { expect, test } from '@playwright/test';
import { english } from '../../src/i18n/locales';
import { routes } from '../../src/routes';

test.beforeEach(async ({ page }) => {
  await page.goto(routes.homepage(english));
});

test.describe('Mobile header', () => {
  test.use({ viewport: { height: 926, width: 428 } });
  test('UI elements', { tag: '@mobile' }, async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'hambuguer-button' }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'hambuguer-button' }).click();

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
  });

  test('locale selector', { tag: '@mobile' }, async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'hambuguer-button' }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'hambuguer-button' }).click();
    await expect(
      page.getByRole('combobox').filter({ hasText: 'English (USA)' }),
    ).toBeVisible();

    await page
      .getByRole('combobox')
      .filter({ hasText: 'English (USA)' })
      .click();
    await page.getByRole('option', { name: 'Español' }).click();
    await page.getByRole('button', { name: 'hambuguer-button' }).click();
  });
});
