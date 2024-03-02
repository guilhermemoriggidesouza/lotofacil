import { Bid, NumbersBids } from "~/domain/entity/Bid";
import { createBidByString, sortMostWinnerNumbers } from "~/domain/service/bids";
import { api } from "~/trpc/server"
function generateUniqueRandom(haveIt: number[]): number {
    let random: number = Math.floor(Math.random() * 24);
    random = random + 1
    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random
    } else {
        return generateUniqueRandom(haveIt);
    }
}

const createNumbersSugested = (numbersToSugested: number[]): NumbersBids[] => {
    const numberBidSugested = numbersToSugested.map(numberToSugest => ({ number: numberToSugest, sugested: true }))
    const numberRandom = (15 - numbersToSugested.length)
    const numberBidNotSugested = Array
        .from({ length: numberRandom }, () => generateUniqueRandom(numbersToSugested))
        .map(number => ({ number, sugested: false }));
    return [...numberBidSugested, ...numberBidNotSugested]
}

export const createLastBid = async (bid: string): Promise<void> => {
    "use server";
    const lastWinnerBids = await api.bids.get.query({ winner: true })
    const winnersNumbers = sortMostWinnerNumbers(lastWinnerBids).slice(0, 15)
    const bidsSugesteds: Bid[] = []
    for (let i = 1; i <= winnersNumbers.length; i++) {
        bidsSugesteds.push({
            winner: false,
            numbers: createNumbersSugested(winnersNumbers.slice(0, i))
        })
    }
    const bidDomain: Bid = createBidByString({ bid, winner: true })
    await api.bids.create.mutate({ data: [bidDomain, ...bidsSugesteds] })

}