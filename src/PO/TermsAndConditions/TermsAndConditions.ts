import BasePage from "../BasePage/BasePage";
import {Page, Locator} from "@playwright/test";

export default class TermsAndConditions extends BasePage {
    private downloadPdfButton: Locator
    
    constructor(page: Page) {
        super(page)
        
        this.downloadPdfButton = page.locator('.download-pdf-button')
    }

    get getDownloadPdfButton(): Locator {
        return this.downloadPdfButton
    }
}