import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class GamePage extends BasePage {
    private gameFrame: Locator;
    private sideBarPanel: Locator;
    private sideNewGame: Locator;
    private sideRecentGames: Locator;
    private sideFavoriteGames: Locator;
    private sideTopGames: Locator;
    private sideLastGames: Locator;
    private sideTournaments: Locator;
    private sideSupport: Locator;
    private searchButton: Locator;
    private searchInput: Locator;
    private gameButton: Locator;
    private confirmButton: Locator;

    constructor(page: Page) {
        super(page);

        this.gameFrame = page.locator('.game-frame__frame')
        this.sideBarPanel = page.locator('.game-panel')
        this.sideNewGame = page.locator('#game_side_new')
        this.sideRecentGames = page.locator('#game_side_recently')
        this.sideFavoriteGames = page.locator('#game_side_fav')
        this.sideTopGames = page.locator('#game_side_fav')
        this.sideLastGames = page.locator('#game_side_last')
        this.sideTournaments = page.locator('#game-side-tournament')
        this.sideSupport = page.locator('#game_side_support')
        this.searchButton = page.locator('.game-panel__button-search')
        this.searchInput = page.locator('#games-search')
        this.gameButton = page.locator('#games-search-item-0')
        this.confirmButton = page.locator('.game-session-close-modal__buttons .btn--primary')
    }


    async triggerSideBarMenu() {
        await this.sideBarPanel.hover()
    }

    async clickOnSearchButton() {
        await this.searchButton.click()
    }

    async searchForAGame(text: string) {
        await this.searchInput.fill(text)
    }

    async clickOnGame() {
        await this.gameButton.click()
    }

    async clickOnConfirm() {
        await this.confirmButton.click()
    }

    get getGameFrame(): Locator {
        return this.gameFrame;
    }

    get getSideBarPanel(): Locator {
        return this.sideBarPanel;
    }

    get sideBarButtons(): Array<Locator> {
        return [
            this.sideNewGame,
            this.sideRecentGames,
            this.sideFavoriteGames,
            this.sideTopGames,
            this.sideLastGames,
            this.sideTournaments,
            this.sideSupport
        ]
    }
}