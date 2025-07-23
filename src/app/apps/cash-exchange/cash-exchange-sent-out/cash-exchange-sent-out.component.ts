import { Component, inject } from '@angular/core';
import { CashExchangeStore } from '../cash-exchange.store';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cash-exchange-sent-out',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cash-exchange-sent-out.component.html',
  styleUrl: './cash-exchange-sent-out.component.scss'
})
export class CashExchangeSentOutComponent {
  cashExchangeStore = inject(CashExchangeStore);
  private fb: FormBuilder = inject(FormBuilder);
  
  cashSentOutForm: FormGroup = this.fb.group({
    hundreds: this.fb.group({
      countOfBillCoin: ['']
    }),
    fifties: this.fb.group({
      countOfBillCoin: ['']
    }),
    twenties: this.fb.group({
      countOfBillCoin: ['']
    }),
    tens: this.fb.group({
      countOfBillCoin: ['']
    }),
    fives: this.fb.group({
      countOfBillCoin: ['']
    }),
    toonies: this.fb.group({
      countOfBillCoin: ['']
    }),
    loonies: this.fb.group({
      countOfBillCoin: ['']
    }),
    quarters: this.fb.group({
      countOfBillCoin: ['']
    }),
    dimes: this.fb.group({
      countOfBillCoin: ['']
    }),
    nickels: this.fb.group({
      countOfBillCoin: ['']
    }),
  });
}
