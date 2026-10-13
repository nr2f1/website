import { expect, test } from '@playwright/test';

test('an unknown blog slug answers 404 with the not-found page', async ({
  page,
}) => {
  const response = await page.goto('/en/news/blog/this-post-does-not-exist');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Sorry, this page isn’t available',
  );
});
