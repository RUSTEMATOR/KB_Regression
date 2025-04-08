import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage/BasePage"

export default class PrivacyPolicy extends BasePage {
    private privacyPolicyTitle: Locator

    constructor(page: Page) {
        super(page);

        this.privacyPolicyTitle = page.locator('h1')
    }

    get PrivacyPolicyTitle(): Locator {
        return this.privacyPolicyTitle
    }

    

}