import {s} from "@faker-js/faker/dist/airline-D6ksJFwG";

interface ILinks {
    Main: string
    MainPageDepModal: string
    Promo: string
    Tournaments: string
    Vip: string
    Legend: string
    TermsAndConditions: string
    PasswordRecovery: string
    Profile: string
    Bonuses: string
    Bets: string
    Wallet: string
    mobileApp: string
    newGames: string
    favoriteGames: string
}

export const LINKS: ILinks = {
    Main: "/",
    MainPageDepModal: "/?fast-deposit=modal",
    Promo: "/promotions",
    Tournaments: "/tournaments",
    Vip: "/vip-club",
    Legend: "/the-legend",
    TermsAndConditions: "/terms-and-conditions",
    PasswordRecovery: "/users/forgot-password",
    Profile: "/profile/general/info?target=_self",
    Bonuses: "/profile/promo/casino?target=_self",
    Bets: "/profile/game_history/casino?target=_self",
    Wallet: "/profile/wallet/balance?target=_self",
    mobileApp: "/apk",
    newGames: '/games/new_online_games',
    favoriteGames: '/games/favoriteGames'
}