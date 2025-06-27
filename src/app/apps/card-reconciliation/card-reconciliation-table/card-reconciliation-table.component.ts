import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CardReconciliationStore } from '../card-reconciliation.store';
import { CommonModule } from '@angular/common';
import { CardReconciliationCalcsService } from '../card-reconciliation.calcs.service';

@Component({
  selector: 'app-card-reconciliation-table',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './card-reconciliation-table.component.html',
  styleUrl: './card-reconciliation-table.component.scss',
})
export class CardReconciliationTableComponent {
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
      // Sales Desk A
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
      // Sales Desk B
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
      // Sales Desk D
      D: {
        ...newStoreConfiguration['D']!,
        pos: {
          ...newStoreConfiguration['D']!.pos,
          posAmount: parentFormGroup.get('salesDeskD')?.value['posAmount'],
        },
        register: {
          ...newStoreConfiguration['D']!.register,
          registerAmount: parentFormGroup.get('salesDeskD')?.value['registerAmount'],
        },
        terminal: {
          ...newStoreConfiguration['D']!.terminal,
          terminalAmount: parentFormGroup.get('salesDeskD')?.value['terminalAmount'],
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskD').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskD').outcome,
      },
      // Sales Desk E
      E: {
        ...newStoreConfiguration['E']!,
        pos: {
          ...newStoreConfiguration['E']!.pos,
          posAmount: parentFormGroup.get('salesDeskE')?.value['posAmount'],
        },
        register: {
          ...newStoreConfiguration['D']!.register,
          registerAmount: parentFormGroup.get('salesDeskE')?.value['registerAmount'],
        },
        terminal: {
          ...newStoreConfiguration['D']!.terminal,
          terminalAmount: parentFormGroup.get('salesDeskE')?.value['terminalAmount'],
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskE').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskE').outcome,
      },
      // Sales Desk F
      F: {
        ...newStoreConfiguration['F']!,
        pos: {
          ...newStoreConfiguration['F']!.pos,
          posAmount: parentFormGroup.get('salesDeskF')?.value['posAmount'],
        },
        register: {
          ...newStoreConfiguration['F']!.register,
          registerAmount: parentFormGroup.get('salesDeskF')?.value['registerAmount'],
        },
        terminal: {
          ...newStoreConfiguration['F']!.terminal,
          terminalAmount: parentFormGroup.get('salesDeskF')?.value['terminalAmount'],
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskF').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskF').outcome,
      },
    };
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }
}
