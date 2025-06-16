import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './apps/dashboard/dashboard-page/dashboard-page.component';
import { CardReconciliationPageComponent } from './apps/card-reconciliation/card-reconciliation-page/card-reconciliation-page.component';

export const routes: Routes = [
    {
        path:"", component:DashboardPageComponent
    },
    {
        path:"card-reconciliation", component:CardReconciliationPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}