import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class VipPage extends BasePage {
    private currentStatusImage: Locator;
    private vipPageLogo: Locator;

    constructor(page: Page) {
        super(page);

        this.vipPageLogo = page.locator('.new-vip-page__title')
        this.currentStatusImage = page.locator('.vip-page-head__img')
    }


    get getCurrentStatusImage(): Locator {
        return this.currentStatusImage;
    }

    get getVipPageLogo(): Locator {
        return this.vipPageLogo;
    }
}