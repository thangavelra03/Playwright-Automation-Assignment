const fs = require('fs');

const { test, expect } = require('@playwright/test');
const login = require('../utils/login');
const credentials = require('../testData/credentials.json');

test('DemoQA Book Store Login Test', async ({ page }) => {
  await login(page);
  await expect(page.locator("#userName-value")).toContainText(credentials.username);
  await expect(page.getByText('Logout')).toBeVisible();
});

test('Search Functionality Test', async ({ page }) => {
  await login(page);
  await expect(page.locator("#gotoStore")).toBeVisible();
  await page.locator("#gotoStore").click();
  await page.locator("#searchBox").toBeVisible;
  await page.locator("#searchBox").fill('Learning JavaScript Design Patterns');

  const row = page.locator('tbody tr').first();


  await expect(row.locator('td').nth(1))
    .toContainText('Learning JavaScript Design Patterns');


  const title = await row.locator('td').nth(1).textContent();

  const author = await row.locator('td').nth(2).textContent();

  const publisher = await row.locator('td').nth(3).textContent();

  console.log('Title :', title);
  console.log('Author :', author);
  console.log('Publisher :', publisher);


  const bookDetails = 
  `
  Title : ${title}
  Author : ${author}
  Publisher : ${publisher}
  `;

  fs.writeFileSync('book-details.txt', bookDetails);

  await page.getByText('Log out').click();


})