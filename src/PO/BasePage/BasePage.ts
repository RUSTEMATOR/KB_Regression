import {Page, Locator} from "@playwright/test";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SidebarMenu from "../../Components/SidebarMenu";
import CategoryDropdown from "../MainPage/Component/CategoryDropdown";
import { axeScan } from "axe-playwright-report";
import playwrightConfig from "../../../playwright.config";

export default class BasePage {
  readonly page: Page
  public header: Header
  public footer: Footer
  public sideBarMenu: SidebarMenu
  private acceptCookiesButton: Locator
  readonly scrollUpButton: Locator
  public categoryDropdown: CategoryDropdown

  constructor(page: Page) {
    this.page = page;

    this.scrollUpButton = this.page.locator('.btn-scroll-top')
    this.acceptCookiesButton = this.page.locator('#accept_initial_notification_button')

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

  async getPageUrl(): Promise<string>{
    return this.page.url()
  }

  async scrollTo(locator: Locator): Promise<void>{
    await locator.scrollIntoViewIfNeeded()
  }

  async clickAcceptCookies(): Promise<void>{
    await this.acceptCookiesButton.click()
  }

  async waitForSelector(locator: Locator): Promise<void>{
    await locator.waitFor({state: "visible"})
  }
  
  async closeModal(): Promise<void>{
    if (await this.page.locator('.fast-deposit-modal').isVisible()) {
      try {
        await this.page.keyboard.press('Escape');
        await this.page.waitForTimeout(500);
      } catch (error) {
        console.log('Could not close modal with Escape key', error);
    }
    
    // Try clicking on any visible close buttons
    try {
      const closeButtons = [
        '.modal__close-icon',
        '.modal__close-button',
        '.close-button',
        '.fast-deposit-modal .btn-close'
      ];
      
      for (const selector of closeButtons) {
        const closeButton = this.page.locator(selector);
        if (await closeButton.isVisible()) {
          await closeButton.click();
          await this.page.waitForTimeout(500);
          break;
        }
      }
    } catch (error) {
      console.log('Could not find close button', error);
    }
  }
  }
  
  async checkAndCloseDepositModal(): Promise<void> {
    // Check if deposit modal is visible and close it if needed
    try {
      const depositModal = this.page.locator('.fast-deposit-modal');
      const closeButton = this.page.locator('.fast-deposit-modal .btn-close');
      
      if (await depositModal.isVisible({ timeout: 2000 })) {
          await closeButton.click();
          await this.page.waitForTimeout(500);
        }
    } catch (error) {
      // If the modal isn't visible or there's another issue, just continue
      console.log('No deposit modal detected or unable to close it', error);
    }
  }

      async clickOn(button: Locator) {
        await button.click();
    }


  get getScrollUpButton(): Locator {
    return this.scrollUpButton
  }
}