import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class MainPage extends BasePage {
    private mainPage: Page
    private allProviders: Locator
    private providersBlock: Locator

    private categoryTitle: Locator
    private lobbyCategory: Locator
    private newCategory: Locator
    private topCategory: Locator
    private popularCategory: Locator
    private jackpotsCategory: Locator
    private slotsCategory: Locator
    private accumulatingCategory: Locator
    private bonusBuyCategory: Locator
    private megawaysCategory: Locator
    private crashCategory: Locator
    private bookCategory: Locator
    private exclusiveCategory: Locator
    private liveCategory: Locator
    private blackjackCategory: Locator
    private rouletteCategory: Locator
    private baccaratCategory: Locator
    private pokerCategory: Locator
    private tableGamesCategory: Locator
    private tableOnlineRoulette: Locator
    private recentGamesCategory: Locator
    private provider: (index: number) => Locator
    private showMoreButton: (index: number) => Locator


    constructor(page: Page) {
        super(page);

        this.mainPage = page;

        this.allProviders = page.locator('.games-filter__cell--providers')
        this.providersBlock = page.locator('.menu-providers-select__content')

        this.categoryTitle = page.locator('.games__title')
        this.lobbyCategory = page.locator('#lobby_category ')
        this.newCategory = page.locator('#new_category')
        this.topCategory = page.locator('#top_category')
        this.popularCategory = page.locator('#popular_category')
        this.jackpotsCategory = page.locator('#jackpots_category')
        this.slotsCategory = page.locator('#slots_category')
        this.accumulatingCategory = page.locator('#slots_accumulating')
        this.bonusBuyCategory = page.locator('#slots_bonus_buy')
        this.megawaysCategory = page.locator('#slots_megaways')
        this.crashCategory = page.locator('#slots_crash')
        this.bookCategory = page.locator('#slots_book')
        this.exclusiveCategory = page.locator('#slots_exclusive')
        this.liveCategory = page.locator('#live_category')
        this.blackjackCategory = page.locator('#live_blackjack')
        this.rouletteCategory = page.locator('#live_roulette')
        this.baccaratCategory = page.locator('#live_baccarat')
        this.pokerCategory = page.locator('#live_poker')
        this.tableGamesCategory = page.locator('#table_games_category')
        this.tableOnlineRoulette = page.locator('#table_online_roulette')
        this.recentGamesCategory = page.locator('#recent_games_category')
        this.provider = (index) => page.locator(`#games-page-providers-filter-item-${index}`)
        this.showMoreButton = (index) => page.locator(`.home-slider__top .home-slider__see-more-btn:nth-of-type(${index})`)
    }


     async openGameCategory(gameCategory: Locator): Promise<void> {
        await gameCategory.click()
    }

    async openShowMore(index: number): Promise<void> {
        await this.showMoreButton(index).click()
    }

    async openAllProviders(): Promise<void> {
        await this.allProviders.click()
    }

    async getAllProviders(): Promise<Array<string>>{
        await this.openAllProviders()

        return await this.page.evaluate(() => {
            const allProviders = document.querySelector('.menu-providers-select__content');
            if (!allProviders){
                return []
            }
            const providersList = (allProviders as HTMLElement).innerText;
            

            return providersList.split("\n").map((provider: string) => provider.trim()).filter((provider: string) => provider !== "")
        })
    }

    async clickOnProvider(index: number): Promise<void> {
        await this.provider(index).click()
    }

    async getProviderName(index: number): Promise<string> {
        return await this.provider(index).innerText()
    }

    async getCategoryTitleName(): Promise<string>{
        return await this.categoryTitle.innerText()
    }


    //accessors
    get lobby(): Locator {
        return this.lobbyCategory
    }

    get new(): Locator {
        return this.newCategory
    }

    get top(): Locator {
        return this.topCategory
    }

    get popular(): Locator {
        return this.popularCategory
    }

    get jackpots(): Locator {
        return this.jackpotsCategory
    }

    get slots(): Locator {
        return this.slotsCategory
    }

    get accumulating(): Locator {
        return this.accumulatingCategory
    }

    get bonusBuy(): Locator {
        return this.bonusBuyCategory
    }

    get megaways(): Locator {
        return this.megawaysCategory
    }

    get crash(): Locator {
        return this.crashCategory
    }

    get book(): Locator {
        return this.bookCategory
    }

    get exclusive(): Locator {
        return this.exclusiveCategory
    }

    get live(): Locator {
        return this.liveCategory
    }

    get blackjack(): Locator {
        return this.blackjackCategory
    }

    get roulette(): Locator {
        return this.rouletteCategory
    }

    get baccarat(): Locator {
        return this.baccaratCategory
    }

    get poker(): Locator {
        return this.pokerCategory
    }

    get tableGames(): Locator {
        return this.tableGamesCategory
    }

    get tableOnline(): Locator {
        return this.tableOnlineRoulette
    }

    get recentGames(): Locator {
        return this.recentGamesCategory
    }
}