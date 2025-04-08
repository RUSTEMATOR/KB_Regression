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
import LegendPage from "../../src/PO/LegendPage/LegendPage";
import TermsAndConditions from "../../src/PO/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../../src/PO/PrivacyPolicy/PrivacyPolicy";
import ResponsibleGamblingPage from "../../src/PO/ResponsibleGamblingPage/ResponsibleGamblingPage";
import CookiePolicy from "../../src/PO/CookiePolicy/CookiePolicy";
import CookiePolicyPage from "../../src/PO/CookiePolicy/CookiePolicy";

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

    test.describe('Check "Social" buttons', () => {


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

    })


    test.describe('Check language dropdown', () => {
        

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


    test.describe('Check "awards" articles', () => {


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

    })

    test.describe('Check "Help" column of the information pages', () => {

        test('Check "Banking"', async () => {
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


    test.describe('Check "Info" column of the info pages', () => {


        test('Check "The legend" page', async () => {
            const theLegendPage = new LegendPage(page)

            await test.step('Click on the Legend link', async () => {
                await mainPage.footer.openLegendPage()
                await expect(theLegendPage.getLegendTitle).toBeVisible()
            })

            await test.step('Check Legend page url', async () => {
                const currentUrl = await theLegendPage.getPageUrl()
                expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.Legend}`)
            })
        })

        test('Check "Terms and Conditions" page', async () => {
            const termsAndConditions = new TermsAndConditions(page)

            await test.step('Click on the Terms and Conditions link', async () => {
                await mainPage.footer.openTermsAndConditionsPage()
                await expect(termsAndConditions.getDownloadPdfButton).toBeVisible()
            })

            await test.step('Check Terms and Conditions page url', async () => {
                const currentUrl = await termsAndConditions.getPageUrl()
                expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.TermsAndConditions}`)
            })
        })

        test('Check "Privacy policy" page', async () => {
            const privacyPolicy = new PrivacyPolicy(page)

            await test.step('Click on the Privacy Policy link', async () => {
                await mainPage.footer.openPrivacyPolicyPage()
                await expect(privacyPolicy.PrivacyPolicyTitle).toBeVisible()
            })

            await test.step('Check Privacy Policy page url', async () => {
                const currentUrl = await privacyPolicy.getPageUrl()
                expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.privacyPolicy}`)
            })
        })

        test('Check "Responsible gambling" page', async () => {
            const responsibleGambling = new ResponsibleGamblingPage(page)

            await test.step('Click on the Responsible gambling link', async () => {
                await mainPage.footer.openResponsibleGamingPage()
                await expect(responsibleGambling.getResponsibleGamblingTitle).toBeVisible()
            })

            await test.step('Check Responsible gambling page url', async () => {
                const currentUrl = await responsibleGambling.getPageUrl()
                expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.responsibleGambling}`)
            })
        })

        test('Check "Cookie Policy" page', async () => {

            const cookiePolicy = new CookiePolicyPage(page)

            await test.step('Click on the Cookie Policy link', async () => {
                await mainPage.footer.openCookiePolicyPage()
                await expect(cookiePolicy.getCookiePolicyTitle).toBeVisible()
            })

            await test.step('Check Cookie Policy page url', async () => {
                const currentUrl = await cookiePolicy.getPageUrl()
                expect(currentUrl).toBe(`${playwrightConfig.use?.baseURL}${LINKS.cookiePolicy}`)
            })
        })

    })


    test.describe('Check "Games" column in the footer', () => {

   
        test('Click on the "Top" button', () => {
            for (let [categoryName, values] of Object.entries(gameCategories)) {
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

    })

})
