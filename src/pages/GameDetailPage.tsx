import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";

function GameDetailPage() {
  const { slug } = useParams();

  const { isPending, data: game, error } = useGame(slug!);

  if (isPending) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
}

export default GameDetailPage;
