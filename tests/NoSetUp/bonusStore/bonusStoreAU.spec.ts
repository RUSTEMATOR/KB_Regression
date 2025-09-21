import SignInModal from "../../../src/PO/MainPage/Component/SignInModal";
import SignUpModal from "../../../src/PO/MainPage/Component/SignUpModal";
import BonusStore from "../../../src/PO/BonusStore/BonusStore";
import { LINKS } from "../../../src/Data/Links/Links";
import { test, expect } from "@playwright/test";
import { USERS, VIP_USERS } from "../../../src/Data/Users/users";
import { AU_EXPECTED_RESULTS_BONUS_STORE } from "../../../src/Data/bonusStoreExpectedResults/bonusStoreExpectedAU";

function createComparisonMatcher(bonuses: any[]): any {
    return expect.arrayContaining(
        bonuses.map((bonus: any) => expect.objectContaining({
            ...(bonus.title && { title: bonus.title }),
            ...(bonus.price !== undefined && { price: bonus.price }),
            ...(bonus.fiatTitle && { fiatTitle: bonus.fiatTitle }),
            ...(bonus.fiatPrice && { fiatPrice: bonus.fiatPrice })
        }))
    );
}

test.describe('Bonus Store - AU', () => {
    test.beforeEach(async ({ page }, testInfo) => {
     
        const baseURL = testInfo.project.use.baseURL;
        test.skip(baseURL !== 'https://www.kingbillywin24.com', 'These tests are for AU domain only');
        
        
        signInModal = new SignInModal(page)
        signUpModal = new SignUpModal(page)
        bonusStore = new BonusStore(page)
        await bonusStore.navTo(LINKS.bonusStore)
        await bonusStore.clickAcceptCookies()
    });
    
    let signInModal: SignInModal
    let signUpModal: SignUpModal
    let bonusStore: BonusStore

    test('Verify Sign in button availability', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await expect(signInModal.getEmailInput).toBeVisible()
    });

    test('Verify Sign up button availability', async () => {
        await bonusStore.clickOn(bonusStore.createAccountButton)
        await expect(signUpModal.getEmailInput).toBeVisible()
    });

    test('Verify bonus availability for New Citizen user real money', async () => {
            await bonusStore.clickOn(bonusStore.signInButton)
            await signInModal.fillEmail(USERS.citizenUser.email)
            await signInModal.fillPassword(USERS.citizenUser.password)
            await signInModal.clickSignIn()
            await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
            await bonusStore.clickOn(bonusStore.realMoneyButton)

            await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
            const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
            expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.REAL))
    })

    test('Verify bonus availability for New Citizen user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(USERS.citizenUser.email)
        await signInModal.fillPassword(USERS.citizenUser.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await bonusStore.bonusCardKingsCoins.first().scrollIntoViewIfNeeded()
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.KINGS_COINS))
    })

    test('Verify bonus availability for King user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.king.email)
        await signInModal.fillPassword(VIP_USERS.king.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)

        await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.KING.REAL))
    })

    test('Verify bonus availability for King user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.king.email)
        await signInModal.fillPassword(VIP_USERS.king.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton) 
        await bonusStore.bonusCardKingsCoins.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        console.log(bonusInfo)
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.KING.KINGS_COINS))
    })

    test('Verify bonus availability for Duke user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.duke.email)
        await signInModal.fillPassword(VIP_USERS.duke.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.REAL))
    })

    test('Verify bonus availability for Duke user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.duke.email)
        await signInModal.fillPassword(VIP_USERS.duke.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton) 
        await bonusStore.bonusCardKingsCoins.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.KINGS_COINS))
    })

     test('Verify bonus availability for Baronet user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.baronet.email)
        await signInModal.fillPassword(VIP_USERS.baronet.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.REAL))
    })

    test('Verify bonus availability for Baronet user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.baronet.email)
        await signInModal.fillPassword(VIP_USERS.baronet.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton) 
        await bonusStore.bonusCardKingsCoins.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.KINGS_COINS))
    })


    test('Verify bonus availability for Knight user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.knight.email)
        await signInModal.fillPassword(VIP_USERS.knight.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        await bonusStore.bonusCardReal.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('realMoney')
        console.log(bonusInfo)
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.REAL))
    })

    test('Verify bonus availability for Knight user kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.knight.email)
        await signInModal.fillPassword(VIP_USERS.knight.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton) 
        await bonusStore.bonusCardKingsCoins.first().waitFor({state: 'visible'})
        const bonusInfo = await bonusStore.gatherBonusInfo('kingsCoins')
        expect(bonusInfo).toEqual(createComparisonMatcher(AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.KINGS_COINS))
    })


    test('Verify Bonus Store filtering for Citizen user Kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(USERS.citizenUser.email)
        await signInModal.fillPassword(USERS.citizenUser.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await test.step('Check cash bonuses', async () => {
            await bonusStore.clickOn(bonusStore.cashTab)
            const cashBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.KINGS_COINS.filter(bonus => bonus.type === 'cash');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(cashBonuses));
        })

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.KINGS_COINS.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.KINGS_COINS.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });
    });

    test('Verify Bonus Store filtering for Citizen user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(USERS.citizenUser.email)
        await signInModal.fillPassword(USERS.citizenUser.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        
        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.REAL.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.REAL.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check tips bonuses', async () => {
            await bonusStore.clickOn(bonusStore.tipsTab)
            const tipsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.CITIZEN.REAL.filter(bonus => bonus.type === 'tips');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(tipsBonuses));
        });
    });


    test('Verify Bonus Store filtering for Baronet user Kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.baronet.email)
        await signInModal.fillPassword(VIP_USERS.baronet.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await test.step('Check cash bonuses', async () => {
            await bonusStore.clickOn(bonusStore.cashTab)
            const cashBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.KINGS_COINS.filter(bonus => bonus.type === 'cash');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(cashBonuses));
        })

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.KINGS_COINS.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.KINGS_COINS.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });
    });

    test('Verify Bonus Store filtering for Baronet user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.baronet.email)
        await signInModal.fillPassword(VIP_USERS.baronet.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        
        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.REAL.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.REAL.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check tips bonuses', async () => {
            await bonusStore.clickOn(bonusStore.tipsTab)
            const tipsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.BARONET.REAL.filter(bonus => bonus.type === 'tips');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(tipsBonuses));
        });
    });

    test('Verify Bonus Store filtering for Duke user Kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.duke.email)
        await signInModal.fillPassword(VIP_USERS.duke.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await test.step('Check cash bonuses', async () => {
            await bonusStore.clickOn(bonusStore.cashTab)
            const cashBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.KINGS_COINS.filter(bonus => bonus.type === 'cash');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(cashBonuses));
        })

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.KINGS_COINS.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.KINGS_COINS.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });
    });

    test('Verify Bonus Store filtering for Duke user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.duke.email)
        await signInModal.fillPassword(VIP_USERS.duke.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        
        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.REAL.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.REAL.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check tips bonuses', async () => {
            await bonusStore.clickOn(bonusStore.tipsTab)
            const tipsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.DUKE.REAL.filter(bonus => bonus.type === 'tips');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(tipsBonuses));
        });
    });


    test('Verify Bonus Store filtering for King user Kings coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.king.email)
        await signInModal.fillPassword(VIP_USERS.king.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await test.step('Check cash bonuses', async () => {
            await bonusStore.clickOn(bonusStore.cashTab)
            const cashBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.KINGS_COINS.filter(bonus => bonus.type === 'cash');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(cashBonuses));
        })

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.KINGS_COINS.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.KINGS_COINS.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });
    });

    test('Verify Bonus Store filtering for King user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.king.email)
        await signInModal.fillPassword(VIP_USERS.king.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        
        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.REAL.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.REAL.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check tips bonuses', async () => {
            await bonusStore.clickOn(bonusStore.tipsTab)
            const tipsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KING.REAL.filter(bonus => bonus.type === 'tips');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(tipsBonuses));
        });
    });


    test('Verify Bonus Store filtering for King user Knight coins', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.knight.email)
        await signInModal.fillPassword(VIP_USERS.knight.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.kingsCoinsButton)

        await test.step('Check cash bonuses', async () => {
            await bonusStore.clickOn(bonusStore.cashTab)
            const cashBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.KINGS_COINS.filter(bonus => bonus.type === 'cash');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(cashBonuses));
        })

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.KINGS_COINS.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.KINGS_COINS.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('kingsCoins');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });
    });

    test('Verify Bonus Store filtering for Knight user real money', async () => {
        await bonusStore.clickOn(bonusStore.signInButton)
        await signInModal.fillEmail(VIP_USERS.knight.email)
        await signInModal.fillPassword(VIP_USERS.knight.password)
        await signInModal.clickSignIn()
        await signInModal.changeLanguage('EN', test.info().project.use.baseURL);
        await bonusStore.clickOn(bonusStore.realMoneyButton)
        
        await test.step('Check fs bonuses', async () => {
            await bonusStore.clickOn(bonusStore.fsTab)
            const fsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.REAL.filter(bonus => bonus.type === 'fs');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(fsBonuses));
        });

        await test.step('Check wheel bonuses', async () => {
            await bonusStore.clickOn(bonusStore.wheelTab)
            const wheelBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.REAL.filter(bonus => bonus.type === 'wheel');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(wheelBonuses));
        });

        await test.step('Check tips bonuses', async () => {
            await bonusStore.clickOn(bonusStore.tipsTab)
            const tipsBonuses = AU_EXPECTED_RESULTS_BONUS_STORE.KNIGHT.REAL.filter(bonus => bonus.type === 'tips');
            const receivedBonuses = await bonusStore.gatherBonusInfo('realMoney');
            expect.soft(receivedBonuses).toEqual(createComparisonMatcher(tipsBonuses));
        });
    });
});