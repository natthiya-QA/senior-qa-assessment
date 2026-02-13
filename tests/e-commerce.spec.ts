import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com';

test.describe('E-commerce Critical Flow', () => {
  test('TC01 - User should be able to login successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC02 - User should be able to add an item to the cart', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    
    // กดเพิ่มสินค้าชิ้นแรกลงตะกร้า
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    
    // ตรวจสอบว่าเลขที่ตะกร้าเปลี่ยนเป็น 1
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });
});