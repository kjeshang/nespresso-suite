import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CashExchangeSentOutComponent } from '../cash-exchange-sent-out/cash-exchange-sent-out.component';
import { CashExchangeBroughtInComponent } from '../cash-exchange-brought-in/cash-exchange-brought-in.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cash-exchange-page',
  imports: [FeatureContainerComponent, CashExchangeSentOutComponent, CashExchangeBroughtInComponent, MatButtonModule],
  templateUrl: './cash-exchange-page.component.html',
  styleUrl: './cash-exchange-page.component.scss'
})
export class CashExchangePageComponent {

  printPage(): void {
    window.print();
  }
}
