import test, {expect} from "@playwright/test";
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import {MAIN_USER} from "../../src/Data/Users/mainUser";

test.describe('Main page', () => {
        test.describe('Promo Section', () => {
            let mainPage: MainPage

            test.beforeEach(async ({page}) => {
            mainPage = new MainPage(page)


            await test.step('Navigate to main page', async () => {
                await mainPage.navTo(LINKS.Main)
                await mainPage.clickAcceptCookies()
            })


            await test.step('Sign in', async () => {
                const signInModal = await mainPage.header.clickSignIn()
                await signInModal.fillEmail(MAIN_USER.email)
                await signInModal.fillPassword(MAIN_USER.password)
                await signInModal.clickSignIn()
            })
        })


        test.only('Check "More info" button on bonus offer card', async () => {
            let numberOfPromoCards: number
            await test.step('Get number of promo cards on the page', async () => {
                numberOfPromoCards = await mainPage.promoSection.getNumberOfCards()
            })

            await test.step('Open info pop-up for every active card', async () => {
                for (let i = 1; i <= numberOfPromoCards; i++) {
                    const isActive = await mainPage.promoSection.checkIfPromoCardIsActive(i)

                    if (isActive) {
                        await mainPage.promoSection.clickOnInfoButton(i)

                    }
                }
            })
        })
    })
})