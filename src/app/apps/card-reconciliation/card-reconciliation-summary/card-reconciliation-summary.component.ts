import { Component, inject } from '@angular/core';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-reconciliation-summary',
  imports: [CommonModule],
  templateUrl: './card-reconciliation-summary.component.html',
  styleUrl: './card-reconciliation-summary.component.scss'
})
export class CardReconciliationSummaryComponent {
  cardReconciliationStore = inject(CardReconciliationStore);
}
