import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { MoneyBroughtIn, MoneySentOut } from "./cash-exchange.models";

@Injectable({ providedIn: 'root' })
export class CashExchangeDbService {
    http: HttpClient = inject(HttpClient);

    async getMoneySentOut(): Promise<Partial<MoneySentOut>> {
        let moneySentOut: Partial<MoneySentOut> = {
            hundreds: {
                denominationType: 'Bill',
                denomination: 100,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            fifties: {
                denominationType: 'Bill',
                denomination: 50,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            twenties: {
                denominationType: 'Bill',
                denomination: 20,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            tens: {
                denominationType: 'Bill',
                denomination: 10,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            fives: {
                denominationType: 'Bill',
                denomination: 5,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            toonies: {
                denominationType: 'Coin',
                denomination: 2,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            loonies: {
                denominationType: 'Coin',
                denomination: 1,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            quarters: {
                denominationType: 'Coin',
                denomination: 0.25,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            dimes: {
                denominationType: 'Coin',
                denomination: 0.10,
                countOfBillCoin: 0,
                cashValue: 0,
            },
            nickels: {
                denominationType: 'Coin',
                denomination: 0.05,
                countOfBillCoin: 0,
                cashValue: 0,
            }
        }
        return moneySentOut;
    }

    async getMoneyBroughtIn(): Promise<Partial<MoneyBroughtIn>> {
        let moneyBroughtIn: Partial<MoneyBroughtIn> = {
            hundreds: {
                denominationType: 'Bill',
                denomination: 100,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: undefined,
                cashValue: 0
            },
            fifties: {
                denominationType: 'Bill',
                denomination: 50,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: undefined,
                cashValue: 0
            },
            twenties: {
                denominationType: 'Bill',
                denomination: 20,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: undefined,
                cashValue: 0
            },
            tens: {
                denominationType: 'Bill',
                denomination: 10,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: undefined,
                cashValue: 0
            },
            fives: {
                denominationType: 'Bill',
                denomination: 5,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: undefined,
                cashValue: 0
            },
            toonies: {
                denominationType: 'Coin',
                denomination: 2,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: 50,
                cashValue: 0
            },
            loonies: {
                denominationType: 'Coin',
                denomination: 1,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: 25,
                cashValue: 0
            },
            quarters: {
                denominationType: 'Coin',
                denomination: 0.25,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: 10,
                cashValue: 0
            },
            dimes: {
                denominationType: 'Coin',
                denomination: 0.10,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: 5,
                cashValue: 0
            },
            nickels: {
                denominationType: 'Coin',
                denomination: 0.05,
                countOfBillRollsOfCoin: 0,
                amountPerRoll: 2,
                cashValue: 0
            }
        };
        return moneyBroughtIn;
    }
}