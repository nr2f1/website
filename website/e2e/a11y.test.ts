import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { english } from '../src/i18n/locales';
import { routes } from '../src/routes';
import { a11yRules } from '../src/tests/a11y/config';

test.describe('Accessibility for all pages', () => {
  test.describe.configure({ mode: 'parallel' });

  const allRoutes = Object.keys(routes).map((route) => routes[route](english));

  for (const route of allRoutes) {
    test(
      `should not have any automatically detectable accessibility issues on ${route}`,
      { tag: '@a11y' },
      async ({ page }) => {
        await page.goto(route);
        const accessibilityScanResults = await new AxeBuilder({ page })
          .options({
            runOnly: a11yRules,
          })
          .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
      },
    );
  }
});
