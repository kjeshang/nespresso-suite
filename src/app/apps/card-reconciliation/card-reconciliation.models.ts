export interface StoreConfiguration {
    storeName: string;
    pointsOfSale: SalesDesk[]
}

export interface SalesDesk {
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
        registerAmount: number;
    }
    difference: number;
    outcome: string;
}