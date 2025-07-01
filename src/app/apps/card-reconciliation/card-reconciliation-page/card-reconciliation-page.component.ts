import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CardReconciliationTableComponent } from '../card-reconciliation-table/card-reconciliation-table.component';
import { CardReconciliationGridComponent } from '../card-reconciliation-grid/card-reconciliation-grid.component';
import { FormGroup } from '@angular/forms';
import { CardReconciliationDbService } from '../card-reconciliation.db.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-reconciliation-page',
  imports: [
    FeatureContainerComponent,
    CardReconciliationTableComponent,
    CardReconciliationGridComponent,
    MatButtonModule
  ],
  templateUrl: './card-reconciliation-page.component.html',
  styleUrl: './card-reconciliation-page.component.scss',
})
export class CardReconciliationPageComponent {
  cardReconciliationDbService: CardReconciliationDbService = inject(
    CardReconciliationDbService
  );
  cardReconciliationForm: FormGroup =
    this.cardReconciliationDbService.getCardReconciliationForm();
  
  
}
