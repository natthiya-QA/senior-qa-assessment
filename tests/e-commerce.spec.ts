import { test, expect } from '@playwright/test';

// ดึงค่า URL จาก Environment Variable หรือใช้ค่า Default
const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com'; 

test.describe('E-commerce Critical Flow', () => {

  test('TC01 - User should be able to login successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // สมมติใช้เว็บมาตรฐานสำหรับการทดสอบ (คุณสามารถเปลี่ยน selector ตามหน้าจอจริงได้)
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    // ตรวจสอบว่า Login สำเร็จโดยดูว่ามีสินค้าขึ้นมาไหม
    await expect(page).toHaveURL(/.*inventory.html/);
    const productTitle = await page.locator('.title');
    await expect(productTitle).toHaveText('Products');
  });

  test('TC02 - User should be able to add an item to the cart', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Login ก่อนเพื่อเข้าไปเพิ่มของ
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    // 1. เลือกสินค้าชิ้นแรก
    const firstItemName = await page.locator('.inventory_item_name').first().innerText();
    await page.click('.btn_primary.btn_inventory').first();

    // 2. ตรวจสอบว่าเลขที่ตะกร้าขึ้นเป็น 1
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // 3. เข้าไปดูในตะกร้าว่าชื่อสินค้าตรงกันไหม
    await page.click('.shopping_cart_link');
    const itemInCart = await page.locator('.inventory_item_name').innerText();
    expect(itemInCart).toBe(firstItemName);
  });

});