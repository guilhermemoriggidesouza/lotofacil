import { H1, Main } from "~/styles/style"
import Grid, { Cell } from "../_components/Grid"
import { mockBid } from "../_components/_mock"

export default function Dash() {
    const bids = [mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid()]

    const genNumbers = ({ col, row }: Cell) => {
        const bid = bids[row]!.numbers.map(numb => numb.number)
        if (bid.includes(col+1)) {
            return <H1>x</H1>
        }
        return <div></div>
    }

    return <Main>
        <H1>Tabela de numeros</H1>
        <Grid rows={bids.length} populate={genNumbers} />
    </Main>
}