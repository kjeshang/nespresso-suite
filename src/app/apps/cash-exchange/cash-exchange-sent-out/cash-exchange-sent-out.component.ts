import { Component, inject, OnInit } from '@angular/core';
import { CashExchangeStore } from '../cash-exchange.store';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DenominationSentOut, MoneySentOut } from '../cash-exchange.models';
import currency from 'currency.js';

@Component({
  selector: 'app-cash-exchange-sent-out',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './cash-exchange-sent-out.component.html',
  styleUrl: './cash-exchange-sent-out.component.scss',
})
export class CashExchangeSentOutComponent implements OnInit {
  cashExchangeStore = inject(CashExchangeStore);
  private fb: FormBuilder = inject(FormBuilder);

  sortedDenominationSentOut: DenominationSentOut[] = [];

  moneySentOutForm: FormGroup = this.fb.group({
    hundreds: this.fb.group({
      countOfBillCoin: [''],
    }),
    fifties: this.fb.group({
      countOfBillCoin: [''],
    }),
    twenties: this.fb.group({
      countOfBillCoin: [''],
    }),
    tens: this.fb.group({
      countOfBillCoin: [''],
    }),
    fives: this.fb.group({
      countOfBillCoin: [''],
    }),
    toonies: this.fb.group({
      countOfBillCoin: [''],
    }),
    loonies: this.fb.group({
      countOfBillCoin: [''],
    }),
    quarters: this.fb.group({
      countOfBillCoin: [''],
    }),
    dimes: this.fb.group({
      countOfBillCoin: [''],
    }),
    nickels: this.fb.group({
      countOfBillCoin: [''],
    }),
  });

  onCountOfBillCoinInput(formGroupName: string, denomination: number): number {
    return currency(
      this.moneySentOutForm.get(formGroupName)?.get('countOfBillCoin')?.value
    ).multiply(denomination).value;
  }

  detectCountOfBillCoinInput(resetValue?: number): void {
    let newMoneySentOut: Partial<MoneySentOut> = {
      ...this.cashExchangeStore.moneySentOut(),
    };

    for (const [key, value] of Object.entries(newMoneySentOut)) {
      if (newMoneySentOut[key]!) {
        const countOfBillCoin: number =
          this.moneySentOutForm.get(key)?.get('countOfBillCoin')?.value;
        const cashValue: number = currency(countOfBillCoin).multiply(
          value!.denomination
        ).value;
        newMoneySentOut[key] = {
          ...value!,
          countOfBillCoin: resetValue ?? countOfBillCoin,
          cashValue: resetValue ?? cashValue,
        };
      }
    }
    this.cashExchangeStore.updateMoneySentOut(newMoneySentOut);
  }

  ngOnInit(): void {
    this.sortedDenominationSentOut = Object.entries(
      this.cashExchangeStore.moneySentOut()
    )
      .map(([key, val]) => ({ key, ...val! }))
      .sort((a, b) => b.denomination - a.denomination);
  }
}
