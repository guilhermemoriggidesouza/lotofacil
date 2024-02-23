import { unstable_noStore as noStore } from "next/cache";
import { WinnerBids } from "./_components/WinnerBids";
import { H1, H2, Main, Title } from "../styles/style";
import { createLastBid } from "./actions/createLastBid";
import { seedBid } from "./actions/seedBid";

export default async function Home() {
  noStore();
  return (
    <Main>
      <Title>
        <H1>Lance premiado 04/02/2024</H1>
        <H2>11 11 11 11 11 11 11 11 11 11 11 11 11 11 11</H2>
      </Title>
      <button onClick={seedBid}>seed</button>
      <WinnerBids createWinnerBid={createLastBid} />
    </Main>
  );
}

