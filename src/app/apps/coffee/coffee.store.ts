import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Coffee } from "./coffee.models";
import { CoffeeDbService } from "./coffee.db.service";
import { computed, inject } from "@angular/core";
import { chain } from "lodash";

type CoffeeState = {
    coffeeData: Coffee[];
    isLoading: boolean;
    query: string;
}

const initialCoffeeState: CoffeeState = {
    coffeeData: [],
    isLoading: false,
    query: '',
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
    })),
    withComputed(
        (
            {
                coffeeData,
                query,
            }
        ) => ({
        filteredCoffeeData: computed(() => {
            let data: Coffee[] = chain(coffeeData())
            .filter((el: Coffee) => el.name.toLowerCase().includes(query().toLowerCase()))
            .value();
            return data;
        })
    }))
);
