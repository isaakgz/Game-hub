import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms()
  const platform = platforms?.results.find(g => g.id ===gameQuery.platformId)
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
