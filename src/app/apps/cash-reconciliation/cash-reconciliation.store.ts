import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { CashDesk } from "./cash-reconciliation.models";
import { CashReconciliationDbService } from "./cash-reconciliation.db.service";
import { inject } from "@angular/core";

type CashReconciliationState = {
    cashDesk: Partial<CashDesk>;
    selectedShift: 'Opening' | 'Closing';
    cashJournalAmount: number;
}

const initialCashReconciliationState: CashReconciliationState = {
    cashDesk: {},
    selectedShift: 'Opening',
    cashJournalAmount: 0
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
            patchState(store, (state: CashReconciliationState) => ({
                cashDesk: cashDesk,
            }));
        },
        async updateSelectedShift(selectedShift: 'Opening' | 'Closing') {
            if(selectedShift === 'Opening'){
                patchState(store, (state: CashReconciliationState) => ({
                    selectedShift: selectedShift,
                    cashJournalAmount: 300,
                }))
            }
            patchState(store, (state: CashReconciliationState) => ({
                selectedShift: selectedShift,
            }));
        },
        async updateCashJournalAmount(cashJournalAmount: number) {
            patchState(store, (state: CashReconciliationState) => ({
                cashJournalAmount: cashJournalAmount,
            }));
        }
    })),
    withComputed(() => ({
        
    })),
)