import { inject } from "@angular/core"
import { CardReconciliationStore } from "./card-reconciliation.store"
import { of } from "rxjs";

export const CardReconciliationResolver = async() => {
    const cardReconciliationStore = inject(CardReconciliationStore);
    await cardReconciliationStore.loadStoreConfiguration();
    return of(undefined);
}