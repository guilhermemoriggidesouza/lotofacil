export interface NumbersBids {
    number: number;
    sugested: boolean;
}

export interface Bid {
    id?: string
    numbers: NumbersBids[];
    winner?: boolean
}