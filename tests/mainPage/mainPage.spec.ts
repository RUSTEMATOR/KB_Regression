import test, {expect, Locator} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {links} from "../../src/Data/Links/Links"
import {providersIE} from "../../src/Data/Providers/Providers";
import {qase} from "playwright-qase-reporter";
import {IGameCategories} from "../../src/Interfaces/gameCategories";
import {CATEGORY_DROPDOWN_LOCATORS} from "../../src/Constants/CategoryDropdownsLocators";

test.describe('Main page', () => {
    let mainPage: MainPage
    let gameCategories: IGameCategories

    // test.beforeAll(async ({page}) => {
    //
    //     // providers = await mainPage.getAllProviders()
    //     // numberOfProviders = providers.length
    //
    // })

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)
        await mainPage.navTo(links.Main)
        gameCategories = mainPage.gameCategories


    })



    test(`Check "All providers" dropdown`, async () => {

        await test.step('Click on the "All providers" dropdown and check provider names', async () => {
            const providers = await mainPage.getAllProviders()
            qase.comment(`${providers}\n\n`)
            expect(providers).toEqual(providersIE)
        })

    })

    for (let i = 1; i < providersIE.length; i++) {

        test(`Check "All providers" filter functionality ${providersIE[i]}`, async () => {

            await test.step('Click on the "All providers" dropdown button', async () => {
                await mainPage.openAllProviders()
            })

            await test.step('Click on a name of one of the providers', async () => {
                const providerName = await mainPage.getProviderName(i)
                console.log(providerName)

                await mainPage.clickOnProvider(i)


            })

            await test.step('Check number of games in the provider category', async () => {
                await mainPage.sleep(800)
                const numberOfGames = await mainPage.getNumberOfGames()

                expect(numberOfGames).toBeGreaterThan(0)
            })
        })
    }


    //7 tests
    test(`Check game category slider functionality`, async () => {
        for (let [categoryName, values] of Object.entries(gameCategories)){
            await test.step(`Check ${categoryName} category`, async () => {
                await mainPage.openGameCategory(values.locator)
                await mainPage.sleep(800)
                const numberOfGames = await mainPage.getNumberOfGames()
                const categoryTitle = await mainPage.getCategoryTitleName()

                expect.soft(numberOfGames).toBeGreaterThan(0)
                expect.soft(categoryTitle).toMatch(values.title)

            })
        }
    })

    for (const [categoryName, dropdownLocator] of Object.entries(CATEGORY_DROPDOWN_LOCATORS)) {
        test.only(`Check ${categoryName} Subcategories`, async () => {

            await test.step(`Check ${categoryName} dropdown`, async () => {

                await mainPage.clickOn(dropdownLocator)
                await mainPage.sleep(8000)
            })

        })
    }
})