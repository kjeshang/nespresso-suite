import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CashReconciliationTableComponent } from '../cash-reconciliation-table/cash-reconciliation-table.component';
import { CashReconciliationSummaryComponent } from '../cash-reconciliation-summary/cash-reconciliation-summary.component';

@Component({
  selector: 'app-cash-reconciliation-page',
  imports: [FeatureContainerComponent, CashReconciliationTableComponent, CashReconciliationSummaryComponent],
  templateUrl: './cash-reconciliation-page.component.html',
  styleUrl: './cash-reconciliation-page.component.scss'
})
export class CashReconciliationPageComponent {

}
