'use client';
import { useState } from 'react';
import styles from './winnerBids.module.scss'
import { Button, Input } from "~/styles/style";

export interface WinnerBidsProps {
    createWinnerBid: (bid: any) => void
}

export const WinnerBids = ({ createWinnerBid }: WinnerBidsProps) => {
    const [bid, setBid] = useState("")
    const [disabled, setDisable] = useState(false)
    const handleChangeBid = (e: any) => { setBid(e.target.value) }

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault()
                setDisable(true)
                await createWinnerBid(bid)
                setDisable(false)

            }}
            className={styles.container}>
            <label htmlFor="bid">Ultimo Lance Premiado de hoje 02/04/2024: </label>
            <Input id="bid" type="text" name="bid" onChange={handleChangeBid} />
            <small>Informe o lance separando por "," os numeros, ex: 1,2,3,11,12,13... </small>
            {disabled && "salvando..."}
            <div className={styles.button}>
                <Button disabled={disabled} type="submit">Salvar</Button>
            </div>
        </form>
    )
}

