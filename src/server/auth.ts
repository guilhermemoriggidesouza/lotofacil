import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod";
import { db } from "~/server/db";
import bcrypt from 'bcrypt';

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      password: string;
    }
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "João" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const loginSchema = z.object({
          username: z.string(),
          password: z.string(),
        })
        const cred = await loginSchema.parseAsync(credentials);

        const user = await db.user.findFirst({
          where: { username: cred.username },
        });

        if (!user) {
          return null;
        }

        const isValidPassword = bcrypt.compareSync(
          cred.password,
          user.password
        );

        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          username: user.username,
        };
      }
    })
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
