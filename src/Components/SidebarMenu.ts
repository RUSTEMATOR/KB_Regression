import BaseComponent from "./BaseComponent";
import {Locator, Page} from "@playwright/test";
import PromoPage from "../PO/PromoPage/PromoPage";

export default class SidebarMenu extends BaseComponent {
    private sidebarMenu: Locator
    private promotionsTab: Locator
    private tournamentsTab: Locator
    private vipTab: Locator
    private bankingTab: Locator
    private legendTab: Locator
    private appBtn: Locator
    private userInfoBlock: Locator
    private compointsBlock: Locator


    constructor(page: Page) {
        super(page);

        this.sidebarMenu = page.locator('.bar-modal__container')
        this.promotionsTab = page.locator('#bar #burger_promotions_btn')
        this.tournamentsTab = page.locator('#bar #burger_tournaments_btn ')
        this.vipTab = page.locator('#bar #burger_vip_btn')
        this.bankingTab = page.locator('#bar #burger_banking_btn')
        this.legendTab = page.locator('#bar #burger_legend_btn')
        this.appBtn = page.getByRole('link', { name: ' Mobile app' })
        this.userInfoBlock = page.locator('#bar').locator('.select-user-menu__section')
        this.compointsBlock = page.locator('#bar').locator('.side-bar')
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

    //accessors
    get getSidebarMenu(): Locator {
        return this.sidebarMenu
    }

    get getPromotionsTab(): Locator {
        return this.promotionsTab
    }

    get getTournamentsTab(): Locator {
        return this.tournamentsTab
    }

    get getVipTab(): Locator {
        return this.vipTab
    }

    get getBankingTab(): Locator {
        return this.bankingTab
    }

    get getLegendTab(): Locator {
        return this.legendTab
    }

    get getAppBtn(): Locator {
        return this.appBtn
    }

    get getUserInfoBlock(): Locator {
        return this.userInfoBlock
    }

    get getCompointsBlock(): Locator {
        return this.compointsBlock
    }
}