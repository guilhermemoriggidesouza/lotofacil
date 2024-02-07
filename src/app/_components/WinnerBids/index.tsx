import { unstable_noStore as noStore } from "next/cache";
import styles from './winnerBids.module.scss'
import { Button, Input } from "~/styles/style";

export interface WinnerBidsProps {
}

export const WinnerBids = ({ }: WinnerBidsProps) => {
    noStore()
    return (
        <form action="" className={styles.container}>
            <label htmlFor="bid">Ultimo Lance Premiado de hoje 02/04/2024: </label>
            <Input id="bid" type="text" name="bid" />
            <small>Informe o lance separando por "," os numeros, ex: 1,2,3,11,12,13... </small>
            <div className={styles.button}>
                <Button type="submit">Salvar</Button>
            </div>
        </form>
    )
}

