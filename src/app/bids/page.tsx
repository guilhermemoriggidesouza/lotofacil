import { unstable_noStore as noStore } from "next/cache";
import { Main } from "../../styles/style";
import { BidsList } from "../_components/BidsList";
import { getBids } from "../actions/getBids";
import { sortMostWinnerNumbers } from "~/domain/service/bids";

export default async function Bids() {
    noStore()
    const bids = await getBids()
    const nonWinnerBids = bids.filter(bid => !bid.winner)
    return (
        <Main>
            {bids.length == 0 ? <p>Não foram gerados lances</p> : <BidsList bids={nonWinnerBids} />}
        </Main>
    );
}

