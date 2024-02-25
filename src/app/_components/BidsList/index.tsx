"use client";
import { H1, H3 } from "~/styles/style";
import styles from "./bidsList.module.scss"
import { Bid, NumbersBids } from "~/domain/entity/Bid";

export interface BidsListProps {
    bids: Bid[],
    sugestedNumbers: number[]
}

export const BidsList = ({ bids, sugestedNumbers }: BidsListProps) => {
    const genNumbers = (numbers: NumbersBids[]) => numbers.map((number: NumbersBids) => {
        if (number.sugested) return <div className={`${styles.sugestedNumbers} ${styles.numbers}`}>{number.number.toString()}</div>
        if (sugestedNumbers.includes(number.number)) return <div className={`${styles.sugestedNumbersRandonly} ${styles.numbers}`}>{number.number.toString()}</div>
        return <div className={styles.numbers}>{number.number.toString()}</div>
    })
    const listBids = bids.map((bid: Bid, i: number) =>
        <li className={styles.bidContainer} key={i}>
            <p>{(i + 1).toString()} Numero sugerido:</p>
            <div className={styles.bids}>
                {genNumbers(bid.numbers)}
            </div>
        </li>
    ).reverse()

    const getSugestionNumbers = () => {
        const numbers = bids
            .flatMap(nb => nb.numbers)
            .filter(nb => nb.sugested)
            .map(bn => bn.number)
        return Array.from(new Set(numbers)).join(", ")
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