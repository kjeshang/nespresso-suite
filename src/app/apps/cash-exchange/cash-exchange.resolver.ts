import { inject } from "@angular/core"
import { CashExchangeStore } from "./cash-exchange.store"
import { of } from "rxjs";

export const CashExchangeResolver = async() => {
    const cashExchangeStore = inject(CashExchangeStore);
    await cashExchangeStore.loadMoneySentOut();
    await cashExchangeStore.loadMoneyBroughtIn();
    return of(undefined);
}