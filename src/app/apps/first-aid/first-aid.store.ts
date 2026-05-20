import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { FirstAidItem } from "./first-aid.models"
import { FirstAidDbService } from "./first-aid.db.service";
import { inject } from "@angular/core";

type FirstAidState = {
    firstAidItems: FirstAidItem[];
    isLoading: boolean;
}

const initialFirstAidState: FirstAidState = {
    firstAidItems: [],
    isLoading: false,
}

export const FirstAidStore = signalStore(
    {providedIn: 'root'},
    withState(initialFirstAidState),
    withMethods((store, db: FirstAidDbService = inject(FirstAidDbService)) => ({
        async loadFirstAidItems(): Promise<void> {
            patchState(store, (state: FirstAidState) => ({
                isLoading: true,
            }));
            const firstAidItems: FirstAidItem[] = await db.getFirstAidItems();
            patchState(store, (state: FirstAidState) => ({
                firstAidItems: firstAidItems,
                isLoading: false,
            }));
        }
    })),
);
