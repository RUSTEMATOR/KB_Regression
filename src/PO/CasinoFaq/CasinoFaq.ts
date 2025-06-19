import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage/BasePage";
import { axeScan } from "axe-playwright-report";

export default class CasinoFaq extends BasePage {

    private body: Locator

    constructor(page: Page) {
        super(page);

        this.body = page.locator('.help-center__data')
    }

    
    async getBodyText(): Promise<string> {
        return await this.body.innerText();
    }

    
}