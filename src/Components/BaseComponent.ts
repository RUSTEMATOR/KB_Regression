import {Locator, Page} from "@playwright/test";

export default class BaseComponent {
    public page: Page;
    public langItem: (langValue: string) => Locator
    public langDropdown: Locator
    constructor(page: Page) {
        this.page = page;

        this.langItem = (langValue) => page.locator('.header .select-language-icons-with-code__item', {'hasText': `${langValue}`}).first()
        this.langDropdown = page.locator('.header .select-language-icons-with-code__button')
    }

    async sleep(miliseconds: number): Promise<void> {
        await this.page.waitForTimeout(miliseconds)
    }

    async getPageUrl(): Promise<string>{
        return this.page.url()
    }

    async waitForSelector(locator: Locator): Promise<void>{
    await locator.waitFor({state: "visible"})
  }

    async changeLanguage(langValue: string = 'EN', domain?: string): Promise<void> {
        await this.page.waitForLoadState('load')
        
        const currentUrl = await this.page.url();
        const currentDomain = new URL(currentUrl).hostname;
    
        const skipLanguageChangeDomains = ['www.kingbillywin24.com', 'kingbillywin24.com'];
        
        if (domain && skipLanguageChangeDomains.includes(domain) || 
            skipLanguageChangeDomains.includes(currentDomain)) {
            console.log(`Domain ${domain || currentDomain} doesn't require language change`);
            return;
        } else {
            // Proceed with language change if needed
            try {
                const currentLocale = await this.langDropdown.innerText();
                
                if (currentLocale.trim().toUpperCase() === langValue.trim().toUpperCase()) {
                    console.log(`Language is already set to ${langValue}`);
                    return;
                } else {
                    await this.langDropdown.click();
                    await this.langItem(langValue).waitFor({ state: 'visible', timeout: 5000 });
                    await this.langItem(langValue).click();
                    console.log(`Language changed to ${langValue}`);
                    // Wait for page to load after language change
                    await this.page.waitForLoadState('networkidle', { timeout: 10000 });
                }
            } catch (error) {
                console.error(`Error changing language: ${error}`);
                throw error;
            }
        }
    }
}