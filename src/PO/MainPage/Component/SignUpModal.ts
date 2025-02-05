import BaseComponent from "../../../Components/BaseComponent";
import {Locator, Page} from "@playwright/test";

export default class SignUpModal extends BaseComponent{
    private emailInput: Locator
    private passwordInput: Locator
    private countryDropdown: Locator
    private countryDropdownItem: (country: string) => Locator
    private currencyDropdown: Locator
    private currencyDropdownItem: (currency: string) => Locator
    private promoCheckbox: Locator
    private ageCheckbox: Locator
    private crossSaleCheckbox: Locator
    private creacteAccountButton: Locator
    private signInLink: Locator
    private googleRegBtn: Locator
    private closeButton: Locator

    constructor(page: Page) {
        super(page);

        this.emailInput = page.locator('#reg_modal_email_input')
        this.passwordInput = page.locator('#reg_modal_password_input')
        this.countryDropdown = page.locator('#reg_modal_country_dropdown')
        this.countryDropdownItem = (country: string) => page.locator('#reg_modal_country_dropdown-menu .select__option').filter({hasText: country})
        this.currencyDropdown = page.locator('#reg_modal_currency_dropdown')
        this.currencyDropdownItem = (currency: string) => page.locator('#reg_modal_currency_dropdown .select__option').filter({hasText: currency})
        this.promoCheckbox = page.locator('[for=\'reg_modal_promo_checkbox\'] .checkbox__point')
        this.ageCheckbox = page.locator('[for=\'reg_modal_age_checkbox\'] .checkbox__point')
        this.crossSaleCheckbox = page.locator('[for=\'reg_modal_cross_sale_checkbox\'] .checkbox__point')
        this.creacteAccountButton = page.locator('#reg_modal_submit_btn')
        this.signInLink = page.locator('#reg_modal_sign_in_btn')
        this.googleRegBtn = page.locator('.auth-providers__icon').filter({hasText: 'Continue with Google'})
        this.closeButton = page.locator('#sign-up .modal__close-button')
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email)
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password)
    }

    async selectCountry(country: string): Promise<void> {
        await this.countryDropdown.click()
        await this.countryDropdownItem(country).click()
    }

    async selectCurrency(currency: string): Promise<void> {
        await this.currencyDropdown.click()
        await this.currencyDropdownItem(currency).click()
    }

    async checkPromoCheckbox(): Promise<void> {
        await this.promoCheckbox.click()
    }

    async checkAgeCheckbox(): Promise<void> {
        await this.ageCheckbox.click()
    }

    async checkCrossSaleCheckbox(): Promise<void> {
        await this.crossSaleCheckbox.click()
    }

    async clickCreateAccountButton(): Promise<void> {
        await this.creacteAccountButton.click()
    }

    async clickSignInLink(): Promise<void> {
        await this.signInLink.click()
    }

    async clickGoogleRegBtn(): Promise<void> {
        await this.googleRegBtn.click()
    }
    
    async closeSignUpModal(): Promise<void> {
        await this.closeButton.click()
    }
}