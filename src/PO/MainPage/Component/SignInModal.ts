import {Locator, Page} from "@playwright/test";
import BaseComponent from "../../../Components/BaseComponent";

export default class SignInModal extends BaseComponent {
    private emailInput: Locator
    private passwordInput: Locator
    private signInButton: Locator
    private forgetPasswordLink: Locator
    private loginWithGoogleButton: Locator
    private createAccountButton: Locator
    private signInModalForm: Locator


    constructor(page: Page) {
        super(page);

        this.emailInput = page.locator('#login_modal_email_input')
        this.passwordInput = page.locator('#login_password_input')
        this.signInButton = page.locator('#submit_login')
        this.forgetPasswordLink = page.locator('#forgot_pass_btn')
        this.loginWithGoogleButton = page.locator('.login-form__social .auth-providers__icon').filter({hasText: 'Continue with Google'})
        this.createAccountButton = page.locator('#login_modal_reg_btn')
        this.signInModalForm = page.locator('.sign-in-page')
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email)
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password)
    }

    async clickSignIn(): Promise<void> {
        await this.signInButton.click()
    }

    async clickForgetPassword(): Promise<void> {
        await this.forgetPasswordLink.click()
    }

    async clickLoginWithGoogle(): Promise<void> {
        await this.loginWithGoogleButton.click()
    }

    async clickCreateAccount(): Promise<void> {
        await this.createAccountButton.click()
    }

    get getSignInModalForm(): Locator {
        return this.signInModalForm;
    }
}