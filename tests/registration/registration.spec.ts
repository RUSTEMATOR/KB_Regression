import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import {LIST_OF_CURRENCIES} from "../../src/Data/Constants/Currencies";
import SignUpModal from "../../src/PO/MainPage/Component/SignUpModal";
import {MAIN_USER} from "../../src/Data/Users/mainUser";
import {PASSWORD_STATES} from "../../src/Data/ParametrizedData/passwords/passwords";
import {sign} from "node:crypto";



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

    test('Check "Email" field in the registration modal form', async () => {
        await test.step('Enter a valid email into the "Email" input', async () => {
            await signUpModal.fillEmail('samoilenkofluttershy@gmail.com')

            await expect(signUpModal.getEmailInput).toHaveAttribute('value', `${MAIN_USER.email}`)
        })
    })

    test('Check "Password" field in the registration modal form', async () => {
        await test.step('Enter a valid password into the "Password" input', async () => {
            await signUpModal.fillPassword('193786Az()')

            await expect(signUpModal.getPasswordInput).toHaveAttribute('value', `${MAIN_USER.password}`)
        })
    })

    for (const [state, values] of Object.entries(PASSWORD_STATES)) {
        test.only(`Check password field states: ${state}`, async () => {

            await test.step(`Enter ${state} password`, async () => {
                await signUpModal.fillPassword(values.password)
                await mainPage.sleep(1000)
            })

            await test.step(`Check color of the state bar of ${state} password`, async () => {
              expect.soft(signUpModal.getPasswordStateBar).toHaveCSS('background-color', values.color)
            })

            await test.step(`Check the state message: ${state}`, async () => {
                expect.soft(await signUpModal.getPassowrdStateText()).toEqual(values.text)
            })
        })
    }

})