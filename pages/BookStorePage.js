class BookStorePage {

  constructor(page) {

    this.page = page;

    this.gotoStoreButton = '#gotoStore';
    this.searchBox = '#searchBox';
    this.logoutButton = 'text=Log out';
  }

  async goToStore() {

    await this.page.locator(this.gotoStoreButton)
      .click();
  }

  async searchBook(bookName) {

    await this.page.locator(this.searchBox)
      .fill(bookName);
  }

  async getBookDetails() {

    const row = this.page.locator('tbody tr')
      .first();

    const title = await row.locator('td')
      .nth(1)
      .textContent();

    const author = await row.locator('td')
      .nth(2)
      .textContent();

    const publisher = await row.locator('td')
      .nth(3)
      .textContent();

    return { title, author, publisher };
  }

  async logout() {

    await this.page.getByText('Log out')
      .click();
  }

}

module.exports = BookStorePage;