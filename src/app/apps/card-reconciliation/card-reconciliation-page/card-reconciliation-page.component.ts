import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { ReconciliationTableComponent } from '../reconciliation-table/reconciliation-table.component';

@Component({
  selector: 'app-card-reconciliation-page',
  imports: [FeatureContainerComponent, ReconciliationTableComponent],
  templateUrl: './card-reconciliation-page.component.html',
  styleUrl: './card-reconciliation-page.component.scss'
})
export class CardReconciliationPageComponent {

}
