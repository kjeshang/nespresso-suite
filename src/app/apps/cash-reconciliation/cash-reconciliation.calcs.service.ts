import { Injectable } from '@angular/core';
import { CashDesk } from './cash-reconciliation.models';
import currency from 'currency.js';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CashReconciliationCalcsService {
  calculateCumulativeTotals(
    cashDesk: Partial<CashDesk>,
    cashJournalAmount: number,
    selectedShift: 'Opening' | 'Closing'
  ): { totalAmount: number; difference: number; outcome: string } {
    let totalAmount: number = 0;
    for (const [key, value] of Object.entries(cashDesk)) {
      totalAmount += currency(value.amount).value;
    }
    if (selectedShift === 'Closing') {
      totalAmount = currency(totalAmount).subtract(300).value;
    }
    const difference: number =
      currency(totalAmount).subtract(cashJournalAmount).value;
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

  setDeposit(
    cashDesk: Partial<CashDesk>,
    cashJournalAmount: number,
    selectedShift: 'Opening' | 'Closing'
  ) {
    const cumulativeTotals: {
      totalAmount: number;
      difference: number;
      outcome: string;
    } = this.calculateCumulativeTotals(
      cashDesk,
      cashJournalAmount,
      selectedShift
    );
    const eodEarnings: number = cumulativeTotals.totalAmount;
    let depositAmount: number = 0;
    let depositBreakdown: {
      cashDenomination: number;
      countOfBillCoin: number;
      cashValue: number;
    }[] = [];
    for (const [key, value] of Object.entries(cashDesk)) {
      let count: number = value.count;
      if (isNil(value.count)) {
        count = 0;
      }
      let interimAmount: number = currency(depositAmount)
        .add(value.multiplier)
        .multiply(count).value;
      while (interimAmount > eodEarnings && count > 0) {
        count -= 1;
        interimAmount = currency(depositAmount)
          .add(value.multiplier)
          .multiply(count).value;
      }
      depositAmount += currency(value.multiplier).multiply(count).value;
      depositBreakdown.push({
        cashDenomination: value.multiplier,
        countOfBillCoin: count,
        cashValue: currency(value.multiplier).multiply(count).value,
      });
    }
    return { depositAmount, depositBreakdown };
  }
}
