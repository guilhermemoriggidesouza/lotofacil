import { Bid } from "~/domain/entity/Bid";
import { api } from "~/trpc/server"

export const getBids = async (): Promise<Bid[]> => {
    "use server";
    return await api.bids.get.query({})
}