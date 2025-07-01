import { Component, inject, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CommonModule } from '@angular/common';
import { CardReconciliationCalcsService } from '../card-reconciliation.calcs.service';
import { MatButtonModule } from '@angular/material/button';
import { CardReconciliationDbService } from '../card-reconciliation.db.service';
import { StoreConfiguration } from '../card-reconciliation.models';

@Component({
  selector: 'app-card-reconciliation-table',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './card-reconciliation-table.component.html',
  styleUrl: './card-reconciliation-table.component.scss',
})
export class CardReconciliationTableComponent {
  cardReconciliationStore = inject(CardReconciliationStore);
  cardReconciliationCalcsService = inject(CardReconciliationCalcsService);
  cardReconciliationDbService: CardReconciliationDbService = inject(CardReconciliationDbService);

  @Input() cardReconciliationForm!: FormGroup;

  onInputUpdateStoreConfiguration(): void {
    const newStoreConfiguration: Partial<StoreConfiguration> = this.cardReconciliationDbService.onInputUpdateStoreConfiguration(
      this.cardReconciliationForm,
      this.cardReconciliationStore.storeConfiguration()
    );
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }

  resetForm(): void {
    this.cardReconciliationForm.reset();
    const newStoreConfiguration: Partial<StoreConfiguration> = this.cardReconciliationDbService.onInputUpdateStoreConfiguration(
      this.cardReconciliationForm,
      this.cardReconciliationStore.storeConfiguration(),
      0,
      'Balanced'
    );
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }
}
