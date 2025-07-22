import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardReconciliationStore } from './apps/card-reconciliation/card-reconciliation.store';
import { CashReconciliationStore } from './apps/cash-reconciliation/cash-reconciliation.store';
import { DashboardStore } from './apps/dashboard/dashboard.store';
import { CashExchangeStore } from './apps/cash-exchange/cash-exchange.store';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nespresso-suite';
  cardReconciliationStore = inject(CardReconciliationStore);
  dashboardStore = inject(DashboardStore);
  cashReconciliationStore = inject(CashReconciliationStore);
  cashExchangeStore = inject(CashExchangeStore);

  ngOnInit(): void {
    this.loadData().then(() => console.log("Data Loaded!"));
  }

  async loadData(): Promise<void> {
    this.cardReconciliationStore.loadStoreConfiguration();
    this.dashboardStore.loadLegacyApps();
    this.cashReconciliationStore.loadCashDesk();
    this.cashExchangeStore.loadMoneySentOut();
    this.cashExchangeStore.loadMoneyBroughtIn();
  }
}
