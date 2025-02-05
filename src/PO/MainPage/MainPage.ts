import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class MainPage extends BasePage {
    private mainPage: Page
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


    constructor(page: Page) {
        super(page);

        this.mainPage = page;

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
    }


     async openGameCategory(gameCategory: Locator): Promise<void> {
        await gameCategory.click()
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