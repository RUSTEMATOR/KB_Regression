import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";;
import {PasswordRecovery} from "../../src/PO/PasswordRecovery/PasswordRecovery";
import {LINKS} from "../../src/Data/Links/Links";
import {MAIN_USER} from "../../src/Data/Users/mainUser";


test.describe('Password recovery', () => {

    let mainPage: MainPage;
    let passwordRecovery: PasswordRecovery


    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        passwordRecovery = new PasswordRecovery(page)

        await mainPage.navTo(LINKS.PasswordRecovery);
        await mainPage.clickAcceptCookies();
    })


    test.only('Check password recovery function', async () => {

        await test.step('Fill email input', async () => {
            await passwordRecovery.fillEmail(MAIN_USER.email)
        })

        await test.step('Check password recovery function', async () => {
            await passwordRecovery.clickResetPassword()
        })

        await test.step('Check notification to be visible', async () => {
            await expect.soft(passwordRecovery.getPasswordRecoveryNotification).toBeVisible()
        })

        await test.step('Check text of the notification', async () => {
            await expect(passwordRecovery.getPasswordRecoveryNotification).toHaveText(passwordRecovery.getNotificationText)
        })

    })


})