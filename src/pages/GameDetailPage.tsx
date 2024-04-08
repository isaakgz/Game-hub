import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../Components/ExpandableText";
import GameAttribute from "../Components/GameAttribute";
import useGame from "../hooks/useGame";
import GameTrailer from "../Components/GameTrailer";
import GameScreenShouts from "../Components/GameScreenShouts";

function GameDetailPage() {
  const { slug } = useParams();

  const { isPending, data: game, error } = useGame(slug!);

  if (isPending) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShouts gameId={game.id} />
    </>
  );
}

export default GameDetailPage;
