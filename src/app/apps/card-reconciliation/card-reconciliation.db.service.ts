import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SalesDesk, StoreConfiguration } from "./card-reconciliation.models";

@Injectable({ providedIn: 'root' })
export class CardReconciliationDbService {
    http: HttpClient = inject(HttpClient);

    async getStoreConfiguration(storeName: string): Promise<Partial<StoreConfiguration>>{
        let storeConfiguration: Partial<StoreConfiguration> = {};
        if(storeName === 'B86 BIM Metrotown') {
            const pointsOfSale: SalesDesk[] = [
                {
                    salesDesk: "A",
                    tillNumber: 1,
                    pos: {
                        label: "POS 1",
                        posAmount: 0,
                    },
                    register: {
                        label: "Register 1",
                        registerAmount: 0,
                    },
                    terminal: {
                        label: "Terminal 1",
                        terminalAmount: 0,
                    },
                    difference: 0,
                    outcome: "Balanced"
                },
                {
                    salesDesk: "B",
                    tillNumber: 2,
                    pos: {
                        label: "POS 2",
                        posAmount: 0,
                    },
                    register: {
                        label: "Register 2",
                        registerAmount: 0,
                    },
                    terminal: {
                        label: "Terminal 2",
                        terminalAmount: 0,
                    },
                    difference: 0,
                    outcome: "Balanced"
                },
                {
                    salesDesk: "D",
                    tillNumber: 4,
                    pos: {
                        label: "POS 4",
                        posAmount: 0,
                    },
                    register: {
                        label: "Register 4",
                        registerAmount: 0,
                    },
                    terminal: {
                        label: "Terminal 4",
                        terminalAmount: 0,
                    },
                    difference: 0,
                    outcome: "Balanced"
                }
            ];
            storeConfiguration = {
                storeName,
                pointsOfSale
            }
        }
        return storeConfiguration;
    }
}