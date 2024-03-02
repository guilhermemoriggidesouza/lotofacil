export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import { api } from "~/trpc/server";
import { Container, Main } from "../../styles/style";
import { BidsList } from "../_components/BidsList";
import { sortMostWinnerNumbers } from "~/domain/service/bids";
import { revalidatePath, unstable_noStore } from "next/cache"

export default async function Bids() {
    unstable_noStore()
    revalidatePath("/bids")
    const winnerBids = await api.bids.get.query({ winner: true })
    const nonWinnerBids = await api.bids.get.query({ winner: false, limit: 15 })
    const sortedMostUsedNumbers = sortMostWinnerNumbers(winnerBids)
    return (
        <Main>
            <Container >

                {
                    nonWinnerBids.length == 0 ?
                        <p>Não foram gerados lances</p> :
                        <BidsList bids={nonWinnerBids} sugestedNumbers={sortedMostUsedNumbers.slice(0, 15)} />
                }
            </Container>
        </Main>
    );
}
