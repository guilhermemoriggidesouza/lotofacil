import { Container, H1, Main } from "~/styles/style"
import Grid, { Cell } from "../_components/Grid"
import styles from './dash.module.scss'
import { api } from "~/trpc/server"
import { NumbersBids } from "~/domain/entity/Bid"

export default async function Dash() {
    const bids = await api.bids.get.query({ winner: true })
    const genNumbers = ({ col, row }: Cell): React.JSX.Element => {
        const bid = bids[row].numbers.map((numb: NumbersBids) => numb.number)
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