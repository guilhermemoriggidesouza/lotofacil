import { Bid, NumbersBids } from "~/domain/entity/Bid";
import { splitBidString } from "~/domain/service/bids";
import { api } from "~/trpc/server"

export interface responseCreateLastBid {
    create: (bid: string) => void
}

export const useCreateLastBid = async (): Promise<responseCreateLastBid> => {
    
    const create = async (bid: string) => {
        "use server";
        const bidDomain: Bid = splitBidString(bid)
        await api.bids.create.mutate(bidDomain)
    }

    return {
        create
    }
}