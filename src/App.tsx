import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg={"blue"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"coral"}>
            Nav
          </GridItem>
        </Show>
        <GridItem area="main" bg={"gold"}>
          Nav
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
