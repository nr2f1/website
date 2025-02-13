import AxeBuilder from '@axe-core/playwright';
import { test } from '@playwright/test';
import { english } from '../src/i18n/locales';

test.beforeEach(async ({ page }) => {
  await page.goto(`/${english}`);
});

test.describe('Homepage /en', () => {
  // FIXME:
  test.fixme(
    'should not have any automatically detectable accessibility issues',
    { tag: '@a11y' },
    async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    },
  );
});
