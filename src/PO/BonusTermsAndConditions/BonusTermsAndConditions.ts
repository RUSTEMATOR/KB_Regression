import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage/BasePage";

export default class BonusTermsAndConditions extends BasePage {
    private bonusTermsAndConditionsTitle: Locator

    constructor(page: Page){
        super(page);

        this.bonusTermsAndConditionsTitle = page.locator('h1').filter({hasText: 'BONUS TERMS & CONDITIONS'})
    }



    get getBonusTermsAndConditionsTitle(): Locator {
        return this.bonusTermsAndConditionsTitle
    }
}