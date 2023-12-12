import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface props {
  gameQuery:GameQuery,
 
}

function GameGrid({gameQuery }:props) {
  const { data, error, isloading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return  <Text>{error}</Text>
  return (
    <>
      
      <SimpleGrid
        padding="10px"
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isloading &&
          skeletons.map((skelton) => (
            <GameCardContainer key={skelton}>
              <GameCardSkelton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer  key={game.id} >
            {" "}
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
