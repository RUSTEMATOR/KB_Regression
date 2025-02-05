import test, {expect} from '@playwright/test'
import MainPage from "../../src/PO/MainPage/MainPage";
import {links} from "../../src/Data/Links/Links"
import {providersIE} from "../../src/Data/Providers/Providers";
import {qase} from "playwright-qase-reporter";

test.describe('Main page', () => {
    let mainPage: MainPage

    // test.beforeAll(async ({page}) => {
    //
    //     // providers = await mainPage.getAllProviders()
    //     // numberOfProviders = providers.length
    //
    // })

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page)
        await mainPage.navTo(links.Main)

    })



    test.skip(`Check "All providers" dropdown`, async () => {

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

                qase.comment(`Clicked on ${providerName}\n\n`)

                const categoryName = await mainPage.getCategoryTitleName()
                console.log(categoryName)

                expect(categoryName).toEqual(providerName)
            })
        })
    }
})