import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./Components/GameGrid";
import GameHeading from "./Components/GameHeading";
import GenreList from "./Components/GenreList";
import NavBar from "./Components/NavBar";
import PlatformSelctor from "./Components/PlatformSelctor";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  serachText: string;
}

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelctor />
              </Box>
              <SortSelector
                
              />
            </Flex>
          </Box>
          <GameGrid  />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
