import { Locator, Page } from "@playwright/test";
import BasePage from "../BasePage/BasePage";

type BonusType = 'realMoney' | 'kingsCoins';

export default class BonusStore extends BasePage {
    constructor(page: Page) { 
        super(page);
    }

   
    get signInButton() {
    return this.page.getByRole('main').getByRole('link', { name: 'sign in' });
    }


    get createAccountButton() {
    return this.page.getByRole('main').getByRole('link', { name: 'Create account' });
    }


    get emailAddressTextbox() {
    return this.page.getByRole('textbox', { name: 'your e-mail address' });
    }


    get createAccountEmailTextbox() {
    return this.page.getByRole('textbox', { name: 'Email' });
    }

    get realMoneyButton() {
    return this.page.getByRole('button', { name: 'Real Money' });
    }

    get kingsCoinsButton() {
    return this.page.getByRole('button', { name: "King’s Coins" });
    }

    get cashTab() {
    return this.page.locator('.block-page-filter-tabs__item').filter({ hasText: 'Cash' });
    }


    get wheelTab() {
    return this.page.locator('.block-page-filter-tabs__item').filter({ hasText: 'Wheel' });
    }


    get fsTab() {
    return this.page.locator('.block-page-filter-tabs__item').filter({ hasText: 'FS' });
    }

    get tipsTab() {
    return this.page.locator('.block-page-filter-tabs__item').filter({ hasText: 'Tips' });
    }
    
    get bonusCardReal(): Locator {
        return this.page.locator('[data-attr="bonus_card_rm"]');
    }

    get bonusCardKingsCoins(): Locator {
        return this.page.locator('[data-attr="bonus_card_kc"]');
    }

    get fiatCard(): Locator {
        return this.page.locator('.Block--page-bonuses-store-card-money-fiat');
    }

    get termsAndConditionsTitle(): Locator {
        return this.page.locator('h2').filter({ hasText: 'TERMS&CONDITIONS' });
    }

    async graduallyScrollToBottom() {
        const distance = 100;
        const delay = 100; // milliseconds

        let scrollHeight = await this.page.evaluate(() => document.body.scrollHeight);

        while (scrollHeight > 0) {
            await this.page.evaluate(() => window.scrollBy(0, 100));
            await this.page.waitForTimeout(delay);
            scrollHeight -= distance;
        }
    }

    async gatherBonusInfo(bonusType: BonusType ) {
        const bonusInfo: object[] = [];
        let title: string | null;
        let price: string | null;
        await this.page.waitForTimeout(3000);
        await this.graduallyScrollToBottom();
        switch (bonusType) {
            case 'realMoney': {
                const bonusCardsReal = await this.bonusCardReal.all();
                const count = bonusCardsReal.length;
                for (let i = 0; i < count; i++) {
                    const card = bonusCardsReal[i];
                    const titleLocator = card.locator('[data-attr="bonus_title_rm"]');
                    const priceLocator = card.locator('[data-attr="bonus_description_rm"]');

                    if (!await titleLocator.isVisible()) {
                        title = null;
                    } else {
                        title = await titleLocator.innerText();
                    }

                    if (!await priceLocator.isVisible()) {
                        price = null;
                    } else {
                        price = await priceLocator.innerText();
                    }

                    bonusInfo.push({ title, price });
                }
                break;
            }
            case 'kingsCoins': {
                const bonusCardsCoins = await this.bonusCardKingsCoins.all();
                const countCoins = bonusCardsCoins.length;
                for (let i = 0; i < countCoins; i++) {
                    const card = bonusCardsCoins[i];
                    const titleLocator = card.locator('[data-attr="bonus_title_kc"]');
                    const priceLocator = card.locator('[data-attr="bonus_description_kc"]');

                    if (!await titleLocator.isVisible()) {
                        title = null;
                    } else {
                        title = await titleLocator.innerText();
                    }

                    if (!await priceLocator.isVisible()) {
                        price = null;
                    } else {
                        price = await priceLocator.innerText();
                    }

                    bonusInfo.push({ title, price });
                }
                if (await this.fiatCard.isVisible()) {
                    const fiatTitle = await this.fiatCard.locator('.Block--page-bonuses-store-card-money-fiat__title').innerText();
                    const fiatPrice = await this.fiatCard.locator('.Block--page-bonuses-store-card-money-fiat__description').innerText();
                    bonusInfo.push({ fiatTitle, fiatPrice });
                } else {
                    console.warn('Fiat card is not visible');
                }
                break;
            }
        }

        return bonusInfo;
    }
}