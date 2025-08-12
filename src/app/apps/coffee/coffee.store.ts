import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Coffee } from "./coffee.models";
import { CoffeeDbService } from "./coffee.db.service";
import { computed, inject } from "@angular/core";
import { chain } from "lodash";

type CoffeeState = {
    coffeeData: Coffee[];
    isLoading: boolean;
    query: string;
    selectedStatus: string[];
}

const initialCoffeeState: CoffeeState = {
    coffeeData: [],
    isLoading: false,
    query: '',
    selectedStatus: ['Current'],
}

export const CoffeeStore = signalStore(
    {providedIn: 'root'},
    withState(initialCoffeeState),
    withMethods((store, db = inject(CoffeeDbService)) => ({
        async loadCoffeeData(): Promise<void> {
            patchState(store, (state: CoffeeState) => ({
                isLoading: true,
            }));
            const coffeeData: Coffee[] = await db.getCoffeeData();
            patchState(store, (state: CoffeeState) => ({
                coffeeData: coffeeData,
                isLoading: false,
            }));
        },
        async updateQuery(query: string): Promise<void> {
            patchState(store, (state: CoffeeState) => ({
                query: query,
            }));
        },
        async updateSelectedStatus(selectedStatus: string[]): Promise<void> {
            patchState(store, (state: CoffeeState) => ({
                selectedStatus: selectedStatus,
            }));
        },
    })),
    withComputed(
        (
            {
                coffeeData,
                query,
                selectedStatus,
            }
        ) => ({
        filteredCoffeeData: computed(() => {
            let data: Coffee[] = chain(coffeeData())
            .filter((el: Coffee) => el.name.toLowerCase().includes(query().toLowerCase()))
            .filter((el: Coffee) => selectedStatus().includes(el.status))
            .value();
            return data;
        }),
        uniqueStatus: computed(() => {
            const uniqueStatus: string[] = chain(coffeeData())
            .map((item: Coffee) => item.status)
            .uniq()
            .sort()
            .value();
            return uniqueStatus;
        }),
    }))
);
