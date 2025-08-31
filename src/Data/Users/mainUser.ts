interface IMainUser {
    email: string
    password: string
    username: string
    status: string
    nextStatus: string
    statusPoints: string
    progressBarState: string
}


export const MAIN_USER: IMainUser = {
    email: 'regression_mainuser@kingbilly.xyz',
    password: 'KingBilly123!',
    username: 'Pony Fluttershy',
    status: 'Count',
    nextStatus: 'Marquess',
    statusPoints: "1 / 12000RS",
    progressBarState: 'width: 0%;',
}