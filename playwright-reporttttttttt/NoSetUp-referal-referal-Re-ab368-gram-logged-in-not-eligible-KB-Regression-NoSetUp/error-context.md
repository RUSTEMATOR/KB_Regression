# Test info

- Name: Referral >> Check the /referral_program logged in, not eligible
- Location: C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\referal\referal.spec.ts:31:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#burger_menu_btn')
    - locator resolved to <button class="burger" id="burger_menu_btn">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal__backdrop"></div> from <div id="modal-root">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="modal__backdrop"></div> from <div id="modal-root">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="modal__backdrop"></div> from <div id="modal-root">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

    at Header.openBurgerMenu (C:\Users\Rustemator\Desktop\KB_Regression\src\Components\Header.ts:50:41)
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\referal\referal.spec.ts:41:35
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\referal\referal.spec.ts:40:20
```

# Test source

```ts
   1 | import BaseComponent from "./BaseComponent";
   2 | import {Locator, Page} from "@playwright/test";
   3 | import SignInModal from "../PO/MainPage/Component/SignInModal";
   4 | import SignUpModal from "../PO/MainPage/Component/SignUpModal";
   5 | import {DepModal} from "./DepModal";
   6 |
   7 |
   8 | export default class Header extends BaseComponent {
   9 |     private burgerMenuOpenButton: Locator
   10 |     private headerLogo: Locator
   11 |     private search: Locator
   12 |     private searchField: Locator
   13 |     private createAccountButton: Locator
   14 |     private signInButton: Locator
   15 |     private langDropdown: Locator
   16 |     private filterButton: Locator
   17 |     private depositButton: Locator
   18 |     private gameItem: Locator
   19 |     private currenciesDropdown: Locator
   20 |
   21 |     private filterProviderButton: Locator
   22 |     private filterCategoriesButton: Locator
   23 |
   24 |     private langDropdownItem: (language: string) => Locator
   25 |
   26 |
   27 |
   28 |     constructor(page: Page) {
   29 |         super(page);
   30 |
   31 |         this.burgerMenuOpenButton = page.locator('#burger_menu_btn')
   32 |         this.headerLogo = page.locator('.header__logo--desktop')
   33 |         this.search = page.locator('.header__input-search')
   34 |         this.searchField = page.locator('#header_search_input')
   35 |         this.createAccountButton = page.locator('#header_create_acc_btn')
   36 |         this.signInButton = page.locator('#header_log_in_btn')
   37 |         this.langDropdown = page.locator('#lang_dropdown')
   38 |         this.filterButton = page.locator('#filter_btn')
   39 |         this.depositButton = page.locator('#header_dep_btn')
   40 |         this.gameItem = page.locator('.select-games-search-for-grid__option-link')
   41 |         this.currenciesDropdown = page.locator('#header_currency_dropdown')
   42 |
   43 |         this.filterProviderButton = page.locator('.games-search-filter-block__header').filter({ hasText: /^Provider$/ })
   44 |         this.filterCategoriesButton = page.locator('.games-search-filter-block__header').filter({ hasText: /^Category$/ })
   45 |
   46 |         this.langDropdownItem = (language: string) => page.locator('.select-language-icons-with-code__link').filter({hasText: language})
   47 |     }
   48 |
   49 |     async openBurgerMenu(): Promise<void> {
>  50 |         await this.burgerMenuOpenButton.click()
      |                                         ^ Error: locator.click: Target page, context or browser has been closed
   51 |     }
   52 |
   53 |     async clickHeaderLogo(): Promise<void> {
   54 |         await this.headerLogo.click()
   55 |     }
   56 |
   57 |     async searchFor(searchTerm: string): Promise<void> {
   58 |         await this.search.click()
   59 |         await this.searchField.fill(searchTerm)
   60 |     }
   61 |
   62 |     async clickCreateAccount(): Promise<SignUpModal> {
   63 |         await this.createAccountButton.click()
   64 |         return new SignUpModal(this.page)
   65 |     }
   66 |
   67 |     async clickSignIn(): Promise<SignInModal> {
   68 |         await this.signInButton.click()
   69 |         return new SignInModal(this.page)
   70 |     }
   71 |
   72 |     async signIn(email: string, password: string): Promise<void> {
   73 |         const signInModal = await this.clickSignIn()
   74 |         await signInModal.fillEmail(email)
   75 |         await signInModal.fillPassword(password)
   76 |         await signInModal.clickSignIn()
   77 |         await signInModal.page.waitForTimeout(8000)
   78 |     }
   79 |
   80 |     async openLangDropdown(): Promise<void> {
   81 |         await this.langDropdown.click()
   82 |     }
   83 |
   84 |     async changeLanguageTo(language: string): Promise<void> {
   85 |         await this.openLangDropdown()
   86 |         await this.langDropdownItem(language).click()
   87 |     }
   88 |
   89 |     async clickFilterButton(): Promise<void> {
   90 |         await this.filterButton.click()
   91 |     }
   92 |
   93 |     async clickFilterProviderButton(): Promise<void> {
   94 |         await this.filterProviderButton.click()
   95 |     }
   96 |
   97 |     async clickFilterCategoriesButton(): Promise<void> {
   98 |         await this.filterCategoriesButton.click()
   99 |     }
  100 |
  101 |     async getListOfFilterProviders(): Promise<Array<string>>{
  102 |
  103 |         return await this.page.evaluate(() => {
  104 |             const filterProviders = document.querySelectorAll('.games-search-filter-block__header--active + div.collapse.collapse--entered  .games-search-filter-item ');
  105 |             if (!filterProviders){
  106 |                 throw new Error('Providers not found in the filter, something went wrong, better debug')
  107 |             }
  108 |
  109 |             const arrayOfHTML = Array.from(filterProviders)
  110 |
  111 |             const textArray:Array<string> = []
  112 |
  113 |             for (let element of arrayOfHTML){
  114 |                 const text = (element as HTMLElement).innerText
  115 |                 textArray.push(text)
  116 |             }
  117 |             return textArray
  118 |         })
  119 |     }
  120 |
  121 |     async getListOfFilterCategories(): Promise<Array<string>> {
  122 |         return await this.page.evaluate(() => {
  123 |             const filterCategories = document.querySelectorAll('.games-search-filter-block__header--active + div.collapse.collapse--entered .games-search-filter-block__values .games-search-filter-item');
  124 |                 if (!filterCategories){
  125 |                     throw new Error('Providers not found in the filter, something went wrong, better debug')
  126 |                 }
  127 |
  128 |                 const arrayOfHTML = Array.from(filterCategories)
  129 |
  130 |                 const textArray:Array<string> = []
  131 |
  132 |                 for (let element of arrayOfHTML){
  133 |                     const text = (element as HTMLElement).innerText
  134 |                     textArray.push(text)
  135 |                 }
  136 |                 return textArray
  137 |         })
  138 |     }
  139 |
  140 |     async clickDepositButton(): Promise<DepModal> {
  141 |         await this.depositButton.click()
  142 |         return new DepModal(this.page)
  143 |     }
  144 |
  145 |     async clickOnGameItem(){
  146 |         await this.gameItem.hover()
  147 |         await this.gameItem.click()
  148 |     }
  149 |
  150 |     async openCurrenciesDropdown(){
```