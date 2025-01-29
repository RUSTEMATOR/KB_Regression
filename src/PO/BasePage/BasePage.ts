import {Page} from "@playwright/test";
import Header from "../../Components/Header";

export default class BasePage {
    private page: Page
    private welcomePageHeader: Header

  constructor(page: Page) {
    this.page = page;

    this.welcomePageHeader = new Header(this.page)
  }

  async navTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async sleep(miliseconds: number): Promise<void> {
    await this.page.waitForTimeout(miliseconds);
  }

}