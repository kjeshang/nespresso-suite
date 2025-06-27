import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { StoreConfiguration } from './card-reconciliation.models';
import { CardReconciliationDbService } from './card-reconciliation.db.service';
import { CardReconciliationCalcsService } from './card-reconciliation.calcs.service';

type CardReconciliationState = {
  storeConfiguration: Partial<StoreConfiguration>;
};

const initialCardReconciliationState: CardReconciliationState = {
  storeConfiguration: {},
};

export const CardReconciliationStore = signalStore(
  { providedIn: 'root' },
  withState(initialCardReconciliationState),
  withMethods((store, db: CardReconciliationDbService = inject(CardReconciliationDbService)) => ({
    async loadStoreConfiguration(): Promise<void> {
        const storeConfiguration: Partial<StoreConfiguration> = await db.getStoreConfiguration();
        patchState(store, (state: CardReconciliationState) => ({
            storeConfiguration: storeConfiguration,
        }))
    },
    async updateStoreConfiguration(storeConfiguration: Partial<StoreConfiguration>): Promise<void> {
      patchState(store, (state: CardReconciliationState) => ({
            storeConfiguration: storeConfiguration,
      }))
    }
  })),
  withComputed(({ storeConfiguration }, calcs: CardReconciliationCalcsService = inject(CardReconciliationCalcsService)) => ({
    cumulativeTotals: computed(() => {
      return calcs.calculateCumulativeTotals(storeConfiguration());
    }),
  }))
)