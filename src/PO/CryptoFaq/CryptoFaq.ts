import { axeScan } from "axe-playwright-report";
import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class CryptoFaq extends BasePage {
    private pageTitle:Locator
    private collapseBlocks: Locator

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('h1').filter({hasText: 'CRYPTO CURRENCIES FAQ'})
        this.collapseBlocks = page.locator('p + .questions-list')


    }

    @axeScan()
    async getCollapseBlocksText(): Promise<string> {
        return this.collapseBlocks.innerText()
    }


    get getPageTitle() {
        return this.pageTitle
    }
}