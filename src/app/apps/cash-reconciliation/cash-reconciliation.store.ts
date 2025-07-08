import { signalStore, withState } from "@ngrx/signals";
import { CashDesk } from "./cash-reconciliation.models";

type CashReconciliationState = {
    cashDesk: Partial<CashDesk>
}

const initialCashReconciliationState: CashReconciliationState = {
    cashDesk: {}
}

export const CashReconciliationStore = signalStore(
    { providedIn: 'root' },
    withState(initialCashReconciliationState)
)