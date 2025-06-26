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
import currency from 'currency.js';

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

  calculateDifference(formGroupName: string): {
    difference: number;
    outcome: string;
  } {
    const formGroup: AbstractControl =
      this.cardReconciliationForm.get(formGroupName)!;
    const terminalAmount: number = currency(
      formGroup.value['terminalAmount']
    ).value;
    const posAmount: number = currency(formGroup.value['posAmount']).value;
    const registerAmount: number = currency(
      formGroup.value['registerAmount']
    ).value;
    const cashJournalAmount: number =
      currency(posAmount).add(registerAmount).value;
    const difference: number =
      currency(terminalAmount).subtract(cashJournalAmount).value;
    let outcome: string = '';
    if (difference < 0) {
      outcome = 'Short';
    } else if (difference > 0) {
      outcome = 'Over';
    } else {
      outcome = 'Balanced';
    }
    return { difference, outcome };
  }

  onInputUpdateStoreConfiguration(): void {
    let newStoreConfiguration =
      this.cardReconciliationStore.storeConfiguration();
    newStoreConfiguration = {
      A: {
        ...newStoreConfiguration['A']!,
        pos: {
          ...newStoreConfiguration['A']!.pos,
          posAmount: 0,
        },
        register: {
          ...newStoreConfiguration['A']!.register,
          registerAmount: 0,
        },
        terminal: {
          ...newStoreConfiguration['A']!.terminal,
          terminalAmount: 0,
        },
        difference: this.calculateDifference('salesDeskA').difference,
        outcome: this.calculateDifference('salesDeskA').outcome,
      },
    };
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }
}
