import { test, expect } from '@playwright/test';

test('User should be able to login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  // ปรับ Selector ให้ตรงกับเว็บ SauceDemo
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // ตรวจสอบว่า Login สำเร็จ
  await expect(page).toHaveURL(/.*inventory.html/);
});