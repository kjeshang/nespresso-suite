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
            },
            D: {
                salesDesk: 'D',
                tillNumber: 4,
                pos: {
                    label: "POS Amount D",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount D",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount D",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            },
            E: {
                salesDesk: 'E',
                tillNumber: 7,
                pos: {
                    label: "POS Amount E",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount E",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount E",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            },
            F: {
                salesDesk: 'F',
                tillNumber: 6,
                pos: {
                    label: "POS Amount F",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount F",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount F",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            },
            G: {
                salesDesk: 'G',
                tillNumber: 5,
                pos: {
                    label: "POS Amount G",
                    posAmount: 0,
                },
                register: {
                    label: "Register Amount G",
                    registerAmount: 0
                },
                terminal: {
                    label: "Terminal Amount G",
                    terminalAmount: 0
                },
                difference: 0,
                outcome: "Balanced"
            }
        };
        return storeConfiguration;
    }
}