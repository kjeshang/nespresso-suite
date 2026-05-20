import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './apps/dashboard/dashboard-page/dashboard-page.component';
import { CardReconciliationPageComponent } from './apps/card-reconciliation/card-reconciliation-page/card-reconciliation-page.component';
import { CashReconciliationPageComponent } from './apps/cash-reconciliation/cash-reconciliation-page/cash-reconciliation-page.component';
import { CashExchangePageComponent } from './apps/cash-exchange/cash-exchange-page/cash-exchange-page.component';
import { CoffeePageComponent } from './apps/coffee/coffee-page/coffee-page.component';
import { FirstAidPageComponent } from './apps/first-aid/first-aid-page/first-aid-page.component';
import { TastingPageComponent } from './apps/tasting/tasting-page/tasting-page.component';
import { MachinePageComponent } from './apps/machine/machine-page/machine-page.component';
import { FirstAidResolver } from './apps/first-aid/first-aid.resolver';
import { MachineResolver } from './apps/machine/machine.resolver';
import { CoffeeResolver } from './apps/coffee/coffee.resolver';
import { DashboardResolver } from './apps/dashboard/dashboard.resolver';
import { CashExchangeResolver } from './apps/cash-exchange/cash-exchange.resolver';
import { CashReconciliationResolver } from './apps/cash-reconciliation/cash-reconciliation.resolver';
import { CardReconciliationResolver } from './apps/card-reconciliation/card-reconciliation.resolver';

export const routes: Routes = [
    {
        path:"", component:DashboardPageComponent,
        resolve: {
            data: DashboardResolver
        }
    },
    {
        path:"card-reconciliation", component:CardReconciliationPageComponent,
        resolve: {
            setup: CardReconciliationResolver
        }
    },
    {
        path:"cash-reconciliation", component:CashReconciliationPageComponent,
        resolve: {
            setup: CashReconciliationResolver
        }
    },
    {
        path:"cash-exchange", component:CashExchangePageComponent,
        resolve: {
            setup: CashExchangeResolver
        }
    },
    {
        path:"coffee", component:CoffeePageComponent,
        resolve: {
            data: CoffeeResolver
        }
    },
    {
        path:"first-aid", component:FirstAidPageComponent,
        resolve: {
            data: FirstAidResolver
        }
    },
    {
        path:"tasting", component:TastingPageComponent
    },
    {
        path:"machine", component:MachinePageComponent,
        resolve: {
            data: MachineResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}