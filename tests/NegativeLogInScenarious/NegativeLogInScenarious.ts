import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import SignInModal from "../../src/PO/MainPage/Component/SignInModal";
import {PasswordRecovery} from "../../src/PO/PasswordRecovery/PasswordRecovery";



test.describe('Log In', () => {
    let mainPage: MainPage;
    let signInModal: SignInModal
    let passwordRecovery: PasswordRecovery

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        passwordRecovery = new PasswordRecovery(page)

        await mainPage.navTo(LINKS.Main);
        await mainPage.clickAcceptCookies();

        signInModal = await mainPage.header.clickSignIn()
    })


    test('Negative. Check password field. Empty field', async () => {

        await test.step('Fill in password input with an empty string', async () => {
            await signInModal.fillPassword('')
        })
    })


})