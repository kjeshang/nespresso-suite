import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CashReconciliationDbService } from '../cash-reconciliation.db.service';
import { CashReconciliationStore } from '../cash-reconciliation.store';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import currency from 'currency.js';
import { CashDesk, DenominationKey } from '../cash-reconciliation.models';

@Component({
  selector: 'app-cash-reconciliation-table',
  imports: [
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './cash-reconciliation-table.component.html',
  styleUrl: './cash-reconciliation-table.component.scss',
})
export class CashReconciliationTableComponent implements OnInit {
  cashReconciliationStore = inject(CashReconciliationStore);
  cashReconciliationDbService = inject(CashReconciliationDbService);

  cashReconciliationForm: FormGroup =
    this.cashReconciliationDbService.getCashReconciliationForm();

  sortedCashDeskEntries: {
    key: string;
    label: string;
    multiplier: number;
    count: number;
    amount: number;
  }[] = [];

  onCountOfBillCoinInput(formGroupName: string, multiplier: number): number {
    return currency(
      this.cashReconciliationForm.get(formGroupName)?.get('count')?.value
    ).multiply(multiplier).value;
  }

  detectCountOfBillCoinInput(): void {
    const newCashDesk: Partial<
      Record<DenominationKey, CashDesk[DenominationKey]>
    > = {
      ...this.cashReconciliationStore.cashDesk(),
    };

    for (const key of Object.keys(newCashDesk) as DenominationKey[]) {
      if (newCashDesk[key]) {
        const count: number = this.cashReconciliationForm
          .get(key)
          ?.get('count')?.value;
        const amount: number = currency(count).multiply(
          newCashDesk[key].multiplier
        ).value;
        newCashDesk[key] = {
          ...newCashDesk[key],
          count: count,
          amount: amount,
        };
      }
    }
    this.cashReconciliationStore.updateCashDesk(newCashDesk as Partial<CashDesk>);
    this.cashReconciliationStore.cashDesk()['hundreds']?.amount
  }

  ngOnInit(): void {
    this.sortedCashDeskEntries = Object.entries(
      this.cashReconciliationStore.cashDesk()
    )
      .map(([key, val]) => ({ key, ...val! }))
      .sort((a, b) => b.multiplier - a.multiplier);
  }
}
