import { Bid, NumbersBids } from "../entity/Bid";

export const splitBidString = (bid: string): Bid => {
    const bidsNumbers: NumbersBids[] = bid.split(",").map(number => ({ number: parseInt(number), sugested: false }))
    return { numbers: bidsNumbers }
}