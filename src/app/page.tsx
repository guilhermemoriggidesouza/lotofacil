import { unstable_noStore as noStore } from "next/cache";
import { WinnerBids } from "./_components/WinnerBids";
import { H1, H2, Main, Title } from "../styles/style";
import { useCreateLastBid } from "./hooks/useCreateLastBid";

export default async function Home() {
  noStore();
  const { create } = await useCreateLastBid()
  return (
    <Main>
      <Title>
        <H1>Lance premiado 04/02/2024</H1>
        <H2>11 11 11 11 11 11 11 11 11 11 11 11 11 11 11</H2>
      </Title>
      <WinnerBids createWinnerBid={create} />
    </Main>
  );
}

