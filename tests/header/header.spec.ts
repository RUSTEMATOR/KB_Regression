import test, {expect} from '@playwright/test'
import {MAIN_USER} from "../../src/Data/Users/mainUser";
import SignInModal from "../../src/PO/MainPage/Component/SignInModal";
import MainPage from "../../src/PO/MainPage/MainPage";
import {DepModal} from "../../src/Components/DepModal";
import {LINKS} from "../../src/Data/Links/Links";



test.describe('Header', () => {
    let signInModal: SignInModal
    let mainPage: MainPage
    let depModal: DepModal
    test.beforeEach(async ({page}) => {


        mainPage = new MainPage(page)

        await test.step('Navigate to main page', async () => {
            await mainPage.navTo(LINKS.Main)
        })

        await test.step('Open sign in modal', async () => {
            signInModal = await mainPage.header.clickSignIn()
        })

        await test.step('Enter valid email', async () => {
            await signInModal.fillEmail(MAIN_USER.email)
        })

        await test.step('Enter valid password', async () => {
            await signInModal.fillPassword(MAIN_USER.password)
        })

        await test.step('Click on "Sign in" button', async () => {
            await signInModal.clickSignIn()
        })

        await test.step('Check if user is logged in', async () => {
            await mainPage.header.waitForSelector(mainPage.header.getDepositButton)
            await expect(mainPage.header.getDepositButton).toBeVisible()
        })
    })


    test('Check the "deposit" button', async () => {

        await test.step('', async () => {
            depModal = await mainPage.header.clickDepositButton()
        })

        await mainPage.page.reload()

        await test.step('Check if deposit modal is opened', async () => {
            await expect(depModal.getDepModal).toBeVisible()
        })

    })

})