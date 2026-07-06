const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Checkout Flow', () => {

    test.beforeEach(async({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addItemToCart();
        await inventoryPage.goToCart();
    });

    test('should complete full checkout', async ({ page }) => {
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await cartPage.checkout();
        await checkoutPage.fillInfo('Andrew', 'Doan', '95051');
        await checkoutPage.continue();
        await checkoutPage.finish();
        await expect(await checkoutPage.getConfirmation()).toHaveText('Thank you for your order!');
    });

    test('should show error when checkout fields are empty', async ({ page }) => {
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await cartPage.checkout();
        await checkoutPage.continue();
        await expect(await checkoutPage.getErrorMessage()).toBeVisible();
    });

});