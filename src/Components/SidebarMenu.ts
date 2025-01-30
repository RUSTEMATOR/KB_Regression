import BaseComponent from "./BaseComponent";
import {Locator, Page} from "@playwright/test";

export default class SidebarMenu extends BaseComponent {
    private sidebarMenu: Page
    private promotionsTab: Locator
    private tournamentsTab: Locator
    private vipTab: Locator
    private bankingTab: Locator
    private legendTab: Locator
    private appBtn: Locator

    constructor(page: Page) {
        super(page);

        this.sidebarMenu = page;
        this.promotionsTab = page.locator('#burger_promotions_btn')
        this.tournamentsTab = page.locator('#burger_tournaments_btn ')
        this.vipTab = page.locator('#burger_vip_btn')
        this.bankingTab = page.locator('#burger_banking_btn')
        this.legendTab = page.locator('#burger_legend_btn')
        this.appBtn = page.locator('div > a.header-left-desktop__app')
    }

    async openPromotionsTab(): Promise<void> {
        await this.promotionsTab.click()
    }

    async openTournamentsTab(): Promise<void> {
        await this.tournamentsTab.click()
    }

    async openVipTab(): Promise<void> {
        await this.vipTab.click()
    }

    async openBankingTab(): Promise<void> {
        await this.bankingTab.click()
    }

    async openLegendTab(): Promise<void> {
        await this.legendTab.click()
    }

    async clickAppBtn(): Promise<void> {
        await this.appBtn.click()
    }
}