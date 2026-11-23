import {test,expect} from '@playwright/test'

test('Selectors Demo',async ({page}) => {

    await page.goto('https://www.sauceDemo.com/')
   
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Viji')
    await page.locator('[id="user-name"]').fill('Lakshmi')

    //Use css selector
    //#login-button
    await page.locator('#login-button').click();
    await page.pause()

    //using XPath
    await page.locator('xpath=//input[@id="user-name"] ').fill('Janaki')
    await page.locator('//input[@id="user-name"]').fill('Ramanujam')

    //using text 
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click()
   


});