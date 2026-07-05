const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Page', () => {

  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_password');
    await expect(await loginPage.getErrorMessage()).toBeVisible();
  });

  test('should show error when fields are empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.click('#login-button');
    await expect(await loginPage.getErrorMessage()).toBeVisible();
  });

});