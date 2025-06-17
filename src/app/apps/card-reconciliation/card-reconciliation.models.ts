export interface StoreConfiguration {
    storeName: string;
    pointsOfSale: SalesDesk[]
}

export interface SalesDesk {
    formGroupName: string;
    salesDesk: string;
    tillNumber: number;
    pos: {
        label: string;
        posAmount: number;
    },
    register: {
        label: string;
        registerAmount: number;
    },
    terminal: {
        label: string;
        terminalAmount: number;
    }
    difference: number;
    outcome: string;
}