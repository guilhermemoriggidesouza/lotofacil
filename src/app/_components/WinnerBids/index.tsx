'use client';
import { Bid } from '~/domain/entity/Bid';
import FormWinner from './_components/formWinner';
import styles from './winnerBids.module.scss'
import { useFormState } from 'react-dom';

export interface WinnerBidsProps {
    createWinnerBid: (bid: string) => void
    seed: () => void
}

export const WinnerBids = ({ createWinnerBid, seed }: WinnerBidsProps) => {
    const handlerForm = async (previousState: { success: boolean, message?: string }, formData: FormData,) => {
        try {
            const bid = formData.get("bid") as string
            createWinnerBid(bid)
        } catch (error) {
            return { success: false, message: "erro ao cadastrar o lance" }
        }
        return { success: true }
    }

    const [state, formAction] = useFormState(handlerForm, { success: false });
    return (
        <>
            {/* <button type='button' onClick={async () => await seed()}>seed</button> */}
            <form
                action={formAction}
                className={styles.container}>
                <FormWinner />
                {state.success && "Lance cadastrado com sucesso"}
                {state.message}
            </form>
        </>

    )
}

