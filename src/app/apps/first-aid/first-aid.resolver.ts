import { inject } from "@angular/core";
import { FirstAidStore } from "./first-aid.store"
import { of } from "rxjs";

export const FirstAidResolver  = async() => {
    const firstAidStore = inject(FirstAidStore);
    await firstAidStore.loadFirstAidItems();
    return of(undefined);
}