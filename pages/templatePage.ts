import { Page, expect } from "@playwright/test";
/* For TestCase1.spec.ts */

export class TemplatePage {
  constructor(private page: Page) {}

  async openTemplatesList() {
await this.page.getByText("Templates List", { exact: true }).click();
  }

  async clickCreate() {
    await this.page.getByRole("button", { name: "Create", exact: true }).click();
  }

  async enterTemplateName(name: string) {
    await this.page.getByPlaceholder("Enter template name").fill(name);
    await this.page.getByRole("button", { name: "Submit" }).click();
  }

  async selectTemplateType(option: string) {
    await this.page.getByText("Select Template Type").click();
    await this.page.getByText(option, { exact: true }).click();
  }

  async fillDescription(text: string) {
    await this.page.getByPlaceholder("Description").fill(text);
  }

  // ✅ FIX: Add missing method
  async choosePrivateTemplate() {
    await this.page.getByText("Make it Private Template", { exact: true }).click();
  }

  async finalSubmitForm() {
    await this.page.getByRole("button", { name: "Submit" }).click();
  }
}
