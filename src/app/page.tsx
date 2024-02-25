export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
import { unstable_noStore as noStore } from "next/cache";
import { WinnerBids } from "./_components/WinnerBids";
import { Container, H1, H2, Main, Title } from "../styles/style";
import { createLastBid } from "./actions/createLastBid";
import { seedBid } from "./actions/seedBid";

export default async function Home() {
  noStore();
  return (
    <Main>
      <Container>
        <Title>
          <H1>Lance premiado 04/02/2024</H1>
          <H2>11 11 11 11 11 11 11 11 11 11 11 11 11 11 11</H2>
        </Title>
        <WinnerBids createWinnerBid={createLastBid} seed={seedBid} />
      </Container>
    </Main>
  );
}

