import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, isloading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
      >
        {isloading &&
          skeletons.map((skelton) => (
            <GameCardContainer>
              <GameCardSkelton key={skelton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
