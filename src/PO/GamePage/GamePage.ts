import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export default class GamePage extends BasePage {
    private gameFrame: Locator;

    constructor(page: Page) {
        super(page);

        this.gameFrame = page.locator('.game-frame__frame')
    }

    get getGameFrame(): Locator {
        return this.gameFrame;
    }
}