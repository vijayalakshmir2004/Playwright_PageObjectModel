import {test,expect} from '@playwright/test'
test.skip('Test one',async({page})=>{



});

test('not yet ready',async({page})=>{

test.fail
});

test.fixme('test to be fixed',async ({page})=>{

});
/*
test.only('slow test',async({page})=>{
    test.slow();

});
*/
test('Login test', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Skipping occasionally in Firefox');

    await page.goto('https://www.demoblaze.com/');

    await expect(page).toHaveTitle('STORE');

});

test('Test full report @smoke',async({page})=>{

});