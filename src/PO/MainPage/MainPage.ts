import BasePage from "../BasePage/BasePage";
import {Page} from "@playwright/test";

export default class MainPage extends BasePage {
    private mainPage: Page

    constructor(page: Page) {
        super(page);

        this.mainPage = page;
    }
}