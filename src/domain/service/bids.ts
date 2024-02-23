import { Bid, NumbersBids } from "../entity/Bid";

export const createBidByString = ({ bid, winner = false }: { bid: string, winner?: boolean }): Bid => {
    const bidsNumbers: NumbersBids[] = bid.split(",").map(number => ({ number: parseInt(number), sugested: false }))
    return { numbers: bidsNumbers, winner }
}

export const sortMostWinnerNumbers = (bids: Bid[]) => {
    const allNumbersBid = bids.flatMap((bid) => bid.numbers)
    const allNumbers = allNumbersBid.map((nb: NumbersBids) => nb.number)
    const counts = allNumbers.reduce((counts: any, num: number) => {
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});
    const arrSortedAllNumbers = allNumbers.sort(function (p0, p1) {
        return counts[p1] - counts[p0];
    });
    const setAllnumbers = new Set(arrSortedAllNumbers)
    return Array.from(setAllnumbers)
}