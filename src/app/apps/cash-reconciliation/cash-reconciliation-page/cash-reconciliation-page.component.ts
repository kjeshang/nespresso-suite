import { Component, ViewChild } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CashReconciliationTableComponent } from '../cash-reconciliation-table/cash-reconciliation-table.component';
import { CashReconciliationSummaryComponent } from '../cash-reconciliation-summary/cash-reconciliation-summary.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cash-reconciliation-page',
  imports: [FeatureContainerComponent, CashReconciliationTableComponent, CashReconciliationSummaryComponent, MatButtonModule],
  templateUrl: './cash-reconciliation-page.component.html',
  styleUrl: './cash-reconciliation-page.component.scss'
})
export class CashReconciliationPageComponent {
  @ViewChild(CashReconciliationTableComponent) cashReconciliationTableComponent!: CashReconciliationTableComponent;
  @ViewChild(CashReconciliationSummaryComponent) cashReconciliationSummaryComponent!: CashReconciliationSummaryComponent;

  onResetClick(): void {
    this.cashReconciliationTableComponent.resetCashReconciliationForm();
    this.cashReconciliationSummaryComponent.onSelectShift();
  }

  printPage(): void {
    window.print();
  }
}
