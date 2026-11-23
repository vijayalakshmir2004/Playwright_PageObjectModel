const {test,expect} =require('@playwright/test')
const {hello,helloWorld} = require('./demo/hello')
/*
instead of require statement we can also do 
import {hello,helloWorld} from './demo/hello'
console.log(hello())
console.log(helloWorld())
*/
test('My first test',async ({page})=>{

await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')

})