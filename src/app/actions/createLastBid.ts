import { Bid, NumbersBids } from "~/domain/entity/Bid";
import { createBidByString, sortMostWinnerNumbers } from "~/domain/service/bids";
import { api } from "~/trpc/server"

const createNumbersSugested = (numbersToSugested: number[]): NumbersBids[] => {
    const numberBidSugested = numbersToSugested.map(numberToSugest => ({ number: numberToSugest, sugested: true }))
    const numberRandom = (15 - numbersToSugested.length)
    const numberBidNotSugested = Array
        .from({ length: numberRandom }, () => Math.floor(Math.random() * numberRandom))
        .map(number => ({ number, sugested: false }));
    return [...numberBidSugested, ...numberBidNotSugested]
}

export const createLastBid = async (bid: string): Promise<void> => {
    "use server";
    const lastWinnerBids = await api.bids.get.query({ winner: true, limit: 15 })
    const winnersNumbers = sortMostWinnerNumbers(lastWinnerBids).slice(0, 15)
    const bidsSugesteds: Bid[] = []
    for (let i = 0; i < winnersNumbers.length; i++) {
        bidsSugesteds.push({
            winner: false,
            numbers: createNumbersSugested(winnersNumbers.slice(0, i))
        })
    }
    const bidDomain: Bid = createBidByString({ bid, winner: true })
    await api.bids.create.mutate([bidDomain, ...bidsSugesteds])

}