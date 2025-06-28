import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CardReconciliationCalcsService } from '../card-reconciliation.calcs.service';
import { MatButtonModule } from '@angular/material/button';

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
  styleUrl: './card-reconciliation-grid.component.scss'
})
export class CardReconciliationGridComponent {
  private fb: FormBuilder = inject(FormBuilder);
  cardReconciliationStore = inject(CardReconciliationStore);
  cardReconciliationCalcsService = inject(CardReconciliationCalcsService);

  cardReconciliationForm: FormGroup = this.fb.group({
    salesDeskA: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
    salesDeskB: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
    salesDeskD: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
    salesDeskE: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
    salesDeskF: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
    salesDeskG: this.fb.group({
      posAmount: [''],
      registerAmount: [''],
      terminalAmount: [''],
    }),
  });

  onInputUpdateStoreConfiguration(resetValue?: 0, resetOutcome?: 'Balanced'): void {
    const parentFormGroup: AbstractControl = this.cardReconciliationForm;
    let newStoreConfiguration =
      this.cardReconciliationStore.storeConfiguration();
    for(const [key, value] of Object.entries(newStoreConfiguration)){
      newStoreConfiguration[key] = {
        ...value!,
        pos: {
          ...value?.pos!,
          posAmount: resetValue ?? parentFormGroup.get(`salesDesk${key.toString()}`)?.value['posAmount'],
        },
        register: {
          ...value?.register!,
          registerAmount: resetValue ?? parentFormGroup.get(`salesDesk${key.toString()}`)?.value['registerAmount'],
        },
        terminal: {
          ...value?.terminal!,
          terminalAmount: resetValue ?? parentFormGroup.get(`salesDesk${key.toString()}`)?.value['terminalAmount'],
        },
        difference: resetValue ?? this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, `salesDesk${key.toString()}`).difference,
        outcome: resetOutcome ?? this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, `salesDesk${key.toString()}`).outcome,
      };
    }
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }

  resetForm(): void {
    this.cardReconciliationForm.reset();
    this.onInputUpdateStoreConfiguration(0, 'Balanced');
    console.log(this.cardReconciliationStore.storeConfiguration());
  }

}
