import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { LegacyApp } from "./dashboard.models";
import { DashboardDbService } from "./dashboard.db.service";
import { inject } from "@angular/core";

type DashboardState = {
    legacyApps: LegacyApp[]
}

const initialDashboardState: DashboardState = {
    legacyApps: []
}

export const DashboardStore = signalStore(
    {providedIn: 'root'},
    withState(initialDashboardState),
    withMethods((store, db: DashboardDbService = inject(DashboardDbService)) => ({
        async loadLegacyApps(): Promise<void> {
            const legacyApps: LegacyApp[] = await db.getLegacyApps();
            patchState(store, (state: DashboardState) => ({
                legacyApps: legacyApps,
            }))
        }
    })),
);