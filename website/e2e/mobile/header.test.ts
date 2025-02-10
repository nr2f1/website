import { expect, test } from '@playwright/test';
import { english } from '../../src/i18n/locales';

test.beforeEach(async ({ page }) => {
  await page.goto(`/${english}`);
});

test.describe('Mobile header', () => {
  test.use({ viewport: { width: 428, height: 926 } });
  test('UI elements', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'hambuguer-button' }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'hambuguer-button' }).click();

    await expect(page.getByText('About BBSOAS', { exact: true })).toBeVisible();

    await expect(
      page.getByText('Living with BBSOAS', { exact: true }),
    ).toBeVisible();

    await expect(page.getByText('Research', { exact: true })).toBeVisible();

    await expect(page.getByText('About us')).toBeVisible();
    await expect(
      page.getByRole('banner').getByText('Support us'),
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Register a patient' }),
    ).toBeVisible();
    await expect(
      page.getByRole('combobox').filter({ hasText: 'English (USA)' }),
    ).toBeVisible();

    await expect(page.getByRole('link', { name: 'Donate' })).toBeVisible();

    await expect(
      page.getByRole('combobox').filter({ hasText: 'English (USA)' }),
    ).toBeVisible();
  });

  test('locale selector', async ({ page }) => {
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
    await expect(page.getByText('Acerca de BBSOAS')).toBeVisible();

    await expect(page.getByText('Vivir con BBSOAS')).toBeVisible();

    await expect(
      page.getByText('Investigación', { exact: true }),
    ).toBeVisible();

    await expect(page.getByText('Sobre nosotros')).toBeVisible();

    await page.getByRole('combobox').filter({ hasText: 'Español' }).click();
    await page.getByRole('option', { name: 'English (USA)' }).click();
    await page.getByRole('button', { name: 'hambuguer-button' }).click();
    await expect(
      page.getByRole('combobox').filter({ hasText: 'English (USA)' }),
    ).toBeVisible();
  });

  test('navigation', async ({ page }) => {
    await expect(
      page.getByText('Living with BBSOAS', { exact: true }),
    ).toBeVisible();

    await page.getByText('Living with BBSOAS', { exact: true }).click();
    await expect(
      page
        .getByRole('banner')
        .getByRole('navigation')
        .getByRole('link', { name: 'Register a patient' }),
    ).toBeVisible();

    await page.getByText('Living with BBSOAS', { exact: true }).click();
    await page.getByText('Research', { exact: true }).click();
    await expect(
      page.getByRole('navigation', { name: 'secondary' }).getByRole('listitem'),
    ).toBeVisible();

    await page.getByText('Research', { exact: true }).click();
    await page.getByText('About us').click();
    await expect(
      page.getByRole('navigation', { name: 'secondary' }).getByRole('listitem'),
    ).toBeVisible();
  });
});
