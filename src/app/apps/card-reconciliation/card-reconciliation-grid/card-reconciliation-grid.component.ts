import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  cardReconciliationForm: FormGroup =
    this.cardReconciliationDbService.getCardReconciliationForm();

  onInputUpdateStoreConfiguration(
    resetValue?: 0,
    resetOutcome?: 'Balanced'
  ): void {
    const parentFormGroup: AbstractControl = this.cardReconciliationForm;
    let newStoreConfiguration =
      this.cardReconciliationStore.storeConfiguration();
    for (const [key, value] of Object.entries(newStoreConfiguration)) {
      newStoreConfiguration[key] = {
        ...value!,
        pos: {
          ...value?.pos!,
          posAmount:
            resetValue ??
            parentFormGroup.get(`salesDesk${key.toString()}`)?.value[
              'posAmount'
            ],
        },
        register: {
          ...value?.register!,
          registerAmount:
            resetValue ??
            parentFormGroup.get(`salesDesk${key.toString()}`)?.value[
              'registerAmount'
            ],
        },
        terminal: {
          ...value?.terminal!,
          terminalAmount:
            resetValue ??
            parentFormGroup.get(`salesDesk${key.toString()}`)?.value[
              'terminalAmount'
            ],
        },
        difference:
          resetValue ??
          this.cardReconciliationCalcsService.calculateDifference(
            this.cardReconciliationForm,
            `salesDesk${key.toString()}`
          ).difference,
        outcome:
          resetOutcome ??
          this.cardReconciliationCalcsService.calculateDifference(
            this.cardReconciliationForm,
            `salesDesk${key.toString()}`
          ).outcome,
      };
    }
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }

  resetForm(): void {
    this.cardReconciliationForm.reset();
    this.onInputUpdateStoreConfiguration(0, 'Balanced');
  }
}
