import SignInModal from "../../../src/PO/MainPage/Component/SignInModal";
import SignUpModal from "../../../src/PO/MainPage/Component/SignUpModal";
import BonusStore from "../../../src/PO/BonusStore/BonusStore";
import { LINKS } from "../../../src/Data/Links/Links";
import { test, expect } from "@playwright/test";
import { USERS } from "../../../src/Data/Users/users";
import { executionAsyncId } from "async_hooks";
import { CITIZEN_BONUSES_REAL } from "../../../src/Data/bonusStoreExpectedResults/citizenBonuses";


test.describe.serial('Bonus Store', () => {
    
    let signInModal: SignInModal
    let signUpModal: SignUpModal
    let bonusStore: BonusStore

    test.beforeEach(async ({ page }) => {
        signInModal = new SignInModal(page)
        signUpModal = new SignUpModal(page)
        bonusStore = new BonusStore(page)
        await bonusStore.navTo(LINKS.bonusStore)
        await bonusStore.clickAcceptCookies()
    });
    test('Verify Sign in button availability', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        expect(signInModal.getEmailInput).toBeVisible()
    });

    test('Verify Sign up button availability', async () => {
        await bonusStore.clickOn(bonusStore.createAccountButton)
        expect(signUpModal.getEmailInput).toBeVisible()
    });

    test('Verify bonus availability for New Citizen user real money', async () => {
            await bonusStore.clickOn(bonusStore.signInButton)
            await signInModal.fillEmail(USERS.citizenUser.email)
            await signInModal.fillPassword(USERS.citizenUser.password)
            await signInModal.clickSignIn()
            await bonusStore.clickOn(bonusStore.realMoneyButton)

            await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
            const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
            expect(bonusInfo).toEqual(CITIZEN_BONUSES_REAL)
    })

    test.only('Verify bonus availability for New Citizen user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(USERS.citizenUser.email)
        await signInModal.fillPassword(USERS.citizenUser.password)
        await signInModal.clickSignIn()
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await bonusStore.bonusCardKingsCoins.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        console.log(bonusInfo);
        // expect(bonusInfo).toEqual(CITIZEN_BONUSES_KINGS_COINS)
    })
});