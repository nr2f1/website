import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { english } from '../src/i18n/locales';
import { routes } from '../src/routes';
import { a11yRules } from '../src/tests/a11y/config';

test.beforeEach(async ({ page }) => {
  await page.goto(routes.homepage(english));
});

test.describe('Homepage /en', () => {
  test(
    'should not have any automatically detectable accessibility issues',
    { tag: '@a11y' },
    async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .options({
          runOnly: a11yRules,
        })
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    },
  );
});
