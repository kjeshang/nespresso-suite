import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CashReconciliationDbService } from '../cash-reconciliation.db.service';
import { CashReconciliationStore } from '../cash-reconciliation.store';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cash-reconciliation-table',
  imports: [MatButtonModule],
  templateUrl: './cash-reconciliation-table.component.html',
  styleUrl: './cash-reconciliation-table.component.scss'
})
export class CashReconciliationTableComponent {
  cashReconciliationStore = inject(CashReconciliationStore);
  cashReconciliationDbService = inject(CashReconciliationDbService);

  cardReconciliationForm: FormGroup = this.cashReconciliationDbService.getCashReconciliationForm();

  
}
