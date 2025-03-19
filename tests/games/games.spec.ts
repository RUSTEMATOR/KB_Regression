import test, { expect } from "@playwright/test"
import { LINKS } from "../../src/Data/Links/Links"
import { MAIN_USER } from "../../src/Data/Users/mainUser"
import FavoriteGames from "../../src/PO/NewGames/FavoriteGames"
import playwrightConfig from "../../playwright.config"

test.describe('Games', () => {
    let favoriteGames: FavoriteGames

    test.beforeEach(async ({page}) => {
        favoriteGames = new FavoriteGames(page)

        await test.step('Navigate to main page', async () => {
            await favoriteGames.navTo(LINKS.newGames)
            await favoriteGames.clickAcceptCookies()
        })

        await test.step('Sign in', async () => {
            const signInModal = await favoriteGames.header.clickSignIn()
            await signInModal.fillEmail(MAIN_USER.email)
            await signInModal.fillPassword(MAIN_USER.password)
            await signInModal.clickSignIn()
        })
    })


    test.only('Check "Favourite" button', async () => {
        await test.step('Click on "Favourite" button', async () => {
            await favoriteGames.clickOnFavoriteButton()
        })

        await test.step('Go to favorite games page', async () => {
            await favoriteGames.navTo(LINKS.favoriteGames)
            expect(await favoriteGames.getPageUrl()).toBe(`${playwrightConfig.use?.baseURL}${LINKS.favoriteGames}`)
        })

        await test.step('Check the chosen game to be visible', async () => {
            expect(favoriteGames.getFavoriteGameItem).toBeVisible()
        })
    })


    test.afterEach(async () => {
        await favoriteGames.clickOnFavoritePageGameButton()
    })  


})