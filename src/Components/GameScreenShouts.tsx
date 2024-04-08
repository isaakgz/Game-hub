import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShouts from "../hooks/useScreenShots";

interface GameScreenShoutsProps {
  gameId: number;
}
function GameScreenShouts({ gameId }: GameScreenShoutsProps) {
  const { data, error, isPending } = useScreenShouts(gameId);

  if (isPending) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid spacing={2}
      columns={{
        base: 1,
        md: 2,
      }}
    >
      {data.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShouts;
