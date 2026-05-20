import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { FirstAidItem } from "./first-aid.models"
import { FirstAidDbService } from "./first-aid.db.service";
import { computed, inject } from "@angular/core";
import { chain, uniq } from "lodash";

type FirstAidState = {
    firstAidItems: FirstAidItem[];
    isLoading: boolean;
    selectedTypes: string[];
}

const initialFirstAidState: FirstAidState = {
    firstAidItems: [],
    isLoading: false,
    selectedTypes: [],
}

export const FirstAidStore = signalStore(
    { providedIn: 'root' },
    withState(initialFirstAidState),
    withMethods((store, db: FirstAidDbService = inject(FirstAidDbService)) => ({
        async loadFirstAidItems(): Promise<void> {
            patchState(store, (state: FirstAidState) => ({
                isLoading: true,
            }));
            const firstAidItems: FirstAidItem[] = await db.getFirstAidItems();
            const selectedTypes: string[] = uniq(firstAidItems.map((el: FirstAidItem) => el.type));
            patchState(store, (state: FirstAidState) => ({
                firstAidItems: firstAidItems,
                isLoading: false,
                selectedTypes: selectedTypes,
            }));
            console.log(store.selectedTypes());
        },
        async updateSelectedTypes(selectedTypes: string[]): Promise<void> {
            patchState(store, (state: FirstAidState) => ({
                selectedTypes: selectedTypes,
            }))
        }
    })),
    withComputed(
        (
            {
                firstAidItems,
                selectedTypes,
            }
        ) => ({
            filteredFirstAidItems: computed(() => {
                let data: FirstAidItem[] = chain(firstAidItems())
                    .filter((el: FirstAidItem) => selectedTypes().includes(el.type))
                    .value();
                return data;
            }),
            uniqueTypes: computed(() => {
                const uniqueTypes: string[] = chain(firstAidItems())
                    .map((item: FirstAidItem) => item.type)
                    .uniq()
                    .sort()
                    .value();
                return uniqueTypes;
            })
        }))
);
