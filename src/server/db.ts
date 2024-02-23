import { PrismaClient } from "@prisma/client";
import { NumbersBids } from "~/domain/entity/Bid";

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    type NumberBid = NumbersBids;
  }
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
