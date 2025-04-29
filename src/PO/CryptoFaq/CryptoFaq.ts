import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class CryptoFaq extends BasePage {
    private pageTitle:Locator

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('h1').filter({hasText: 'CRYPTO CURRENCIES FAQ'})


    }


    get getPageTitle() {
        return this.pageTitle
    }
}