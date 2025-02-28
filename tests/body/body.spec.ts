import test, {expect} from "@playwright/test";
import MainPage from "../../src/PO/MainPage/MainPage";
import {LINKS} from "../../src/Data/Links/Links";
import GamePage from "../../src/PO/GamePage/GamePage";
import SignInModal from "../../src/PO/MainPage/Component/SignInModal";
import {MAIN_USER} from "../../src/Data/Users/mainUser";

test.describe('Body', async () => {
    let mainPage: MainPage
    let gamePage: GamePage
    let signInModal: SignInModal

    test.beforeEach(async ({page}) =>{
        mainPage = new MainPage(page)
        gamePage = new GamePage(page)

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
    })


    test('Check if games are clickable in the "Top winners" section', async () => {
        let numberOfGames: number = 0

        await test.step('Scroll to the top winners section', async () => {
            await mainPage.scrollTo(mainPage.getTopWinnersSection)
        })

        await test.step('Get number of games in the top winners section', async () => {
            numberOfGames = await mainPage.getNumberOfTopWinnerGames()
        })

        for (let index = 0; index <= (numberOfGames/2); index++) {
            await test.step(`Navigate back to the main page. Index ${index}`, async () => {
                await mainPage.navTo(LINKS.Main)
                await mainPage.scrollTo(mainPage.getTopWinnersSection)
            })

            await test.step(`Click on each game to open the game page. Index ${index}`, async () => {
                await mainPage.sleep(2000)
                await mainPage.clickOnTopWinnersGame(index)
            })

            await test.step(`Check if a game has been opened ${index}`, async () => {
                await mainPage.sleep(2000)
                await expect.soft(gamePage.getGameFrame).toBeVisible()
            })
        }
    })
})