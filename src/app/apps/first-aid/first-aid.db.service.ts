import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FirstAidItem } from "./first-aid.models";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FirstAidDbService {
    http: HttpClient = inject(HttpClient);

    async getFirstAidItems(): Promise<FirstAidItem[]> {
        const filepath: string = 'data/first_aid_items.json';
        const data: FirstAidItem[] = await firstValueFrom(
            this.http.get<FirstAidItem[]>(filepath)
        );
        return data;
    }
}