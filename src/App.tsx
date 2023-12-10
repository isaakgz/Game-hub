import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"coral"}></GridItem>
        </Show>
        <GridItem area="main" bg={"gold"}>
          Nav
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
