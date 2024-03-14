import { api } from "~/trpc/server";
import { Container, Main } from "../../styles/style";
import { BidsList } from "../_components/BidsList";
import { sortMostWinnerNumbers } from "~/domain/service/bids";

export default async function Bids() {
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
