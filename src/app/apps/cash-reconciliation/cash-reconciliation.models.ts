export interface CashDesk {
    hundreds: {
        label: 'Count of $100 Bills';
        multiplier: 100;
        amount: number;
    },
    fifties: {
        label: 'Count of $50 Bills';
        multiplier: 50;
        amount: number;
    },
    twenties: {
        label: 'Count of $20 Bills';
        multiplier: 20;
        amount: number;
    },
    tens: {
        label: 'Count of $10 Bills';
        multiplier: 10;
        amount: number;
    },
    fives: {
        label: 'Count of $5 Bills';
        multiplier: 5;
        amount: number;
    },
    toonies: {
        label: 'Count of $2 Coins';
        multiplier: 2;
        amount: number;
    },
    loonies: {
        label: 'Count of $1 Coins';
        multiplier: 1; 
        amount: number;
    },
    quarters: {
        label: 'Count of $0.25 Coins';
        multiplier: 0.25;
        amount: number;
    },
    dimes: {
        label: 'Count of $0.10 Coins';
        multiplier: 0.10;
        amount: number;
    },
    nickels: {
        label: 'Count of $0.05 Coins';
        multiplier: 0.05;
        amount: number;
    }
}