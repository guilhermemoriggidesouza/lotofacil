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
    const setAllnumbers = new Set(allNumbers)
    const arrSortedAllNumbers = Array.from(setAllnumbers).sort(function (p0, p1) {
        return counts[p1] - counts[p0];
    });
    return arrSortedAllNumbers
}

export const actualDate = (data: Date): string => {
    const dia: string = data.getDate().toString(),
        diaF: string = (dia.length == 1) ? '0' + dia : dia,
        mes: string = (data.getMonth() + 1).toString(),
        mesF: string = (mes.length == 1) ? '0' + mes : mes,
        anoF: number = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}