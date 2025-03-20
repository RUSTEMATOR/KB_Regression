import test, { BrowserContext, Page, expect } from "@playwright/test";
import MainPage from "../../src/PO/MainPage/MainPage";
import { LINKS } from "../../src/Data/Links/Links";
import { MAIN_USER } from "../../src/Data/Users/mainUser";
import { isContext } from "vm";
import { LOCALES } from "../../src/Data/Locales/Locales";

test.describe('Footer', () => {
    let mainPage: MainPage
    let context: BrowserContext
    let page: Page

    test.beforeEach(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        mainPage = new MainPage(page)

        await test.step('Navigate to main page', async () => {
            await mainPage.navTo(LINKS.Main)
            await mainPage.clickAcceptCookies()
        })

        await test.step('Sign in', async () => {
            const signInModal = await mainPage.header.clickSignIn()
            await signInModal.fillEmail(MAIN_USER.email)
            await signInModal.fillPassword(MAIN_USER.password)
            await signInModal.clickSignIn()
        })
    })


    test('Check Facebook button', async () => {
        let facebookPage: Page

        await test.step('Click on Facebook button', async () => {
            [facebookPage] =  await Promise.all([
                context.waitForEvent('page'),
                await mainPage.footer.clickOnFacebookButton()
            ])
        })

        await test.step('Check page link', async () => {
            await facebookPage.waitForLoadState()
            const currentUrl = await facebookPage.url()

            expect(currentUrl).toBe(LINKS.facebookLink)
        })
    })

    test('Check Instagram button', async () => {
        let instagramPage: Page

        await test.step('Click on Instagram button', async () => {
            [instagramPage] =  await Promise.all([
                context.waitForEvent('page'),
                await mainPage.footer.clickOnInstagramButton()
            ])
        })

        await test.step('Check page link', async () => {
            await instagramPage.waitForLoadState()
            const currentUrl = instagramPage.url()

            expect(currentUrl).toBe(LINKS.instagramLink)
        })
    })

    test('Check Youtube button', async () => {
        let youtubePage: Page

        await test.step('Click on Youtube button', async () => {
            [youtubePage] =  await Promise.all([
                context.waitForEvent('page'),
                await mainPage.footer.clickOnYoutubeButton()
            ])
        })

        await test.step('Check page link', async () => {
            await youtubePage.waitForLoadState()
            const currentUrl = youtubePage.url()

            expect(currentUrl).toBe(LINKS.youtubeLink)
        })
    })

    test('Check language change dropdown', async () => {
        let listOfLocales: Array<string>

        await test.step('Open lang dropdown', async () => {
            await mainPage.footer.openFooterLangDropdown()
        })

        await test.step('Get text of the lang button and dropdown', async () => {
            listOfLocales = await mainPage.footer.getFooterLangDropdownLocales()
        })

        await test.step('Compare received list to the expected result', async () => {
            expect(listOfLocales).toEqual(LOCALES)
        })
    })
})
