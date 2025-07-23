export interface MoneySentOut {
    [id: string]: DenominationSentOut;
}

export interface MoneyBroughtIn {
    [id: string]: DenominationBroughtIn;
}

export interface DenominationSentOut {
    label: string;
    denominationType: 'Bill' | 'Coin';
    denomination: number;
    countOfBillCoin: number;
    cashValue: number;
}

export interface DenominationBroughtIn {
    denominationType: 'Bill' | 'Coin';
    denomination: number;
    countOfBillRollsOfCoin: number;
    amountPerRoll?: number;
    cashValue: number;
}