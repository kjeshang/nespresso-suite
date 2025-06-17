import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { StoreConfiguration } from './card-reconciliation.models';

type CardReconciliationState = {
  storeConfiguration: Partial<StoreConfiguration>;
};

const initialCardReconciliationState: CardReconciliationState = {
  storeConfiguration: {},
};

export const CardReconciliationStore = signalStore(
  { providedIn: 'root' },
  withState(initialCardReconciliationState),
  withMethods((store) => ({
    
  })),
)