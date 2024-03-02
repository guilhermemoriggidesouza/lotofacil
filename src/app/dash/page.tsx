export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import { Container, H1, Main } from "~/styles/style"
import Grid, { Cell } from "../_components/Grid"
import styles from './dash.module.scss'
import { api } from "~/trpc/server"
import { revalidatePath, unstable_noStore } from "next/cache"

export default async function Dash() {
    unstable_noStore()
    revalidatePath("/dash")
    const bids = await api.bids.get.query({ winner: true })
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