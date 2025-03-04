import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import {MAIN_USER} from "../../src/Data/Users/mainUser";
import SignInModal from "../../src/PO/MainPage/Component/SignInModal";
import SidebarMenu from "../../src/Components/SidebarMenu";
import PromoPage from "../../src/PO/PromoPage/PromoPage";
import playwrightConfig from "../../playwright.config";



test.describe('Burger menu', () => {
    let mainPage: MainPage
    let signInModal: SignInModal
    let burgerMenu: SidebarMenu
    let promoPage: PromoPage


    test.beforeEach(async ({page}) => {

        mainPage = new MainPage(page)
        promoPage = new PromoPage(page)

        await test.step('Navigate to the main page', async () => {
            await mainPage.navTo(LINKS.Main)
            await mainPage.clickAcceptCookies()
        })

        await test.step('Login', async () => {
            signInModal = await mainPage.header.clickSignIn()

            await signInModal.fillEmail(MAIN_USER.email)
            await signInModal.fillPassword(MAIN_USER.password)
            await signInModal.clickSignIn()
            await mainPage.waitForSelector(mainPage.header.getDepositButton)
        })

        await test.step('Open burger menu', async () => {
            burgerMenu = await mainPage.clickOnSidebarButton()
        })
    })

    test('Burger menu', async () => {
        await test.step('Check sidebar is open', async () => {
            await expect(burgerMenu.getSidebarMenu).toBeVisible()
        })
    })

    test.only('Check "Promotions" button', async () => {

        await test.step('Click on the promotions button', async () => {
            await burgerMenu.openPromotionsTab()
        })

        await test.step('Check link of the page', async () =>{
            const actualUrl = await promoPage.getPageUrl()

            expect(actualUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.Promo}`)
        })

        await test.step('Check promo card to be visible', async () => {
            await expect(promoPage.getPromoCard).toBeVisible()
        })
    })

})