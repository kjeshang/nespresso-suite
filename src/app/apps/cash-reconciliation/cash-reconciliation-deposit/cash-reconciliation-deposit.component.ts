import { Component, inject } from '@angular/core';
import { CashReconciliationStore } from '../cash-reconciliation.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cash-reconciliation-deposit',
  imports: [CommonModule],
  templateUrl: './cash-reconciliation-deposit.component.html',
  styleUrl: './cash-reconciliation-deposit.component.scss'
})
export class CashReconciliationDepositComponent {
  cashReconciliationStore = inject(CashReconciliationStore);
  

}
