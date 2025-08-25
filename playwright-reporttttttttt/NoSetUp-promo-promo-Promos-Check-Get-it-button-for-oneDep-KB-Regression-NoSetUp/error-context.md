# Test info

- Name: Promos >> Check "Get it" button for oneDep
- Location: C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\promo\promo.spec.ts:106:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.promo-item').first().locator(locator('.promo-item__button'))
    - locator resolved to <button data-testid="Button__default" class="promo-item__button btn btn--primary">Get it</button>
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
    51 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="modal__backdrop"></div> from <div id="modal-root">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

    at PromoPage.clickOnGetItButton (C:\Users\Rustemator\Desktop\KB_Regression\src\PO\PromoPage\PromoPage.ts:85:56)
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\promo\promo.spec.ts:120:37
    at C:\Users\Rustemator\Desktop\KB_Regression\tests\NoSetUp\promo\promo.spec.ts:119:28
```

# Test source

```ts
   1 | import { axeScan } from "axe-playwright-report";
   2 | import BasePage from "../BasePage/BasePage";
   3 | import {Locator, Page} from "@playwright/test";
   4 |
   5 | export default class PromoPage extends BasePage{
   6 |
   7 |     public defaultPromoIndex: number = 2
   8 |
   9 |     private promoTab: Locator
   10 |     private vipTab: Locator
   11 |     private tournamentsTab: Locator
   12 |     private promoCard: Locator
   13 |     private tournamentCard: Locator
   14 |     private showMoreButton: Locator
   15 |     private trounShowMoreButton: Locator
   16 |     private getItPromoButton: Locator
   17 |     private promoModal: Locator
   18 |     private closeButton: Locator
   19 |     private infoButton: Locator
   20 |     private promoCardDepositButton: Locator
   21 |     private depositModal: Locator
   22 |
   23 |     private tournamentShowMoreButton: (index: number) => Locator
   24 |
   25 |
   26 |
   27 |     constructor(page: Page) {
   28 |         super(page);
   29 |
   30 |         this.promoTab = page.locator('#promo_promo_tab')
   31 |         this.vipTab = page.locator('#promo_promo_vip_tab')
   32 |         this.tournamentsTab = page.locator('#promo_tournaments_tab')
   33 |         this.promoCard = page.locator('.promo-item')
   34 |         this.tournamentCard = page.locator('.tourn-item')
   35 |         this.showMoreButton = page.locator('.section-header__button')
   36 |         this.trounShowMoreButton = page.locator('.tourn-item__button')
   37 |         this.getItPromoButton = page.locator('.promo-item__button')
   38 |         this.promoModal = page.locator('.promo-modal')
   39 |         this.closeButton = page.locator('.modal__close-icon')
   40 |         this.infoButton = page.locator('.btn--info')
   41 |         this.promoCardDepositButton = page.locator('.promo-modal__button.deposit-button')
   42 |         this.depositModal = page.locator('#fast-deposit')
   43 |
   44 |         this.tournamentShowMoreButton = (index) => page.locator(`.a.tourn-item__button.link-btn:nth-of-type(${index})`)
   45 |
   46 |     }
   47 |
   48 |     
   49 |     async openPromoTab(): Promise<void> {
   50 |         await this.promoTab.click()
   51 |     }
   52 |
   53 |     
   54 |     async openVipTab(): Promise<void> {
   55 |         await this.vipTab.click()
   56 |     }
   57 |
   58 |     async openTournamentsTab(): Promise<void> {
   59 |         await this.tournamentsTab.click()
   60 |     }
   61 |
   62 |
   63 |     async getPromoCardNumber(): Promise<number>{
   64 |         return await this.promoCard.count()
   65 |     }
   66 |
   67 |     async getTournamentCardNumber(): Promise<number>{
   68 |         return await this.tournamentCard.count()
   69 |     }
   70 |
   71 |
   72 |     async openTournament(index: number): Promise<void> {
   73 |         await this.tournamentShowMoreButton(index).click()
   74 |     }
   75 |
   76 |     async clickShowMore(): Promise<void> {
   77 |         await this.showMoreButton.click()
   78 |     }
   79 |
   80 |     async clickTournShowMore(): Promise<void> {
   81 |         await this.trounShowMoreButton.click()
   82 |     }
   83 |
   84 |     async clickOnGetItButton(promoCard: Locator): Promise<void> {
>  85 |         await promoCard.locator(this.getItPromoButton).click()
      |                                                        ^ Error: locator.click: Target page, context or browser has been closed
   86 |     }
   87 |
   88 |     async clickOnCloseButton(): Promise<void> {
   89 |         await this.closeButton.click()
   90 |     }
   91 |
   92 |     async clickOnInfoButton(promoCard: Locator): Promise<void> {
   93 |         await promoCard.locator(this.infoButton).click()
   94 |     }
   95 |
   96 |     async clickOnPromoCardDepositButton(): Promise<void> {
   97 |         await this.promoCardDepositButton.click()
   98 |     }
   99 |
  100 |     async getaAndSortPromos(): Promise<{ activePromos: Array<Locator>; inactivePromos: Array<Locator> }> {
  101 |         let activePromos: Array<Locator> = []
  102 |         let inactivePromos: Array<Locator> = []
  103 |
  104 |         const allPromos: Array<Locator> = await this.getPromoCard.all()
  105 |
  106 |             for (let promo of allPromos){
  107 |                 const promoClass = await promo.getAttribute('class')
  108 |
  109 |                 if (promoClass?.includes('promo-item--disabled')){
  110 |                     inactivePromos.push(promo)
  111 |                 } else {
  112 |                     activePromos.push(promo)
  113 |                 }
  114 |             }
  115 |
  116 |         return {activePromos, inactivePromos}
  117 |     }
  118 |
  119 |     get getPromoCard(): Locator {
  120 |         return this.promoCard
  121 |     }
  122 |
  123 |     get getTournamentCard(): Locator {
  124 |         return this.tournamentCard
  125 |     }
  126 |
  127 |     get getShowMoreButton(): Locator {
  128 |         return this.showMoreButton
  129 |     }
  130 |
  131 |     get getTournShowMoreButton(): Locator {
  132 |         return this.trounShowMoreButton
  133 |     }
  134 |
  135 |     get getPromoModal(): Locator {
  136 |         return this.promoModal
  137 |     }
  138 |
  139 |     get getCloseButton(): Locator {
  140 |         return this.closeButton
  141 |     }
  142 |
  143 |     get getPromoDepositButton(): Locator {
  144 |         return this.promoCardDepositButton
  145 |     }
  146 |
  147 | }
```