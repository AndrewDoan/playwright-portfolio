const { test, expect } = require('@playwright/test');

test.describe('Checkout Flow', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('.shopping_cart_link');
    });

    test('should complete full checkout', async ({ page }) => {
        await page.click('[data-test="checkout"]');
        await page.fill('[data-test="firstName"]', 'Andrew');
        await page.fill('[data-test="lastName"]', 'Doan');
        await page.fill('[data-test="postalCode"]', '95051');
        await page.click('[data-test="continue"]');
        await page.click('[data-test="finish"]');
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });

    test('should show error when checkout fields are empty', async ({ page }) => {
        await page.click('[data-test="checkout"]');
        await page.click('[data-test="continue"]');
        await expect(page.locator('.error-message-container')).toBeVisible();
    });
})