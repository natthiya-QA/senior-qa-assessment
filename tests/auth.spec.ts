import { test, expect } from '@playwright/test';

test('User should be able to login with valid credentials', async ({ page }) => {
  await page.goto('/login'); // ใช้ URL จากภาพ Screenshot 3
  await page.fill('input[name="email"]', process.env.USER_EMAIL || 'test@example.com');
  await page.fill('input[name="password"]', process.env.USER_PASSWORD || 'password123');
  await page.click('button[type="submit"]');
  
  // ตรวจสอบว่า login สำเร็จ (เช่น เช็ค URL หรือข้อความต้อนรับ)
  await expect(page).toHaveURL(/.*dashboard|.*products/); 
});