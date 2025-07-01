import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StoreConfiguration } from './card-reconciliation.models';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CardReconciliationCalcsService } from './card-reconciliation.calcs.service';

@Injectable({ providedIn: 'root' })
export class CardReconciliationDbService {
  http: HttpClient = inject(HttpClient);
  private fb: FormBuilder = inject(FormBuilder);
  cardReconciliationCalcsService = inject(CardReconciliationCalcsService);

  async getStoreConfiguration(): Promise<Partial<StoreConfiguration>> {
    let storeConfiguration: Partial<StoreConfiguration> = {
      A: {
        salesDesk: 'A',
        tillNumber: 1,
        pos: {
          label: 'POS 1 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 1 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 1 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
      B: {
        salesDesk: 'B',
        tillNumber: 2,
        pos: {
          label: 'POS 2 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 2 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 2 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
      D: {
        salesDesk: 'D',
        tillNumber: 4,
        pos: {
          label: 'POS 4 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 4 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 4 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
      E: {
        salesDesk: 'E',
        tillNumber: 7,
        pos: {
          label: 'POS 7 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 7 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 7 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
      F: {
        salesDesk: 'F',
        tillNumber: 6,
        pos: {
          label: 'POS 6 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 6 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 6 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
      G: {
        salesDesk: 'G',
        tillNumber: 5,
        pos: {
          label: 'POS 5 Amount',
          posAmount: 0,
        },
        register: {
          label: 'Register 5 Amount',
          registerAmount: 0,
        },
        terminal: {
          label: 'Terminal 5 Amount',
          terminalAmount: 0,
        },
        difference: 0,
        outcome: 'Balanced',
      },
    };
    return storeConfiguration;
  }

  getCardReconciliationForm(): FormGroup {
    return this.fb.group({
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
  }

  onInputUpdateStoreConfiguration(
    parentFormGroup: FormGroup,
    storeConfiguration: Partial<StoreConfiguration>,
    resetValue?: 0,
    resetOutcome?: 'Balanced'
  ): Partial<StoreConfiguration> {
    let newStoreConfiguration = storeConfiguration;
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
            parentFormGroup,
            `salesDesk${key.toString()}`
          ).difference,
        outcome:
          resetOutcome ??
          this.cardReconciliationCalcsService.calculateDifference(
            parentFormGroup,
            `salesDesk${key.toString()}`
          ).outcome,
      };
    }
    return newStoreConfiguration;
  }
}
