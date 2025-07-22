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
            }
        };
        return moneyBroughtIn;
    }
}