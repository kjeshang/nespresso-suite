import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LegacyApp } from "./dashboard.models";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DashboardDbService {
    http: HttpClient = inject(HttpClient);

    async getLegacyApps(): Promise<LegacyApp[]> {
        const filepath: string = 'data/legacy_apps.json';
        const data: LegacyApp[] = await firstValueFrom(
            this.http.get<LegacyApp[]>(filepath)
        );
        return data;
    }
}