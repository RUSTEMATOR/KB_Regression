import test, { expect } from "@playwright/test";
import CasinoFaq from "../../src/PO/CasinoFaq/CasinoFaq";
import { LINKS } from "../../src/Data/Links/Links";
import { FAQText } from "../../src/Data/ExpectedTextResult/FAQText";
import CasinoDictionary from "../../src/PO/CasinoDictionary/CasinoDictionary";
import { CasinoDictionaryText } from "../../src/Data/ExpectedTextResult/casinoDictionaryText";

test.describe("Help Center", () => {
    let casinoFaq: CasinoFaq
    let casinoDictionary: CasinoDictionary

    test('Check FAQ', async ({page}) => {
        casinoFaq = new CasinoFaq(page)

        await casinoFaq.navTo(LINKS.faqLink)
        expect(await casinoFaq.getBodyText()).toEqual(FAQText)
    })

    test.only('Check Casino Dictionary', async ({page}) => {
        casinoDictionary = new CasinoDictionary(page)

        await casinoDictionary.navTo(LINKS.casinoDictionary)
        expect(await casinoDictionary.getBodyText()).toEqual(CasinoDictionaryText)
    })
})