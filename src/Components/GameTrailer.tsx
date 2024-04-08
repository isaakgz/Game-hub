import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface GameTrailerProps {
  gameId: number;
}
function GameTrailer({ gameId }: GameTrailerProps) {
  const { data, isPending, error } = useTrailer(gameId);

  if (isPending) return <Spinner />;
  if (error) throw error;
  const first = data.results[0];
  return first ? <video src={first.data[480]} poster={first.preview} /> : null;
  
}

export default GameTrailer;
