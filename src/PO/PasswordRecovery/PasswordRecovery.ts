import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export class PasswordRecovery extends BasePage {
    private didntRecieveInstructionsLink: Locator

    constructor(page: Page){
        super(page)

        this.didntRecieveInstructionsLink = page.locator('.auth-form__instruction-link:nth-of-type(1)')
    }

    async clickDidntRecieveInstructions(): Promise<void> {
        await this.didntRecieveInstructionsLink.click()
    }


    get getDidntRecieveInstructionsLink(): Locator {
        return this.didntRecieveInstructionsLink
    }

}