import { randomUUID } from "crypto"

export type MockNumbers = {
    number: number
    sugestion: boolean
}
export type MockBids = {
    id: string
    numbers: MockNumbers[]
}
export const mockBid = (): MockBids => (
    {
        id: randomUUID(),
        numbers: [
            { number: 2, sugestion: true, },
            { number: 4, sugestion: true, },
            { number: 6, sugestion: true, },
            { number: 7, sugestion: false, },
            { number: 9, sugestion: false, },
            { number: 11, sugestion: false, },
            { number: 12, sugestion: false, },
            { number: 13, sugestion: false, },
            { number: 14, sugestion: false, },
            { number: 15, sugestion: false, },
            { number: 16, sugestion: false, },
            { number: 19, sugestion: false, },
            { number: 21, sugestion: false, },
            { number: 23, sugestion: false, },
            { number: 25, sugestion: false, },
        ]
    }
)