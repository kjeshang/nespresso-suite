import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { StoreConfiguration } from "./card-reconciliation.models";

@Injectable({ providedIn: 'root' })
export class CardReconciliationDbService {
    http: HttpClient = inject(HttpClient);

    async getStoreConfiguration(): Promise<Partial<StoreConfiguration>>{
        let storeConfiguration: Partial<StoreConfiguration> = {
            A: {
                salesDesk: 'A',
                tillNumber: 1,
                pos: {
                    label: "POS Amount A",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount A",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount A",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            },
            B: {
                salesDesk: 'B',
                tillNumber: 2,
                pos: {
                    label: "POS Amount B",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount B",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount B",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            }
        };
        return storeConfiguration;
    }
}