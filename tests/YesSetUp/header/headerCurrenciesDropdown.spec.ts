import test, {expect} from "@playwright/test";
import SignInModal from "../../../src/PO/MainPage/Component/SignInModal";
import MainPage from "../../../src/PO/MainPage/MainPage";
import {DepModal} from "../../../src/Components/DepModal";
import GamePage from "../../../src/PO/GamePage/GamePage";
import {LINKS} from "../../../src/Data/Links/Links";
import {USERS} from "../../../src/Data/Users/users";
import {CURRENCIES} from "../../../src/Data/Currencies/Currencies";

test.describe('Header', () => {
    let signInModal: SignInModal
    let mainPage: MainPage
    let depModal: DepModal
    let gamePage: GamePage

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)
        gamePage = new GamePage(page)

        await test.step('Navigate to main page', async () => {
            await mainPage.navTo(LINKS.Main)
            await mainPage.clickAcceptCookies()
            await mainPage.closeModal()
        })
        
        // Storage state should already have us logged in, just verify
        await test.step('Verify user is logged in (using storage state)', async () => {
            await mainPage.header.waitForSelector(mainPage.header.getDepositButton)
            await expect(mainPage.header.getDepositButton).toBeVisible()
        })
    })

    test('Check "Currency" dropdown', async () => {

        await test.step('Open currencies dropdown', async () => {
            await mainPage.header.openCurrenciesDropdown()
        })

        await test.step('Check if currencies are displayed', async () => {
            expect(await mainPage.header.getCurrencies()).toEqual(CURRENCIES)
        })

    })

})
