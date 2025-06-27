import { Injectable } from '@angular/core';
import { StoreConfiguration } from './card-reconciliation.models';
import currency from 'currency.js';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CardReconciliationCalcsService {
  calculateDifference(
    parentFormGroup: FormGroup,
    formGroupName: string
  ): {
    difference: number;
    outcome: string;
  } {
    const formGroup: AbstractControl = parentFormGroup.get(formGroupName)!;
    const terminalAmount: number = currency(
      formGroup.value['terminalAmount']
    ).value;
    const posAmount: number = currency(formGroup.value['posAmount']).value;
    const registerAmount: number = currency(
      formGroup.value['registerAmount']
    ).value;
    const cashJournalAmount: number =
      currency(posAmount).add(registerAmount).value;
    const difference: number =
      currency(terminalAmount).subtract(cashJournalAmount).value;
    let outcome: string = '';
    if (difference < 0) {
      outcome = 'Short';
    } else if (difference > 0) {
      outcome = 'Over';
    } else {
      outcome = 'Balanced';
    }
    return { difference, outcome };
  }

  calculateCumulativeTotals(storeConfiguration: Partial<StoreConfiguration>): {
    cashJournalAmount: number;
    terminalAmount: number;
    difference: number;
    outcome: string;
  } {
    let cashJournalAmount: number = 0;
    let terminalAmount: number = 0;
    let difference: number = 0;
    let outcome: string = '';
    for (const [key, value] of Object.entries(storeConfiguration)) {
      console.log('Sales Desk:', key);
      cashJournalAmount += currency(value!.pos.posAmount).add(
        value!.register.registerAmount
      ).value;
      terminalAmount += currency(value!.terminal.terminalAmount).value;
      difference += currency(value!.difference).value;
    }
    if (difference < 0) {
      outcome = 'Short';
    } else if (difference > 0) {
      outcome = 'Over';
    } else {
      outcome = 'Balanced';
    }
    return { cashJournalAmount, terminalAmount, difference, outcome };
  }
}
