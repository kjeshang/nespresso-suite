import { inject } from "@angular/core";
import { DashboardStore } from "./dashboard.store"
import { of } from "rxjs";

export const DashboardResolver = async() => {
    const dashboardStore = inject(DashboardStore);
    await dashboardStore.loadLegacyApps();
    return of(undefined);
}