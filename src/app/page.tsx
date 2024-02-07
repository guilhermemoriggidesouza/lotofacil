import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { WinnerBids } from "./_components/WinnerBids";
import { H1, H2, Main, Title } from "../styles/style";

export default async function Home() {
  noStore();
  // const hello = await api.bids.create.mutate();
  const session = await getServerAuthSession();

  return (
    <Main>
      <Title>
        <H1>Lance premiado 04/02/2024</H1>
        <H2>11 11 11 11 11 11 11 11 11 11 11 11 11 11 11</H2>
      </Title>
      <WinnerBids />
    </Main>
  );
}

