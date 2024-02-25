export interface NumbersBids {
    number: number;
    sugested: boolean;
}

export interface Bid {
    id?: string
    createdAt?: Date
    numbers: NumbersBids[];
    winner?: boolean
}