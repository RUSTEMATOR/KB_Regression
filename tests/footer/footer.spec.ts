import test, { BrowserContext, Page, expect } from "@playwright/test";
import MainPage from "../../src/PO/MainPage/MainPage";
import { LINKS } from "../../src/Data/Links/Links";
import { MAIN_USER } from "../../src/Data/Users/mainUser";
import { isContext } from "vm";
import { LOCALES } from "../../src/Data/Locales/Locales";
import BankingPage from "../../src/PO/BankingPage/BankingPage";
import playwrightConfig from "../../playwright.config";
import FaqPage from "../../src/PO/FaqPage";
import CasinoDictionary from "../../src/PO/CasinoDictionary/CasinoDictionary";
import CryptoFaq from "../../src/PO/CryptoFaq/CryptoFaq";

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


    test('Check number of the askgamblers awards', async () => {
        const expectedNumberOfAwards = 5

        await test.step('Check the number of awards', async () => {
            const actualNumeberOfAwards = await mainPage.footer.askgamblersAwardsChildrenCount()
            expect(actualNumeberOfAwards).toEqual(expectedNumberOfAwards)
        })

        await test.step('Visual comparison of the awards', async () => {
            // await mainPage.waitForSelector(mainPage.header.getDepositButton)
            await expect(mainPage.footer.getAskgamblersAwardsLocator).toHaveScreenshot()
        })
    })

    test.skip('Check "Banking"', async () => {
        const bankingPage = new BankingPage(page)

        await test.step('Click on the banking link', async () => {
            await mainPage.footer.openBankingPage()
            await expect(bankingPage.getBankingItem).toBeVisible()
        })

        await test.step('Check banking page url', async () => {
            const currentUrl = await bankingPage.getPageUrl()
            expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.bankingLink}`)
        })

        await test.step('Expect banking items to be greater than 5', async () => {
            const numberOfItems = await bankingPage.getNumberOfBankingItems()
            expect(numberOfItems).toBeGreaterThan(5)
        })
    })

    test('Check "Casino FAQ"', async () => {
        const faqPage = new FaqPage(page)
        await test.step('Click on the Casino FAQ link', async () => {
            await mainPage.footer.openCasinoFaqPage()
            await expect(faqPage.getQuestionList).toBeVisible()
        })

        await test.step('Check Casino FAQ page url', async () => {
            const currentUrl = await faqPage.getPageUrl()
            expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.faqLink}`)
        })
    })

    test('Check "Casino Dictionary"', async () => {
        const casinoDictionary = new CasinoDictionary(page)

        await test.step('Click on the Casino Dictionary link', async () => {
            await mainPage.footer.openCasinoDictionaryPage()
            await expect(casinoDictionary.getPageTitle).toBeVisible()
        })

        await test.step('Check Casino Dictionary page url', async () => {
            const currentUrl = await casinoDictionary.getPageUrl()
            expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.casinoDictionary}`)
        })
    })


    test('Check "Crypto FAQ"', async () => {
        const cryptoFaq = new CryptoFaq(page)
        await test.step('Click on the Crypto FAQ link', async () => {
            await mainPage.footer.openCryptoFaqPage()
            await expect(cryptoFaq.getPageTitle).toBeVisible()
        })

        await test.step('Check Crypto FAQ page url', async () => {
            const currentUrl = await cryptoFaq.getPageUrl()
            expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.cryptoFaq}`)
        })
    })


})
