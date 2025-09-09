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
    return this.page.getByText('Cash');
    }


    get wheelTab() {
    return this.page.getByText('Wheel');
    }


    get fsTab() {
    return this.page.getByText('FS');
    }
    
    get bonusCardReal(): Locator {
        return this.page.locator('.Block--product-store-list__card');
    }

    get bonusCardKingsCoins(): Locator {
        return this.page.locator('.block-page-bonuses-store__card');
    }

    async gatherBonusInfo(bonusType: BonusType ) {
        const bonusInfo: object[] = [];


        switch (bonusType) {
            case 'realMoney':
                const bonusCardsReal = await this.bonusCardReal.all();
                const count = bonusCardsReal.length;
                for (let i = 0; i < count; i++) {

                    const card = bonusCardsReal[i];
                    const title = await card.locator('.Block--product-store-list__title').innerText();
                    const price = await card.locator('p.Block--product-store-list__description').innerText();
                    bonusInfo.push({ title, price });
                }
                break;
            case 'kingsCoins':
                   const bonusCardsCoins = await this.bonusCardKingsCoins.all();
                    const countCoins = bonusCardsCoins.length;
                for (let i = 0; i < countCoins; i++) {
                    const card = bonusCardsCoins[i];
                    const title = await card.locator('.Block--product-store-list__title').innerText();
                    const price = await card.locator('p.Block--product-store-list__description').innerText();
                    bonusInfo.push({ title, price });
                }
                break;
        }

        return bonusInfo;
}
}