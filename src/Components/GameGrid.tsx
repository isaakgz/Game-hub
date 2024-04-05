import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: props) {
  const {
    data,
    error,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid
        
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isPending &&
          skeletons.map((skelton) => (
            <GameCardContainer key={skelton}>
              <GameCardSkelton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                {" "}
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (<Button marginY= "5" onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>)}
     
    </Box>
  );
}

export default GameGrid;
