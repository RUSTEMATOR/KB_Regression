import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import {LIST_OF_CURRENCIES} from "../../src/Data/Constants/Currencies";
import SignUpModal from "../../src/PO/MainPage/Component/SignUpModal";



test.describe('Registration', () => {
    let mainPage: MainPage
    let signUpModal: SignUpModal

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)

        await mainPage.navTo(LINKS.Main)
        await mainPage.clickAcceptCookies()
        signUpModal = await mainPage.header.clickCreateAccount()
        await mainPage.waitForSelector(signUpModal.getEmailInput)

    })


    test.skip('Check "Currency" dropdown', async () => {
        await test.step('Check "Currency" dropdown', async () => {
            const currencies = await signUpModal.getCurrenciesFromDropdown()

            expect(currencies).toEqual(LIST_OF_CURRENCIES)
        })

    })

    test('Check "Create account" button availability', async () => {
        await test.step('Check that registration modal is visible', async () => {
            expect(await signUpModal.getSignUpModal.isVisible()).toEqual(true)
        })
    })

    test('Check "Already have an account. Sign in" button', async () => {
        await test.step('Check "Already have an account. Sign in" link', async () => {
            let signInModalForm  = await signUpModal.clickSignInLink()
            await signInModalForm.getSignInModalForm.waitFor({state: "visible"})

            expect(await signInModalForm.getSignInModalForm.isVisible()).toEqual(true)
        })
    })



})