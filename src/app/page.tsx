import { unstable_noStore as noStore } from "next/cache";
import { WinnerBids } from "./_components/WinnerBids";
import { Container, H1, H2, Main, Title } from "../styles/style";
import { createLastBid } from "./actions/createLastBid";
import { seedBid } from "./actions/seedBid";
import { api } from "~/trpc/server";
import { NumbersBids } from "~/domain/entity/Bid";

export default async function Home() {
  noStore();
  const [winnerBid] = await api.bids.get.query({ winner: true })
  return (
    <Main>
      <Container>
        <Title>
          <H1>Cadastrar jogos premiados</H1>
        </Title>
        <WinnerBids createWinnerBid={createLastBid} seed={seedBid} />
      </Container>
    </Main>
  );
}

