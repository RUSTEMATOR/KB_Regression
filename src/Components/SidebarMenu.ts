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
}