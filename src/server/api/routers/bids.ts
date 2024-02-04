import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const bidsRouter = createTRPCRouter({
  create: protectedProcedure.mutation(({ ctx }) => {
    // return ctx.db.bids.findFirst({
    //   orderBy: { createdAt: "desc" },
    //   where: { createdBy: { id: ctx.session.user.id } },
    // });
  }),

  getBids: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
