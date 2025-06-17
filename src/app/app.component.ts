import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardReconciliationStore } from './apps/card-reconciliation/card-reconciliation.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nespresso-suite';
  cardReconciliationStore = inject(CardReconciliationStore);

  ngOnInit(): void {
    this.loadData().then(() => console.log("Data Loaded!"));
  }

  async loadData(): Promise<void> {
    this.cardReconciliationStore.loadStoreConfiguration();
  }
}
