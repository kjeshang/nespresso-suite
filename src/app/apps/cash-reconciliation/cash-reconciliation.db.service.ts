import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CashDesk } from "./cash-reconciliation.models";

@Injectable({ providedIn: 'root' })
export class CashReconciliationDbService {
    http: HttpClient = inject(HttpClient);
    private fb: FormBuilder = inject(FormBuilder);


    async getCashDesk() {
        let cashDesk: Partial<CashDesk> = {
            hundreds: {
                label: 'Count of $100 Bills',
                multiplier: 100,
                amount: 0,
            },
            fifties: {
                label: 'Count of $50 Bills',
                multiplier: 50,
                amount: 0,
            },
            twenties: {
                label: 'Count of $20 Bills',
                multiplier: 20,
                amount: 0,
            },
            tens: {
                label: 'Count of $10 Bills',
                multiplier: 10,
                amount: 0,
            },
            fives: {
                label: 'Count of $5 Bills',
                multiplier: 5,
                amount: 0,
            },
            toonies: {
                label: 'Count of $2 Coins',
                multiplier: 2,
                amount: 0
            },
            loonies: {
                label: 'Count of $1 Coins',
                multiplier: 1, 
                amount: 0,
            },
            quarters: {
                label: 'Count of $0.25 Coins',
                multiplier: 0.25,
                amount: 0,
            },
            dimes: {
                label: 'Count of $0.10 Coins',
                multiplier: 0.10,
                amount: 0,
            },
            nickels: {
                label: 'Count of $0.05 Coins',
                multiplier: 0.05,
                amount: 0,
            },
        };
        return cashDesk;
    }
}