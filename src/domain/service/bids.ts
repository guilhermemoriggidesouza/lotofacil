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

export const actualDate = (data: Date) => {
    let dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}