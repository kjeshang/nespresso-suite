import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CardReconciliationCalcsService } from '../card-reconciliation.calcs.service';

@Component({
  selector: 'app-card-reconciliation-grid',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
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

  onInputUpdateStoreConfiguration(): void {
    const parentFormGroup: AbstractControl = this.cardReconciliationForm;
    let newStoreConfiguration =
      this.cardReconciliationStore.storeConfiguration();
    newStoreConfiguration = {
      A: {
        ...newStoreConfiguration['A']!,
        pos: {
          ...newStoreConfiguration['A']!.pos,
          posAmount: parentFormGroup.get('salesDeskA')?.value['posAmount'],
        },
        register: {
          ...newStoreConfiguration['A']!.register,
          registerAmount: parentFormGroup.get('salesDeskA')?.value['registerAmount'],
        },
        terminal: {
          ...newStoreConfiguration['A']!.terminal,
          terminalAmount: parentFormGroup.get('salesDeskA')?.value['terminalAmount'],
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskA').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskA').outcome,
      },
      B: {
        ...newStoreConfiguration['B']!,
        pos: {
          ...newStoreConfiguration['B']!.pos,
          posAmount: parentFormGroup.get('salesDeskB')?.value['posAmount'],
        },
        register: {
          ...newStoreConfiguration['B']!.register,
          registerAmount: parentFormGroup.get('salesDeskB')?.value['registerAmount'],
        },
        terminal: {
          ...newStoreConfiguration['B']!.terminal,
          terminalAmount: parentFormGroup.get('salesDeskB')?.value['terminalAmount'],
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskB').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskB').outcome,
      },
    };
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
    console.log(this.cardReconciliationStore.storeConfiguration());
  }

}
