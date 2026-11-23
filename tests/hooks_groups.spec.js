
import { test, expect } from '@playwright/test'

test.describe('All my tests', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto("https://www.saucedemo.com/")
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')


    });


    test.afterAll(async ({ }) => {

        console.log("All tests completed")

    })

    test('test home page', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();


    })

    test('logout', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();


    })
})