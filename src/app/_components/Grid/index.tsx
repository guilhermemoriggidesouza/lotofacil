import { ReactNode } from "react"
import styles from './grid.module.scss'
import { Bid } from "~/domain/entity/Bid"
import { actualDate } from "~/domain/service/bids"
export type Cell = { row: number, col: number }
type GridProps = {
    rows: Bid[]
    cols?: number,
    populate: ({ row, col }: Cell) => any
}

export default function Grid({ rows, cols, populate }: GridProps) {
    const headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const genCol = ({ cols, row }: { cols: number, row: number }) => {
        const colsElement = []
        for (let col = 0; col < cols; col++) {
            colsElement.push(<div className={styles.col}>
                {populate({ col, row })}
            </div>)
        }
        return colsElement
    }

    const genGrid = ({ rows, cols }: { rows: Bid[], cols: number }) => {
        const rowsElement = []
        for (let row = 0; row < rows.length; row++) {
            rowsElement.push(<div className={styles.row}><div className={styles.dateField}>{actualDate(rows[row]!.createdAt!)}</div><div className={styles.flex}>{genCol({ cols, row }) as ReactNode}</div></div>)
        }
        return rowsElement
    }


    return (
        <div className={styles.gridLayoyt}>
            <div className={styles.row}>
                <div className={styles.dateField}>Data</div>
                {headers.map(header => <div className={styles.col}>{header}</div>)}
            </div>
            {genGrid({ rows, cols: cols ?? headers.length })}
        </div>
    )
}