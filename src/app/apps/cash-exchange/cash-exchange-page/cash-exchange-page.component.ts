import { Component, inject, ViewChild } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CashExchangeSentOutComponent } from '../cash-exchange-sent-out/cash-exchange-sent-out.component';
import { CashExchangeBroughtInComponent } from '../cash-exchange-brought-in/cash-exchange-brought-in.component';
import { MatButtonModule } from '@angular/material/button';
import { CashExchangeStore } from '../cash-exchange.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cash-exchange-page',
  imports: [CommonModule, FeatureContainerComponent, CashExchangeSentOutComponent, CashExchangeBroughtInComponent, MatButtonModule],
  templateUrl: './cash-exchange-page.component.html',
  styleUrl: './cash-exchange-page.component.scss'
})
export class CashExchangePageComponent {
  cashExchangeStore = inject(CashExchangeStore);
  @ViewChild(CashExchangeSentOutComponent) cashExchangeSentOutComponent!: CashExchangeSentOutComponent;
  @ViewChild(CashExchangeBroughtInComponent) cashExchangeBroughtInComponent!: CashExchangeBroughtInComponent;

  onResetClick(): void {
    this.cashExchangeSentOutComponent.resetMoneySentOutForm();
    this.cashExchangeBroughtInComponent.resetMoneyBroughtIn();
  }

  printPage(): void {
    window.print();
  }
}
