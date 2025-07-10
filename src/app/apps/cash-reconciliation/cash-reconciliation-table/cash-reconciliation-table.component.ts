import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CashReconciliationDbService } from '../cash-reconciliation.db.service';
import { CashReconciliationStore } from '../cash-reconciliation.store';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cash-reconciliation-table',
  imports: [MatButtonModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './cash-reconciliation-table.component.html',
  styleUrl: './cash-reconciliation-table.component.scss'
})
export class CashReconciliationTableComponent implements OnInit {
  cashReconciliationStore = inject(CashReconciliationStore);
  cashReconciliationDbService = inject(CashReconciliationDbService);

  cashReconciliationForm: FormGroup = this.cashReconciliationDbService.getCashReconciliationForm();

  sortedCashDeskEntries: { key: string; label: string; multiplier: number; amount: number }[] = [];

  ngOnInit(): void {
    this.sortedCashDeskEntries = Object.entries(this.cashReconciliationStore.cashDesk())
    .map(([key, val]) => ({ key, ...val! }))
    .sort((a, b) => b.multiplier - a.multiplier);
  }
}
