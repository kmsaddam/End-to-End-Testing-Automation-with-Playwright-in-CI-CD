import { test, expect } from '@playwright/test';

test('Verify homepage UI elements', async ({ page }) => {
  // Go to your website
  await page.goto('https://www.cozmedix.co.uk/');

  // ✅ Verify page title
  await expect(page).toHaveTitle(/CozMedix/);

  // ✅ Verify logo is visible
  // const logo = page.locator('img[data-src="https://www.cozmedix.co.uk/wp-content/uploads/2023/01/logo.png"]');
  const logo = page.locator("xpath=//img[@class='header_logo header-logo lazyloaded']");
  await expect(logo).toBeVisible();

  // ✅ Verify header is visible
  const header = page.locator('.header-inner');
  await expect(header).toBeVisible();

  // ✅ Verify footer is visible
  const footer = page.locator('#footer');
  await expect(footer).toBeVisible();

  // ✅ Verify product section exists
  const products = page.locator('.product-small');
  await expect(products.first()).toBeVisible();

  const productsCount = await products.count();

  // Optional: check number of products
  await expect(productsCount).toBeGreaterThan(0);
});