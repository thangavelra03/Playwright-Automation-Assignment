class LoginPage {

  constructor(page) {

    this.page = page;

    this.usernameInput = '#userName';
    this.passwordInput = '#password';
    this.loginButton = '#login';
    this.loggedInUser = '#userName-value';
  }

  async openLoginPage() {

    await this.page.goto(
      'https://demoqa.com/login'
    );
  }

  async login(username, password) {

    await this.page.locator(this.usernameInput)
      .fill(username);

    await this.page.locator(this.passwordInput)
      .fill(password);

    await this.page.locator(this.loginButton)
      .click();

    await this.page.locator(this.loggedInUser)
      .waitFor();
  }

}

module.exports = LoginPage;