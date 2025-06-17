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

type CardReconciliationState = {
  storeName: string;
  storeConfiguration: Partial<StoreConfiguration>;
};

const initialCardReconciliationState: CardReconciliationState = {
  storeName: "B86 BIM Metrotown",
  storeConfiguration: {},
};

export const CardReconciliationStore = signalStore(
  { providedIn: 'root' },
  withState(initialCardReconciliationState),
  withMethods((store, db: CardReconciliationDbService = inject(CardReconciliationDbService)) => ({
    async loadStoreConfiguration(): Promise<void> {
        const storeConfiguration: Partial<StoreConfiguration> = await db.getStoreConfiguration(store.storeName());
        patchState(store, (state: CardReconciliationState) => ({
            storeConfiguration: storeConfiguration,
        }))
    }
  })),
  withComputed(() => ({
    
  }))
)