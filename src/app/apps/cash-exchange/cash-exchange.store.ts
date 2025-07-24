import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { MoneyBroughtIn, MoneySentOut } from './cash-exchange.models';
import { CashExchangeDbService } from './cash-exchange.db.service';
import { inject } from '@angular/core';

type CashExchangeState = {
  moneySentOut: Partial<MoneySentOut>;
  moneyBroughtIn: Partial<MoneyBroughtIn>;
};

const initialCashExchangeState: CashExchangeState = {
  moneySentOut: {},
  moneyBroughtIn: {},
};

export const CashExchangeStore = signalStore(
  { providedIn: 'root' },
  withState(initialCashExchangeState),
  withMethods(
    (store, db: CashExchangeDbService = inject(CashExchangeDbService)) => ({
      async loadMoneySentOut(): Promise<void> {
        const moneySentOut: Partial<MoneySentOut> = await db.getMoneySentOut();
        patchState(store, (state: CashExchangeState) => ({
          moneySentOut: moneySentOut,
        }));
      },
      async loadMoneyBroughtIn(): Promise<void> {
        const moneyBroughtIn: Partial<MoneyBroughtIn> =
          await db.getMoneyBroughtIn();
        patchState(store, (state: CashExchangeState) => ({
          moneyBroughtIn: moneyBroughtIn,
        }));
      },
      async updateMoneySentOut(
        moneySentOut: Partial<MoneySentOut>
      ): Promise<void> {
        patchState(store, (state: CashExchangeState) => ({
          moneySentOut: moneySentOut,
        }));
      },
      async updateMoneyBroughtIn(moneyBroughtIn: Partial<MoneyBroughtIn>): Promise<void> {
        patchState(store, (state: CashExchangeState) => ({
          moneyBroughtIn: moneyBroughtIn,
        }))
      }
    })
  ),
  withComputed(() => ({}))
);
