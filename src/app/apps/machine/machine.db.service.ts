import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Machine } from "./machine.models";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MachineDbService {
    http: HttpClient = inject(HttpClient);

    async getMachineData(): Promise<Machine[]> {
        const path: string = "https://raw.githubusercontent.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide/refs/heads/main/outputMachine.json";
        const data: Machine[] = await firstValueFrom(this.http.get<Machine[]>(path));
        return data;
    }
}