import {Page} from "@playwright/test";

export default class BaseComponent {
    public page: Page;
    constructor(page: Page) {
        this.page = page;
    }
}