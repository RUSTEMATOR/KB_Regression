import BaseComponent from "../../../Components/BaseComponent";
import {Locator, Page} from "@playwright/test";

export default class PromoSection extends BaseComponent {
    private promoCards: Locator

    private promoCard: (index: number) => Locator;
    private promoInfoButton: (index: number) => Locator;

    constructor(page: Page){
        super(page);

        this.promoCards = this.page.locator('.promo-item');

        this.promoCard = (index: number) => this.page.locator(`.promo-item:nth-of-type(${index})`)
        this.promoInfoButton = (index) => this.page.locator(`.promo-item__info:nth-of-type(${index})`)
    }

    async getNumberOfCards(): Promise<number> {
        return await this.promoCards.count()
    }

    async checkIfPromoCardIsActive(index: number): Promise<boolean> {

        return await this.page.evaluate((i) => {
            const promoCard = document.querySelector(`.promo-item:nth-of-type(${i})`);
            if(promoCard) {

                const isBlurred = promoCard.classList.contains('promo-item__active')

                return !isBlurred;

            } else {
                throw new Error(`No promo cards found on the page`)
            }
        }, index)
    }

    async clickOnInfoButton(index: number): Promise<void> {
        await this.promoInfoButton(index).click()
    }

}