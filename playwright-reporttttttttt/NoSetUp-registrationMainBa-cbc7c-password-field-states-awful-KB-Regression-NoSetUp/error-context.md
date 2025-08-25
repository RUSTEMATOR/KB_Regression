# Test info

- Name: Registration Modal >> Check password field states: awful
- Location: C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\registrationMainBanner\registrationBanner.spec.ts:69:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://www.kingbillycasino.com/
Call log:
  - navigating to "https://www.kingbillycasino.com/", waiting until "load"

    at MainPage.navTo (C:\Users\Rustemator\Desktop\KB_Regression\src\PO\BasePage\BasePage.ts:31:21)
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\registrationMainBanner\registrationBanner.spec.ts:36:28
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\registrationMainBanner\registrationBanner.spec.ts:35:20
```

# Test source

```ts
   1 | import {Page, Locator} from "@playwright/test";
   2 | import Header from "../../Components/Header";
   3 | import Footer from "../../Components/Footer";
   4 | import SidebarMenu from "../../Components/SidebarMenu";
   5 | import CategoryDropdown from "../MainPage/Component/CategoryDropdown";
   6 | import { axeScan } from "axe-playwright-report";
   7 |
   8 | export default class BasePage {
   9 |   readonly page: Page
   10 |   public header: Header
   11 |   public footer: Footer
   12 |   public sideBarMenu: SidebarMenu
   13 |   private acceptCookiesButton: Locator
   14 |   readonly scrollUpButton: Locator
   15 |   public categoryDropdown: CategoryDropdown
   16 |
   17 |   constructor(page: Page) {
   18 |     this.page = page;
   19 |
   20 |     this.scrollUpButton = this.page.locator('.btn-scroll-top')
   21 |     this.acceptCookiesButton = this.page.locator('#accept_initial_notification_button')
   22 |
   23 |     this.header = new Header(this.page)
   24 |     this.footer = new Footer(this.page)
   25 |     this.sideBarMenu = new SidebarMenu(this.page)
   26 |     this.categoryDropdown = new CategoryDropdown(this.page)
   27 |   }
   28 |
   29 |   
   30 |   async navTo(url: string): Promise<void> {
>  31 |     await this.page.goto(url);
      |                     ^ Error: page.goto: net::ERR_ABORTED at https://www.kingbillycasino.com/
   32 |   }
   33 |
   34 |   async sleep(miliseconds: number): Promise<void> {
   35 |     await this.page.waitForTimeout(miliseconds);
   36 |   }
   37 |
   38 |   async getPageUrl(): Promise<string>{
   39 |     return this.page.url()
   40 |   }
   41 |
   42 |   async scrollTo(locator: Locator): Promise<void>{
   43 |     await locator.scrollIntoViewIfNeeded()
   44 |   }
   45 |
   46 |   async clickAcceptCookies(): Promise<void>{
   47 |     await this.acceptCookiesButton.click()
   48 |   }
   49 |
   50 |   async waitForSelector(locator: Locator): Promise<void>{
   51 |     await locator.waitFor({state: "visible"})
   52 |   }
   53 |   
   54 |   async closeModal(): Promise<void>{
   55 |     if (await this.page.locator('.fast-deposit-modal').isVisible()) {
   56 |       try {
   57 |         await this.page.keyboard.press('Escape');
   58 |         await this.page.waitForTimeout(500);
   59 |       } catch (error) {
   60 |         console.log('Could not close modal with Escape key', error);
   61 |     }
   62 |     
   63 |     // Try clicking on any visible close buttons
   64 |     try {
   65 |       const closeButtons = [
   66 |         '.modal__close-icon',
   67 |         '.modal__close-button',
   68 |         '.close-button',
   69 |         '.fast-deposit-modal .btn-close'
   70 |       ];
   71 |       
   72 |       for (const selector of closeButtons) {
   73 |         const closeButton = this.page.locator(selector);
   74 |         if (await closeButton.isVisible()) {
   75 |           await closeButton.click();
   76 |           await this.page.waitForTimeout(500);
   77 |           break;
   78 |         }
   79 |       }
   80 |     } catch (error) {
   81 |       console.log('Could not find close button', error);
   82 |     }
   83 |   }
   84 |   }
   85 |   
   86 |   async checkAndCloseDepositModal(): Promise<void> {
   87 |     // Check if deposit modal is visible and close it if needed
   88 |     try {
   89 |       const depositModal = this.page.locator('.fast-deposit-modal');
   90 |       const closeButton = this.page.locator('.fast-deposit-modal .btn-close');
   91 |       
   92 |       if (await depositModal.isVisible({ timeout: 2000 })) {
   93 |           await closeButton.click();
   94 |           await this.page.waitForTimeout(500);
   95 |         }
   96 |     } catch (error) {
   97 |       // If the modal isn't visible or there's another issue, just continue
   98 |       console.log('No deposit modal detected or unable to close it', error);
   99 |     }
  100 |   }
  101 |
  102 |   get getScrollUpButton(): Locator {
  103 |     return this.scrollUpButton
  104 |   }
  105 | }
```