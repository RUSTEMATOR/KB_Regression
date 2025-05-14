import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class PromoPage extends BasePage{

    public defaultPromoIndex: number = 2

    private promoTab: Locator
    private vipTab: Locator
    private tournamentsTab: Locator
    private promoCard: Locator
    private tournamentCard: Locator
    private showMoreButton: Locator
    private infoButton: (index: number) => Locator
    private getItButton: (index: number) => Locator
    private tournamentShowMoreButton: (index: number) => Locator



    constructor(page: Page) {
        super(page);

        this.promoTab = page.locator('#promo_promo_tab')
        this.vipTab = page.locator('#promo_promo_vip_tab')
        this.tournamentsTab = page.locator('#promo_tournaments_tab')
        this.promoCard = page.locator('.promo-item')
        this.tournamentCard = page.locator('.tourn-item')
        this.showMoreButton = page.locator('.section-header__button')
        this.infoButton = (index) => page.locator(`.promo-item__info:nth-of-type(${index}) `)
        this.getItButton = (index) => page.locator(`.promo-item__button:nth-of-type(${index})`)
        this.tournamentShowMoreButton = (index) => page.locator(`.a.tourn-item__button.link-btn:nth-of-type(${index})`)
    }

    async openPromoTab(): Promise<void> {
        await this.promoTab.click()
    }

    async openVipTab(): Promise<void> {
        await this.vipTab.click()
    }

    async openTournamentsTab(): Promise<void> {
        await this.tournamentsTab.click()
    }


    async getPromoCardNumber(): Promise<number>{
        return await this.promoCard.count()
    }

    async getTournamentCardNumber(): Promise<number>{
        return await this.tournamentCard.count()
    }

    async openInfo(index: number): Promise<void> {
        await this.infoButton(index).click()
    }

    async openPromo(index: number): Promise<void> {
        await this.getItButton(index).click()
    }

    async openTournament(index: number): Promise<void> {
        await this.tournamentShowMoreButton(index).click()
    }

    async clickShowMore(): Promise<void> {
        await this.showMoreButton.click()
    }


    get getPromoCard(): Locator {
        return this.promoCard
    }

    get getTournamentCard(): Locator {
        return this.tournamentCard
    }


}