import { Component, inject } from '@angular/core';
import {
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
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskA').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskA').outcome,
      },
      B: {
        ...newStoreConfiguration['B']!,
        pos: {
          ...newStoreConfiguration['B']!.pos,
          posAmount: 0,
        },
        register: {
          ...newStoreConfiguration['B']!.register,
          registerAmount: 0,
        },
        terminal: {
          ...newStoreConfiguration['B']!.terminal,
          terminalAmount: 0,
        },
        difference: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskB').difference,
        outcome: this.cardReconciliationCalcsService.calculateDifference(this.cardReconciliationForm, 'salesDeskB').outcome,
      },
    };
    this.cardReconciliationStore.updateStoreConfiguration(
      newStoreConfiguration
    );
  }
}
