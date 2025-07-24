import { Injectable } from "@angular/core";
import { MoneyBroughtIn, MoneySentOut } from "./cash-exchange.models";
import currency from "currency.js";

@Injectable({ providedIn: 'root' })
export class CardExchangeCalcsService {
    calculateTotals(moneySentOut: Partial<MoneySentOut>, moneyBroughtIn: Partial<MoneyBroughtIn>): { moneySentOutAmount: number, moneyBroughtInAmount: number, difference: number }{
        let moneySentOutAmount: number = 0;
        for(const [key, value] of Object.entries(moneySentOut)){
            moneySentOutAmount += currency(value?.cashValue!).value;
        }
        let moneyBroughtInAmount: number = 0;
        for(const [key, value] of Object.entries(moneyBroughtIn)){
            moneyBroughtInAmount += currency(value?.cashValue!).value;
        }
        const difference: number = currency(moneySentOutAmount).subtract(moneyBroughtInAmount).value;
        return { moneySentOutAmount, moneyBroughtInAmount, difference };
    }
}