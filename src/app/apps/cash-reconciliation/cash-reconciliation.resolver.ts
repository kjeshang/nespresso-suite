import { inject } from "@angular/core";
import { CashReconciliationStore } from "./cash-reconciliation.store";
import { of } from "rxjs";

export const CashReconciliationResolver = async() => {
    const cashReconciliationStore = inject(CashReconciliationStore);
    await cashReconciliationStore.loadCashDesk();
    return of(undefined);
}