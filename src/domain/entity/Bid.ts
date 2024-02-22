export interface NumbersBids {
    number: number;
    sugested: boolean;
}

export interface Bid {
    numbers: NumbersBids[];
    winner?: boolean
}