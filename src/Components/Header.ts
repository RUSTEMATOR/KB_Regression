import BaseComponent from "./BaseComponent";
import {Locator, Page} from "@playwright/test";
import SignInModal from "../PO/MainPage/Component/SignInModal";

export default class Header extends BaseComponent {
    private header: Page
    private burgerMenuOpenButton: Locator
    private headerLogo: Locator
    private search: Locator
    private searchField: Locator
    private createAccountButton: Locator
    private signInButton: Locator
    private langDropdown: Locator
    private langDropdownItem: (language: string) => Locator



    constructor(page: Page) {
        super(page);

        this.header = page;
        this.burgerMenuOpenButton = page.locator('#burger_menu_btn')
        this.headerLogo = page.locator('.header__logo--desktop')
        this.search = page.locator('.header__search')
        this.searchField = page.locator('#games-search')
        this.createAccountButton = page.locator('#header_create_acc_btn')
        this.signInButton = page.locator('#header_log_in_btn')
        this.langDropdown = page.locator('#lang_dropdown')
        this.langDropdownItem = (language: string) => page.locator('.select-language-icons-with-code__link').filter({hasText: language})
    }

    async openBurgerMenu(): Promise<void> {
        await this.burgerMenuOpenButton.click()
    }

    async clickHeaderLogo(): Promise<void> {
        await this.headerLogo.click()
    }

    async searchFor(searchTerm: string): Promise<void> {
        await this.search.click()
        await this.searchField.fill(searchTerm)
    }

    async clickCreateAccount(): Promise<void> {
        await this.createAccountButton.click()
    }

    async clickSignIn(): Promise<SignInModal> {
        await this.signInButton.click()
        return new SignInModal(this.header)
    }

    async openLangDropdown(): Promise<void> {
        await this.langDropdown.click()
    }

    async changeLanguageTo(language: string): Promise<void> {
        await this.openLangDropdown()
        await this.langDropdownItem(language).click()
    }
}


"info@kte.kmda.gov.ua"