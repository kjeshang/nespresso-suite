import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CashReconciliationStore } from '../cash-reconciliation.store';

@Component({
  selector: 'app-cash-reconciliation-summary',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './cash-reconciliation-summary.component.html',
  styleUrl: './cash-reconciliation-summary.component.scss'
})
export class CashReconciliationSummaryComponent implements OnInit {
  cashReconciliationStore = inject(CashReconciliationStore);
  selectedShiftFormControl: FormControl = new FormControl('Opening');
  cashJournalAmountFormControl: FormControl = new FormControl(this.cashReconciliationStore.cashJournalAmount());

  onSelectShift(): void {
    this.cashReconciliationStore.updateSelectedShift(this.selectedShiftFormControl.value);
    let cashJournalAmount: number = 0;
    if(this.cashReconciliationStore.selectedShift() === 'Opening') {
      cashJournalAmount = 300;
    }
    else {
      cashJournalAmount = 0;
    }
    this.cashJournalAmountFormControl.setValue(cashJournalAmount);
    this.cashReconciliationStore.updateCashJournalAmount(this.cashJournalAmountFormControl.value);
  }

  onInputCashJournalAmount(): void {
    this.cashReconciliationStore.updateCashJournalAmount(this.cashJournalAmountFormControl.value);
  }

  ngOnInit(): void {
    if(this.cashReconciliationStore.selectedShift() === 'Opening'){
      this.cashReconciliationStore.updateCashJournalAmount(300);
      this.cashJournalAmountFormControl.setValue(300);
    }
  }
}
