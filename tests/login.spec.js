const { test, expect } = require('@playwright/test');

test.describe('Login Page', () => {

    test('should login with valid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('should show error with invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name', 'wrong_user');
        await page.fill('#password', 'wrong_password');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container')).toBeVisible();
    })

    test('should show error when fields are empty', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container')).toBeVisible();
    });
})