import BaseComponent from "./BaseComponent";
import {Locator, Page} from "@playwright/test";

export default class Header extends BaseComponent {
    private header: Page
    private burgerMenuOpenButton: Locator
    private headerLogo: Locator
    private search: Locator
    private searchField: Locator
    private createAccountButton: Locator
    private signInButton: Locator
    private langDropdown: Locator



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

    async clickSignIn(): Promise<void> {
        await this.signInButton.click()
    }


}