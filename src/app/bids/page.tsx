import { unstable_noStore as noStore } from "next/cache";
import { Main } from "../../styles/style";
import { BidsList } from "../_components/BidsList";

export default function Bids() {
    noStore()
    return (
        <Main>
            <BidsList />
        </Main>
    );
}

