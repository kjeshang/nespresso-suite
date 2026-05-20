import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { FirstAidItem } from "./first-aid.models"
import { FirstAidDbService } from "./first-aid.db.service";
import { inject } from "@angular/core";

type FirstAidState = {
    firstAidItems: FirstAidItem[];
}

const initialFirstAidState: FirstAidState = {
    firstAidItems: []
}

export const FirstAidStore = signalStore(
    {providedIn: 'root'},
    withState(initialFirstAidState),
    withMethods((store, db: FirstAidDbService = inject(FirstAidDbService)) => ({
        async loadFirstAidItems(): Promise<void> {
            const firstAidItems: FirstAidItem[] = await db.getFirstAidItems();
            patchState(store, (state: FirstAidState) => ({
                firstAidItems: firstAidItems,
            }))
        }
    })),
);
