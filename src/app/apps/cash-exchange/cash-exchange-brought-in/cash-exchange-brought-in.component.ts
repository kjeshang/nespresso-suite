import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CashExchangeStore } from '../cash-exchange.store';
import { DenominationBroughtIn } from '../cash-exchange.models';

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

  ngOnInit(): void {
    this.sortedDenominationBroughtIn = Object.entries(
      this.cashExchangeStore.moneyBroughtIn()
    )
      .map(([key, val]) => ({ key, ...val! }))
      .sort((a, b) => b.denomination - a.denomination);
  }
}
