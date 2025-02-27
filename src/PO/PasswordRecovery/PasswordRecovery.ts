import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";
import {MAIN_USER} from "../../Data/Users/mainUser";

export class PasswordRecovery extends BasePage {
    public notificationText: string

    private didntRecieveInstructionsLink: Locator
    private resetPasswordButton: Locator
    private passwordRecoveryNotification: Locator
    private emailInput: Locator


    constructor(page: Page){
        super(page)

        this.notificationText = 'If your email is within our database, an email with instructions on how to recover your password will be sent in a few minutes'

        this.emailInput = page.locator('.input__native')
        this.didntRecieveInstructionsLink = page.locator('.auth-form__instruction-link:nth-of-type(1)')
        this.resetPasswordButton = page.locator('.btn--danger')
        this.passwordRecoveryNotification = page.locator('.notification__title')
    }

    async clickDidntRecieveInstructions(): Promise<void> {
        await this.didntRecieveInstructionsLink.click()
    }

    async clickResetPassword(): Promise<void> {
        await this.resetPasswordButton.click()
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email)
    }

    get getEmailInput(): Locator {
        return this.emailInput
    }


    get getDidntRecieveInstructionsLink(): Locator {
        return this.didntRecieveInstructionsLink
    }

    get getResetPasswordButton(): Locator {
        return this.resetPasswordButton
    }

    get getPasswordRecoveryNotification(): Locator {
        return this.passwordRecoveryNotification
    }

    get getNotificationText(): string {
        return this.notificationText
    }
}

