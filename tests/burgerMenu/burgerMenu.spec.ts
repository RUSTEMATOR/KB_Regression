import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import {MAIN_USER} from "../../src/Data/Users/mainUser";
import SignInModal from "../../src/PO/MainPage/Component/SignInModal";
import SidebarMenu from "../../src/Components/SidebarMenu";
import PromoPage from "../../src/PO/PromoPage/PromoPage";
import playwrightConfig from "../../playwright.config";
import ProfilePage from "../../src/PO/ProfilePage";
import {playerMenuButtons} from "../../src/Data/Constants/playerMenuButtons";



test.describe('Burger menu', () => {
    let mainPage: MainPage
    let signInModal: SignInModal
    let burgerMenu: SidebarMenu
    let promoPage: PromoPage
    let profilePage: ProfilePage


    test.beforeEach(async ({page}) => {

        mainPage = new MainPage(page)
        promoPage = new PromoPage(page)
        profilePage = new ProfilePage(page)

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

    test('Check "Promotions" button', async () => {

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

    test('Account Panel', async () => {

        await test.step('Scrap user info and compare the result', async ()=> {
            const userInfo = await burgerMenu.getUserInfo()
            const expectedUser = () => {
                return {
                    username: MAIN_USER.username,
                    currentStatus: MAIN_USER.status,
                    nextStatus: MAIN_USER.nextStatus,
                    statusPoints: MAIN_USER.statusPoints,
                    statusBar: MAIN_USER.progressBarState
                }
            }

            expect(userInfo).toEqual(expectedUser())
        })
    })

    test('Dropdown Functionality in account block', async () => {

        await test.step('Click on chevrone button', async () => {
            await burgerMenu.unwrapPlayerPanel()
        })

        await test.step('Check class of the user menu block', async () => {
            await expect(burgerMenu.getuserMenu).toHaveClass(burgerMenu.getOpenMenuStatusClass)
        })
    })

    test.only('Redirects to profile info', async () => {
        const profileTitleText = 'Profile'
        await test.step('Click on chevrone button', async () => {
            await burgerMenu.unwrapPlayerPanel()
        })

        await test.step('Click on Profile info', async () => {
            await burgerMenu.clickOnUserMenuButton('Profile Info')
            await profilePage.page.waitForLoadState()
        })

        await test.step('Check the page that opened', async () => {
            const actualUrl = await profilePage.getPageUrl()

            expect(actualUrl).toEqual(`${playwrightConfig.use?.baseURL}${LINKS.Profile}`)
            expect(await profilePage.getProfileTitle.innerText()).toEqual(profileTitleText)
        }

    })
})