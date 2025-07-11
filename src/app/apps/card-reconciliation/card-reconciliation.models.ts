export interface StoreConfiguration {
    [id: string]: SalesDesk;
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
        terminalAmount: number;
    }
    difference: number;
    outcome: string;
}