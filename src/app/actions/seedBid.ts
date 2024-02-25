import { PrismaClient } from '@prisma/client';
import { createBidByString } from '~/domain/service/bids';
const prisma = new PrismaClient();

export const seedBid = async (): Promise<void> => {
    "use server"
    const bids: { winner: boolean, numbers: { number: number, sugested: false }[] }[] = [
        createBidByString({ bid: "1,2,4,6,7,9,11,12,15,17,18,20,21,14,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,3,4,7,9,13,14,15,16,17,18,19,21,22,24", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,2,4,5,6,8,11,12,13,15,16,17,19,21,24", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,2,3,4,7,10,11,13,17,18,19,20,22,24,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "2,4,6,10,11,12,13,14,18,19,20,21,23,24,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,2,4,5,6,7,11,13,14,16,17,18,19,20,21", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "2,6,7,9,10,12,13,14,16,17,18,19,21,26,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "2,5,6,7,8,9,10,11,14,16,17,18,20,21,24", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,2,5,6,9,10,11,12,15,17,18,19,21,24,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "2,4,6,7,9,11,12,13,14,15,16,19,21,23,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "1,2,4,5,6,7,9,10,12,13,14,17,18,21,22", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },
        createBidByString({ bid: "3,4,5,6,7,9,10,13,16,17,18,20,22,24,25", winner: true }) as { winner: boolean, numbers: { number: number, sugested: false }[] },

    ]
    await prisma.bids.createMany({
        data: bids,
    });

}