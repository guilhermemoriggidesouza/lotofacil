export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Container, H1, Main } from "~/styles/style"
import Grid, { Cell } from "../_components/Grid"
import styles from './dash.module.scss'
import { getBids } from "../actions/getBids"

export default async function Dash() {
    const bids = await getBids({ winner: true })
    const genNumbers = ({ col, row }: Cell) => {
        const bid = bids[row]!.numbers.map(numb => numb.number)
        if (bid.includes(col + 1)) {
            return <p className={styles.fullfieldNumber}>x</p>
        }
        return <div></div>
    }

    return <Main>
        <Container>
            <div className=""><H1>Tabela de numeros</H1></div>
            <Grid rows={bids} populate={genNumbers} />
        </Container>
    </Main>
}