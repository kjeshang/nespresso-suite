import { inject } from "@angular/core";
import { CoffeeStore } from "./coffee.store"
import { of } from "rxjs";

export const CoffeeResolver = async() => {
    const coffeeStore = inject(CoffeeStore);
    await coffeeStore.loadCoffeeData();
    return of(undefined);
}