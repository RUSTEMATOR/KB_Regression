import BaseComponent from "../../../Components/BaseComponent";
import {Locator, Page} from "@playwright/test";

export default class MainSliderRegistrationForm extends BaseComponent {
    private mainSliderRegistrationForm: Page
    private emailInput: Locator
    private passwordInput: Locator
    private countryDropdown: Locator
    private currencyDropdown: Locator
    private promoCheckbox: Locator
    private ageCheckbox: Locator
    private crossSaleCheckbox: Locator
    private createAccountButton: Locator
    private signInLink: Locator


    constructor(page: Page) {
        super(page);

        this.mainSliderRegistrationForm = page

        this.emailInput = page.locator('#main_email_input')
        this.passwordInput = page.locator('#main_password_input')
        this.countryDropdown = page.locator('.registration-form-nomodal__country-select')
        this.currencyDropdown = page.locator('.registration-form-nomodal__currency-select')
        this.promoCheckbox = page.locator('#promos_checkbox')
        this.ageCheckbox = page.locator('#age_checkbox')
        this.crossSaleCheckbox = page.locator('#cross_sale_checkbox')
        this.createAccountButton = page.locator('#main_create_acc_btn')
        this.signInLink = page.locator('.registration-form-nomodal__link')
    }
}

