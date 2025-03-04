import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class GamePage extends BasePage {
    private gameFrame: Locator;
    private sideBarPanel: Locator;

    constructor(page: Page) {
        super(page);

        this.gameFrame = page.locator('.game-frame__frame')
        this.sideBarPanel = page.locator('.game-panel')
    }

    get getGameFrame(): Locator {
        return this.gameFrame;
    }

    get getSideBarPanel(): Locator {
        return this.sideBarPanel;
    }
}