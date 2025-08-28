import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './apps/dashboard/dashboard-page/dashboard-page.component';
import { CardReconciliationPageComponent } from './apps/card-reconciliation/card-reconciliation-page/card-reconciliation-page.component';
import { CashReconciliationPageComponent } from './apps/cash-reconciliation/cash-reconciliation-page/cash-reconciliation-page.component';
import { CashExchangePageComponent } from './apps/cash-exchange/cash-exchange-page/cash-exchange-page.component';
import { CoffeePageComponent } from './apps/coffee/coffee-page/coffee-page.component';
import { FirstAidPageComponent } from './apps/first-aid/first-aid-page/first-aid-page.component';

export const routes: Routes = [
    {
        path:"", component:DashboardPageComponent
    },
    {
        path:"card-reconciliation", component:CardReconciliationPageComponent
    },
    {
        path:"cash-reconciliation", component:CashReconciliationPageComponent
    },
    {
        path:"cash-exchange", component:CashExchangePageComponent
    },
    {
        path:"coffee", component:CoffeePageComponent
    },
    {
        path:"first-aid", component:FirstAidPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}