import { Bid } from "~/domain/entity/Bid";
import { api } from "~/trpc/server"

export const getBids = async (query: { winner?: boolean, limit?: number } | undefined = {}): Promise<Bid[]> => {
    "use server";
    const bids = await api.bids.get.query(query)
    return bids
}