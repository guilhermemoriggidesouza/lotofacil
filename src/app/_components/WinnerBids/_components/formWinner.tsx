"use client"
import { Button, Input } from "~/styles/style"
import styles from '../winnerBids.module.scss'
import { useFormStatus } from "react-dom"

export default async () => {
    const data = useFormStatus()
    return (
        <>
            <label htmlFor="bid">Cadastre aqui os ultimos jogos ganhadores </label>
            <Input id="bid" type="text" name="bid" />
            <small>Informe o jogo separando por &quot;,&quot; os numeros, ex: 1,2,3,11,12,13... </small>
            <div className={styles.button}>
                <Button disabled={data.pending} type="submit">{data.pending ? "Carregando..." : "Salvar"}</Button>
            </div>
        </>
    )
}