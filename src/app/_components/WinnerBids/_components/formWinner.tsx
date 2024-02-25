"use client"
import { Button, Input } from "~/styles/style"
import styles from '../winnerBids.module.scss'
import { useFormStatus } from "react-dom"
import { useEffect } from "react"

export default async () => {
    const data = useFormStatus()
    return (
        <>
            <label htmlFor="bid">Ultimo Lance Premiado de hoje 02/04/2024: </label>
            <Input id="bid" type="text" name="bid" />
            <small>Informe o lance separando por "," os numeros, ex: 1,2,3,11,12,13... </small>
            <div className={styles.button}>
                <Button disabled={data.pending} type="submit">{data.pending ? "Carregando..." : "Salvar"}</Button>
            </div>
        </>
    )
}