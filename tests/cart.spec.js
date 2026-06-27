const { test, expect } = require('@playwright/test')

test.describe('Shopping Cart', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
    });

    test('should add item to cart', async ({ page }) => {
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('should remove item from cart', async ({ page }) => {
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('[data-test="remove-sauce-labs-backpack"]');
        await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
    });

    test('should navigate to cart page', async ({ page }) => {
        await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    });
})