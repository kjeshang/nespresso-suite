import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Coffee } from "./coffee.models";
import { CoffeeDbService } from "./coffee.db.service";
import { inject } from "@angular/core";

type CoffeeState = {
    coffeeData: Coffee[]
}

const initialCoffeeState: CoffeeState = {
    coffeeData: [],
}

export const CoffeeStore = signalStore(
    {providedIn: 'root'},
    withState(initialCoffeeState),
    withMethods((store, db = inject(CoffeeDbService)) => ({
        async loadCoffeeData(): Promise<void> {
            const coffeeData: Coffee[] = await db.getCoffeeData();
            patchState(store, (state: CoffeeState) => ({
                coffeeData: coffeeData,
            }))
        },
    })),
);
