import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/products/');

  await expect(
    page.getByRole('heading', {
      name: 'Product Visualization Solutions for eCommerce',
    }),
  ).toBeVisible();

  await expect(page.locator('h1')).toHaveText(
    'Product Visualization Solutions for eCommerce',
  );

  await expect(page.getByAltText('Prototyping').first()).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'product images' }).nth(1),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Model' }).click();

  await expect(page).toHaveURL('http://localhost:3000/1');

  await expect(page.getByRole('heading', { name: 'Model' })).toBeVisible();

  await expect(page.getByTestId('product-type-Model')).toBeVisible();

  const productNames = ['Model', 'Render', 'Animate', 'Visualize'];

  await expect(page.locator('[data-test-id^="product-type-"]')).toHaveCount(3);
  // Use >> for direct descendant of the locator
  await expect(
    page.locator('[data-test-id^="product-type-"] >> h2'),
  ).toHaveText(productNames);
  await expect(
    page.locator('[data-test-id^="animal-type-"] >> img'),
  ).toHaveCount(5);

  await page.getByRole('link', { name: 'Render' }).click();
  await expect(page).toHaveURL('http://localhost:3000/2');

  await page.getByRole('link', { name: 'Render amount: 0' }).click();
  await expect(page).toHaveURL('http://localhost:3000/2');

  await expect(page.getByRole('heading', { name: 'Banana' })).toBeVisible();

  await page.getByRole('button', { name: ' + ' }).click({ clickCount: 3 });

  await page.getByRole('link', { name: 'Animate' }).click();
  await expect(page).toHaveURL('http://localhost:3000/3');

  await expect(
    page.locator('[data-test-id="fruit-type-Render"] >> p:nth-child(3)'),
  ).toHaveText('amount: 3');

  await expect(
    page.getByRole('link', { name: 'Animate amount: 3' }),
  ).toBeVisible();

  await expect(page.getByTestId('product-type-Render')).toHaveText(
    'Render amount: 3',
  );
});
