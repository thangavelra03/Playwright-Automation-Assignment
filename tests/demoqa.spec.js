
const { test, expect } = require('@playwright/test');


const LoginPage =
require('../pages/LoginPage');

const BookStorePage =
require('../pages/BookStorePage');

const saveBookDetails =
require('../utils/fileUtils');

const credentials =
require('../testData/credentials.json');


test.describe.configure({
  mode: 'serial'
});


test('DemoQA Book Store Test',
async ({ page }) => {

  const loginPage =
    new LoginPage(page);

  const bookStorePage =
    new BookStorePage(page);


  // LOGIN

  await loginPage.openLoginPage();

  await loginPage.login(
    credentials.username,
    credentials.password
  );


  await expect(
    page.locator('#userName-value')
  ).toContainText(
    credentials.username
  );


  // SEARCH BOOK

  await bookStorePage.goToStore();

  await bookStorePage.searchBook(
    'Learning JavaScript Design Patterns'
  );


  // GET BOOK DETAILS

  const book =
    await bookStorePage
      .getBookDetails();

  console.log(book);


  // SAVE INTO FILE

  saveBookDetails(book);


  // LOGOUT

  await bookStorePage.logout();

});