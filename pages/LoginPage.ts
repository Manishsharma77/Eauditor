import { Page, Locator } from "@playwright/test";
import { LoginLocators } from "../locators/LoginLocators";

export class LoginPage {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator(LoginLocators.username);
    this.passwordField = page.locator(LoginLocators.password);
    this.loginButton = page.locator(LoginLocators.loginBtn);
  }

  async navigate() {
    await this.page.goto("https://dashboard.eauditor.app/sign-in");
  }

  async enterUsername(value: string) {
    await this.usernameField.fill(value); // no need for waitFor — Playwright auto-waits
  }

  async enterPassword(value: string) {
    await this.passwordField.fill(value);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}