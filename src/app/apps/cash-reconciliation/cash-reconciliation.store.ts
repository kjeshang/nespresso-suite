import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { CashDesk } from "./cash-reconciliation.models";
import { CashReconciliationDbService } from "./cash-reconciliation.db.service";
import { inject } from "@angular/core";

type CashReconciliationState = {
    cashDesk: Partial<CashDesk>
}

const initialCashReconciliationState: CashReconciliationState = {
    cashDesk: {}
}

export const CashReconciliationStore = signalStore(
    { providedIn: 'root' },
    withState(initialCashReconciliationState),
    withMethods((store, db: CashReconciliationDbService = inject(CashReconciliationDbService)) => ({
        async loadCashDesk(): Promise<void> {
            const cashDesk: Partial<CashDesk> = await db.getCashDesk();
            patchState(store, (state: CashReconciliationState) => ({
                cashDesk: cashDesk,
            }));
        },
        async updateCashDesk(cashDesk: Partial<CashDesk>) {
            patchState(store, (store: CashReconciliationState) => ({
                cashDesk: cashDesk,
            }))
        }
    })),
)