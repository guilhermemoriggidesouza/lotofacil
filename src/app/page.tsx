
import { WinnerBids } from "./_components/WinnerBids";
import { Container, H1, H2, Main, Title } from "../styles/style";
import { createLastBid } from "./actions/createLastBid";
import { seedBid } from "./actions/seedBid";
import { api } from "~/trpc/server";
import { NumbersBids } from "~/domain/entity/Bid";

export default async function Home() {
  const [winnerBid] = await api.bids.get.query({ winner: true })
  return (
    <Main>
      <Container>
        <Title>
          <H1>Ultimo lance premiado de hoje</H1>
          <H2>{winnerBid?.numbers.map((number: NumbersBids) => number.number).join(",")}</H2>
        </Title>
        <WinnerBids createWinnerBid={createLastBid} seed={seedBid} />
      </Container>
    </Main>
  );
}

