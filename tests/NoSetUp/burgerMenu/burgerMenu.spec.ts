import test, {expect} from '@playwright/test'
import MainPage from "../../../src/PO/MainPage/MainPage";
import {LINKS} from "../../../src/Data/Links/Links";
import {MAIN_USER} from "../../../src/Data/Users/mainUser";
import SignInModal from "../../../src/PO/MainPage/Component/SignInModal";
import SidebarMenu from "../../../src/Components/SidebarMenu";

test.describe('Burger menu - Logout functionality', () => {
    let mainPage: MainPage
    let signInModal: SignInModal
    let burgerMenu: SidebarMenu

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)

        await test.step('Navigate to the main page', async () => {
            await mainPage.navTo(LINKS.Main)
            await mainPage.clickAcceptCookies()
        })

        await test.step('Sign in', async () => {
            signInModal = await mainPage.header.clickSignIn()
            await signInModal.fillEmail(MAIN_USER.email)
            await signInModal.fillPassword(MAIN_USER.password)
            await signInModal.clickSignIn()
            await mainPage.header.waitForSelector(mainPage.header.getDepositButton)
            await expect(mainPage.header.getDepositButton).toBeVisible()
        })
    })

    test('Check the "Sign out" button', async () => {
        await test.step('Click on Sign Out button', async () => {
            burgerMenu = await mainPage.clickOnSidebarButton()
            await mainPage.page.waitForTimeout(1000)
            await burgerMenu.clickOnLogoutButton()
            await mainPage.page.waitForTimeout(4000)
        })

        await test.step('Check if user is logged out', async () => {
            await expect(mainPage.header.getCreateAccountButton).toBeVisible()
            await expect(mainPage.header.getSignInButton).toBeVisible()
            await expect(mainPage.getsliderRegForm).toBeVisible()
        })
    })
})
