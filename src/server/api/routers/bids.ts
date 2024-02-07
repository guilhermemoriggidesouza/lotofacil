import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const bidsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      winner: z.boolean().optional(),
      numbers: z.array(
        z.object({ sugested: z.boolean(), number: z.number() })
      )
    }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return ctx.db.bids.create({
        data: {
          winner: input.winner || false,
          numbers: input.numbers
        },
      });
    }),

  getBids: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
