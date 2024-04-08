import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinationItem from "../Components/DefinationItem";
import CreditScore from "../Components/CreditScore";
import GameAttribute from "../Components/GameAttribute";

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
    </>
  );
}

export default GameDetailPage;
