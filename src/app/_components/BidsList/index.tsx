import { H1, H3 } from "~/styles/style";
import styles from "./bidsList.module.scss"
import { unstable_noStore as noStore } from "next/cache";
import { randomUUID } from "crypto";
import { MockBids, MockNumbers, mockBid, } from "../_mock";


export const BidsList = () => {
    noStore()
    const bids = [mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid(), mockBid()]
    const genNumbers = (numbers: MockNumbers[]) => numbers.map(({ number, sugestion }: MockNumbers) => {
        if (sugestion) return <div className={`${styles.sugestedNumbers} ${styles.numbers}`}>{number.toString()}</div>
        return <div className={styles.numbers}>{number.toString()}</div>
    })
    const listBids = bids.map((bid: MockBids, i: number) =>
        <li className={styles.bidContainer} >
            <label htmlFor={`bid-${bid.id}`}>({(i + 1).toString()}) Numeros - Você usou esse lance? </label>
            <input id={`bid-${bid.id}`} value={bid.id} type="checkbox" />
            <div className={styles.bids}>
                {genNumbers(bid.numbers)}
            </div>
        </li>
    )
    const getSugestionNumbers = () => {
        const sugestedNumbers = new Set(mockBid()
            .numbers
            .filter(e => e.sugestion)
            .map(e => e.number)
        )
        return Array.from(sugestedNumbers).join(", ")
    }

    return (
        <>
            <H1 className={styles.title}>Lista de lances sugeridos</H1>
            <H3>Numeros Sugeridos: {getSugestionNumbers()}</H3>
            <ul>
                {listBids}
            </ul>
        </>
    );
}