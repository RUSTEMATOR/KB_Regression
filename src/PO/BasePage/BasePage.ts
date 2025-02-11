import {Page} from "@playwright/test";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SidebarMenu from "../../Components/SidebarMenu";
import CategoryDropdown from "../MainPage/Component/CategoryDropdown";

export default class BasePage {
  readonly page: Page
  private welcomePageHeader: Header
  private header: Header
  private footer: Footer
  private sideBarMenu: SidebarMenu
  private categoryDropdown: CategoryDropdown

  constructor(page: Page) {
    this.page = page;

    this.welcomePageHeader = new Header(this.page)
    this.header = new Header(this.page)
    this.footer = new Footer(this.page)
    this.sideBarMenu = new SidebarMenu(this.page)
    this.categoryDropdown = new CategoryDropdown(this.page)
  }

  async navTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async sleep(miliseconds: number): Promise<void> {
    await this.page.waitForTimeout(miliseconds);
  }

}