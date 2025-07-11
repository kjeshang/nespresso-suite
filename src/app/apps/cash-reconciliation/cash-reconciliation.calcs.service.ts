import { Injectable } from '@angular/core';
import { CashDesk } from './cash-reconciliation.models';
import currency from 'currency.js';

@Injectable({
  providedIn: 'root',
})
export class CashReconciliationCalcsService {
  calculateCumulativeTotals(
    cashDesk: Partial<CashDesk>,
    cashJournalAmount: number
  ) {
    let totalAmount: number = 0;
    for (const [key, value] of Object.entries(cashDesk)) {
      totalAmount += currency(value.amount).value;
    }
    const difference: number = totalAmount - cashJournalAmount;
    let outcome: string = '';
    if (difference < 0) {
      outcome = 'Short';
    } else if (difference > 0) {
      outcome = 'Over';
    } else {
      outcome = 'Balanced';
    }
    return { totalAmount, difference, outcome };
  }
}
