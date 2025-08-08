import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Coffee } from "./coffee.models";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn:'root' })
export class CoffeeDbService { 
    http: HttpClient = inject(HttpClient);

    async getCoffeeData(): Promise<Coffee[]> {
        const path: string = "https://raw.githubusercontent.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide/refs/heads/main/output.json";
        const data: Coffee[] = await firstValueFrom(
            this.http.get<Coffee[]>(path)
        )
        return data;
    }
}