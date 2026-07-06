# Playwright Portfolio - E2E Test Suite

Automated end-to-end test suite built with Playwright and JavaScript, 
testing the Sauce Demo e-commerce application.

## Why Page Object Model?

This suite uses the Page Object Model (POM) design pattern to separate 
locators and actions from test logic. If a selector changes, it only 
needs to be updated in one place rather than across every test file. 
This makes the suite maintainable and scalable as the application grows.

## Test Coverage

- **Login** - Valid credentials, invalid credentials, empty field validation
- **Cart** - Add to cart, remove from cart, cart navigation
- **Checkout** - Full purchase flow, empty field validation
- **Sorting** - A-Z, Z-A, price low to high, price high to low

## Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript
- Node.js
- GitHub Actions (CI/CD)

## Project Structure

## Getting Started

### Prerequisites
- Node.js v18+

### Installation
npm install
npx playwright install

### Run Tests
npx playwright test

### Run Specific Test File
npx playwright test tests/login.spec.js

### View Report
npx playwright show-report

## Author

Andrew Doan  
[GitHub](https://github.com/AndrewDoan) | 
[LinkedIn](https://linkedin.com/in/addoan)