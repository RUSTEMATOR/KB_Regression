import test, {expect, Locator} from "@playwright/test";
import {LINKS} from "../../src/Data/Links/Links";
import PromoPage from "../../src/PO/PromoPage/PromoPage";
import playwrightConfig from "../../playwright.config";
import TournamentPage from "../../src/PO/TournamentPage/TournamentPage";


test.describe('Promos', () => {
    let promoPage: PromoPage


    test.beforeEach(async ({page}) => {
        promoPage = new PromoPage(page)

        await test.step('Navigate to main page', async () => {
            await promoPage.navTo(LINKS.promo)
            await promoPage.clickAcceptCookies()
        })
    })



    test('Check VIP tab. Logged out user', async () => {

        let vipCards: Array<Locator> = []
        let index = 1

        await test.step('Click on the VIP tab', async () => {
           await promoPage.openVipTab()
        })

        await test.step('Get all VIP promos', async () => {
            vipCards = await promoPage.getPromoCard.all()
        })

        for (let card of vipCards) {
            await test.step(`Check VIP promos for anon ${index}`, async () => {
                expect.soft(card).toHaveAttribute('class', /promo-item--disabled/)
            })
            index++
            console.log(index)
        }
    })

    test('Check tournaments tab. Logged out user', async () => {
        let tournamentCards: Array<Locator> = []

        await test.step('Click on the tournaments tab', async () => {
            await promoPage.openTournamentsTab()
        })

        await test.step('Get all tournaments', async () => {
            tournamentCards = await promoPage.getTournamentCard.all()
        })

        await test.step('Expect number of tournaments to be greater than 0', async () => {
            expect(tournamentCards.length).toBeGreaterThan(0)
        })
    })

    test('Check "Show more" button above the tournament section', async ({page}) => {
        const tournamentPage = new TournamentPage(page)

        await test.step('Click on the "Show more" button', async () => {
            await promoPage.clickShowMore()
        })

        await test.step('Check transfer to the tournaments page', async () => {
            expect(await promoPage.getPageUrl()).toEqual(`${playwrightConfig.use?.baseURL}${LINKS.Tournaments}`)
        })

        await test.step('Check presence of tournaments on the page', async () => {
            await tournamentPage.getTournamentItem.first().waitFor()
            expect(await tournamentPage.getTournamentItem.count()).toBeGreaterThan(0)
        })
    })

})
