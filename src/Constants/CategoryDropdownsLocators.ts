import ICategoriesDropdowns from "../Interfaces/CategoriesDropdowns";
import {Page} from "@playwright/test";

export const CATEGORY_DROPDOWN_LOCATORS: ICategoriesDropdowns = {
        Slots: '#slots_category + .game-category-helper__btn',
        Live: '#live_category + .game-category-helper__btn',
        Table: '#table_games_category + .game-category-helper__btn'
}