import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CardReconciliationTableComponent } from "../card-reconciliation-table/card-reconciliation-table.component";
import { CardReconciliationGridComponent } from '../card-reconciliation-grid/card-reconciliation-grid.component';

@Component({
  selector: 'app-card-reconciliation-page',
  imports: [FeatureContainerComponent, CardReconciliationTableComponent, CardReconciliationGridComponent],
  templateUrl: './card-reconciliation-page.component.html',
  styleUrl: './card-reconciliation-page.component.scss'
})
export class CardReconciliationPageComponent {

}
