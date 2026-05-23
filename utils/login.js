const credentials = require('../testData/credentials.json');

async function login(page) {

  await page.goto('https://demoqa.com/login');

  await page.locator('#userName')
    .fill(credentials.username);

  await page.locator('#password')
    .fill(credentials.password);

  await page.locator('#login').click();

}

module.exports = login;