import test, {expect} from "@playwright/test";
import MainPage from "../../../src/PO/MainPage/MainPage";
import {LINKS} from "../../../src/Data/Links/Links";
import {MAIN_USER} from "../../../src/Data/Users/mainUser";
test.describe('Main page', () => {
        test.describe('Promo Section', () => {
            let mainPage: MainPage

            test.beforeEach(async ({page}) => {
            mainPage = new MainPage(page)

            await test.step('Navigate to main page', async () => {
                await mainPage.navTo(LINKS.Main)
                await mainPage.clickAcceptCookies()
                await mainPage.closeModal()
            })
            
        
            await test.step('Verify user is logged in (using storage state)', async () => {
                await mainPage.header.waitForSelector(mainPage.header.getDepositButton)
                await expect(mainPage.header.getDepositButton).toBeVisible()
            })
        })


        test('Check "More info" button on bonus offer card', async () => {
            let numberOfPromoCards: number
            await test.step('Get number of promo cards on the page', async () => {
                numberOfPromoCards = await mainPage.promoSection.getNumberOfCards()
            })

            
                await test.step('Open info pop-up for every active card', async () => {
                    for (let i = 0; i <= numberOfPromoCards - 1; i++) {
                    
                    const isActive = await mainPage.promoSection.checkIfPromoCardIsActive(i)

                    if (isActive) {
                        await mainPage.promoSection.clickOnInfoButton(i)
                        const pageURL = await mainPage.getPageUrl()

                        if(pageURL.includes('/promotions')){
                            expect.soft(mainPage.promoSection.getInfoModal).toBeVisible()
                            await mainPage.promoSection.closeInfoModal()
                        } else {
                            await mainPage.page.goBack()
                        }
                    } else {
                        console.log(`Promo card ${i + 1} is not active`)
                    }
                    
                }
            })
        })

        test('Check "Get it now" button', async () => {
            let numberOfPromoCards: number
            await test.step('Get number of promo cards on the page', async () => {
                numberOfPromoCards = await mainPage.promoSection.getNumberOfCards()
            })

            
                await test.step('Click on "Get it now" button for every active card', async () => {
                    for (let i = 0; i <= numberOfPromoCards - 1; i++) {
                    
                    const isActive = await mainPage.promoSection.checkIfPromoCardIsActive(i)

                    if (isActive) {
                        await mainPage.promoSection.clickOnGetItButton(i)
                         const pageURL = await mainPage.getPageUrl()

                        if(pageURL.includes('/promotions')){
                            expect.soft(mainPage.promoSection.getInfoModal).toBeVisible()
                            await mainPage.promoSection.closeInfoModal()
                        } else {
                            await mainPage.page.goBack()
                        }
                    } else {
                        console.log(`Promo card ${i + 1} is not active`)
                    }
                    
                }
            })

        })

        test('Check "Next" arrow-shaped button in the promo section',async () => {
            await test.step('Click on "Next" arrow-shaped button', async () => {
                await mainPage.promoSection.clickOnSliderButtonTwo()
                console.log(await mainPage.promoSection.getSliderButton.getAttribute('currentslide'))
            })

            await test.step('Check current slide number', async () => {
                const currentSlide = await mainPage.promoSection.getSliderButton.getAttribute('currentslide')

                expect(currentSlide).toBe('1')
            })
        })
    })
})
