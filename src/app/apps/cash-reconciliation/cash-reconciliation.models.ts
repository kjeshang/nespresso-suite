export type DenominationKey =
  | 'hundreds'
  | 'fifties'
  | 'twenties'
  | 'tens'
  | 'fives'
  | 'toonies'
  | 'loonies'
  | 'quarters'
  | 'dimes'
  | 'nickels';

export interface CashDesk {
    hundreds: {
        label: 'Count of $100 Bills';
        multiplier: 100;
        count: number;
        amount: number;
    },
    fifties: {
        label: 'Count of $50 Bills';
        multiplier: 50;
        count: number;
        amount: number;
    },
    twenties: {
        label: 'Count of $20 Bills';
        multiplier: 20;
        count: number;
        amount: number;
    },
    tens: {
        label: 'Count of $10 Bills';
        multiplier: 10;
        count: number;
        amount: number;
    },
    fives: {
        label: 'Count of $5 Bills';
        multiplier: 5;
        count: number;
        amount: number;
    },
    toonies: {
        label: 'Count of $2 Coins';
        multiplier: 2;
        count: number;
        amount: number;
    },
    loonies: {
        label: 'Count of $1 Coins';
        multiplier: 1;
        count: number;
        amount: number;
    },
    quarters: {
        label: 'Count of $0.25 Coins';
        multiplier: 0.25;
        count: number;
        amount: number;
    },
    dimes: {
        label: 'Count of $0.10 Coins';
        multiplier: 0.10;
        count: number;
        amount: number;
    },
    nickels: {
        label: 'Count of $0.05 Coins';
        multiplier: 0.05;
        count: number;
        amount: number;
    },
}