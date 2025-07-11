import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CashDesk } from "./cash-reconciliation.models";

@Injectable({ providedIn: 'root' })
export class CashReconciliationDbService {
    http: HttpClient = inject(HttpClient);
    private fb: FormBuilder = inject(FormBuilder);

    async getCashDesk(): Promise<Partial<CashDesk>> {
        let cashDesk: Partial<CashDesk> = {
            hundreds: {
                label: 'Count of $100 Bills',
                multiplier: 100,
                count: 0,
                amount: 0,
            },
            fifties: {
                label: 'Count of $50 Bills',
                multiplier: 50,
                count: 0,
                amount: 0,
            },
            twenties: {
                label: 'Count of $20 Bills',
                multiplier: 20,
                count: 0,
                amount: 0,
            },
            tens: {
                label: 'Count of $10 Bills',
                multiplier: 10,
                count: 0,
                amount: 0,
            },
            fives: {
                label: 'Count of $5 Bills',
                multiplier: 5,
                count: 0,
                amount: 0,
            },
            toonies: {
                label: 'Count of $2 Coins',
                multiplier: 2,
                count: 0,
                amount: 0
            },
            loonies: {
                label: 'Count of $1 Coins',
                multiplier: 1, 
                count: 0,
                amount: 0,
            },
            quarters: {
                label: 'Count of $0.25 Coins',
                multiplier: 0.25,
                count: 0,
                amount: 0,
            },
            dimes: {
                label: 'Count of $0.10 Coins',
                multiplier: 0.10,
                count: 0,
                amount: 0,
            },
            nickels: {
                label: 'Count of $0.05 Coins',
                multiplier: 0.05,
                count: 0,
                amount: 0,
            },
        };
        return cashDesk;
    }

    getCashReconciliationForm(): FormGroup {
        return this.fb.group({
            hundreds: this.fb.group({
                count: ['']
            }),
            fifties: this.fb.group({
                count: ['']
            }),
            twenties: this.fb.group({
                count: ['']
            }),
            tens: this.fb.group({
                count: ['']
            }),
            fives: this.fb.group({
                count: ['']
            }),
            toonies: this.fb.group({
                count: ['']
            }),
            loonies: this.fb.group({
                count: ['']
            }),
            quarters: this.fb.group({
                count: ['']
            }),
            dimes: this.fb.group({
                count: ['']
            }),
            nickels: this.fb.group({
                count: ['']
            })
        });
    }
}