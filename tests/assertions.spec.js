

import { test, expect } from "@playwright/test";

test('assertions demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')

    await page.pause()
    //Assertion
    //check element present or not
    //await expect(page.getByRole('heading',{name: 'The Kitchen' })).toHaveCount(1)
    await expect(page.getByText('The Kitchen')).toHaveCount(1);

    if (await page.$('text=The kitchen')) {
        await page.locator('text=The Kitchen').click()

    }


    //check element hidden or visible 
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    // await expect.soft(page.locator('text=The kitchen')).toBeHidden()


    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    // await expect.soft(page.locator('text=The kitchen')).toBeDisabled()


    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect.soft(page.locator('text=The kitchen')).not.toHaveText('ABCD')

    

    //check attribute value 
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The kitchen')).toHaveClass(/.*css-dpmy2a/)

    //check URL and Title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    
    await page.pause()
    //Visual validation with screenshot
    await expect(page).toHaveScreenshot()

})