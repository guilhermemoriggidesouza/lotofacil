import { bidsRouter } from "~/server/api/routers/bids";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  bids: bidsRouter,
});

export type AppRouter = typeof appRouter;
