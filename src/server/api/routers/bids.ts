import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const bidsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.array(z.object({
      winner: z.boolean().default(false),
      numbers: z.array(
        z.object({ sugested: z.boolean(), number: z.number() })
      )
    })))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.bids.createMany({
        data: [...input],
      });
    }),

  get: publicProcedure.input(
    z.object({
      limit: z.number().optional(),
      winner: z.boolean().optional(),
    })
  ).query(({ ctx, input }) => {
    return ctx.db.bids.findMany({
      where: { winner: input.winner }, take: input.limit, orderBy: {
        createdAt: "desc"
      }
    });
  }),

});
