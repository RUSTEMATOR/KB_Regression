import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class CasinoDictionary extends BasePage {
    private pageTitle: Locator

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('h1').filter({hasText: 'KING’S DICTIONARY'})
    }


    get getPageTitle() {
        return this.pageTitle
    }
}