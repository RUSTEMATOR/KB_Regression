interface ILinks {
    Main: string,
    MainPageDepModal: string,
    Promo: string,
    TermsAndConditions: string
    PasswordRecovery: string
    Profile: string
}

export const LINKS: ILinks = {
    Main: "/",
    MainPageDepModal: "/?fast-deposit=modal",
    Promo: "/promotions",
    TermsAndConditions: "/terms-and-conditions",
    PasswordRecovery: "/users/forgot-password",
    Profile: "/profile/general/info?target=_self"

}