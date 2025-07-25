import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CashExchangeStore } from '../cash-exchange.store';
import { DenominationBroughtIn, MoneyBroughtIn } from '../cash-exchange.models';
import currency from 'currency.js';
import { isNil } from 'lodash';

@Component({
  selector: 'app-cash-exchange-brought-in',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './cash-exchange-brought-in.component.html',
  styleUrl: './cash-exchange-brought-in.component.scss',
})
export class CashExchangeBroughtInComponent implements OnInit {
  cashExchangeStore = inject(CashExchangeStore);
  private fb: FormBuilder = inject(FormBuilder);

  sortedDenominationBroughtIn: DenominationBroughtIn[] = [];

  moneyBroughtIn: FormGroup = this.fb.group({
    hundreds: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    fifties: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    twenties: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    tens: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    fives: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    toonies: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    loonies: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    quarters: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    dimes: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
    nickels: this.fb.group({
      countOfBillRollsOfCoin: [''],
    }),
  });

  onCountOfBillCoinRollInput(
    formGroupName: string,
    denomination: number,
    amountPerRoll: number | undefined
  ): number {
    if (!isNil(amountPerRoll)) {
      return currency(
        this.moneyBroughtIn.get(formGroupName)?.get('countOfBillRollsOfCoin')
          ?.value
      ).multiply(amountPerRoll).value;
    } else {
      return currency(
        this.moneyBroughtIn.get(formGroupName)?.get('countOfBillRollsOfCoin')
          ?.value
      ).multiply(denomination).value;
    }
  }

  detectCountOfBillCoinRollInput(resetValue?: number): void {
    let newMoneyBroughtIn: Partial<MoneyBroughtIn> = {
      ...this.cashExchangeStore.moneyBroughtIn(),
    };

    for (const [key, value] of Object.entries(newMoneyBroughtIn)) {
      if (newMoneyBroughtIn[key]) {
        const countOfBillCoinRoll: number = this.moneyBroughtIn
          .get(key)
          ?.get('countOfBillRollsOfCoin')?.value;
        let cashValue: number = 0;
        if (!isNil(value?.amountPerRoll)) {
          cashValue = currency(countOfBillCoinRoll).multiply(
            value.amountPerRoll
          ).value;
        } else {
          cashValue = currency(countOfBillCoinRoll).multiply(
            value?.denomination!
          ).value;
        }
        newMoneyBroughtIn[key] = {
          ...value!,
          countOfBillRollsOfCoin: resetValue ?? countOfBillCoinRoll,
          cashValue: resetValue ?? cashValue,
        };
      }
      this.cashExchangeStore.updateMoneyBroughtIn(newMoneyBroughtIn);
    }
  }

  resetMoneyBroughtIn(): void {
    this.moneyBroughtIn.reset();
    this.detectCountOfBillCoinRollInput(0);
  }

  ngOnInit(): void {
    this.sortedDenominationBroughtIn = Object.entries(
      this.cashExchangeStore.moneyBroughtIn()
    )
      .map(([key, val]) => ({ key, ...val! }))
      .sort((a, b) => b.denomination - a.denomination);
  }
}
