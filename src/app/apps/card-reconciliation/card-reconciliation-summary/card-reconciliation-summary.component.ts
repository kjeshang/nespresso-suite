import { Component, inject } from '@angular/core';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';


@Component({
  selector: 'app-card-reconciliation-summary',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, TextFieldModule],
  templateUrl: './card-reconciliation-summary.component.html',
  styleUrl: './card-reconciliation-summary.component.scss'
})
export class CardReconciliationSummaryComponent {
  cardReconciliationStore = inject(CardReconciliationStore);
}
