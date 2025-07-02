import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CardReconciliationCalcsService } from '../card-reconciliation.calcs.service';
import { MatButtonModule } from '@angular/material/button';
import { CardReconciliationDbService } from '../card-reconciliation.db.service';
import { StoreConfiguration } from '../card-reconciliation.models';

@Component({
  selector: 'app-card-reconciliation-grid',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './card-reconciliation-grid.component.html',
  styleUrl: './card-reconciliation-grid.component.scss',
})
export class CardReconciliationGridComponent {
  cardReconciliationStore = inject(CardReconciliationStore);
  cardReconciliationCalcsService = inject(CardReconciliationCalcsService);
  cardReconciliationDbService: CardReconciliationDbService = inject(
    CardReconciliationDbService
  );

  cardReconciliationForm: FormGroup = this.cardReconciliationDbService.getCardReconciliationForm();

  onInputUpdateStoreConfiguration(): void {
    const newStoreConfiguration: Partial<StoreConfiguration> =
      this.cardReconciliationDbService.onInputUpdateStoreConfiguration(
        this.cardReconciliationForm,
        this.cardReconciliationStore.storeConfiguration()
      );
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }

  resetForm(): void {
    this.cardReconciliationForm.reset();
    const newStoreConfiguration: Partial<StoreConfiguration> =
      this.cardReconciliationDbService.onInputUpdateStoreConfiguration(
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
