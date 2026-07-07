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
        path:"", 
        // component:DashboardPageComponent,
        loadComponent: () => import('./apps/dashboard/dashboard-page/dashboard-page.component').then((m) => m.DashboardPageComponent),
        resolve: {
            data: DashboardResolver
        }
    },
    {
        path:"card-reconciliation", 
        // component:CardReconciliationPageComponent,
        loadComponent: () => import('./apps/card-reconciliation/card-reconciliation-page/card-reconciliation-page.component').then((m) => m.CardReconciliationPageComponent),
        resolve: {
            setup: CardReconciliationResolver
        }
    },
    {
        path:"cash-reconciliation", 
        // component:CashReconciliationPageComponent,
        loadComponent: () => import('./apps/cash-reconciliation/cash-reconciliation-page/cash-reconciliation-page.component').then((m) => m.CashReconciliationPageComponent),
        resolve: {
            setup: CashReconciliationResolver
        }
    },
    {
        path:"cash-exchange", 
        // component:CashExchangePageComponent,
        loadComponent: () => import('./apps/cash-exchange/cash-exchange-page/cash-exchange-page.component').then((m) => m.CashExchangePageComponent),
        resolve: {
            setup: CashExchangeResolver
        }
    },
    {
        path:"coffee", 
        // component:CoffeePageComponent,
        loadComponent: () => import('./apps/coffee/coffee-page/coffee-page.component').then((m) => m.CoffeePageComponent),
        resolve: {
            data: CoffeeResolver
        }
    },
    {
        path:"first-aid", 
        // component:FirstAidPageComponent,
        loadComponent: () => import('./apps/first-aid/first-aid-page/first-aid-page.component').then((m) => m.FirstAidPageComponent),
        resolve: {
            data: FirstAidResolver
        }
    },
    {
        path:"tasting", 
        // component:TastingPageComponent,
        loadComponent: () => import('./apps/tasting/tasting-page/tasting-page.component').then((m) => m.TastingPageComponent),
    },
    {
        path:"machine", 
        // component:MachinePageComponent,
        loadComponent: () => import('./apps/machine/machine-page/machine-page.component').then((m) => m.MachinePageComponent),
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