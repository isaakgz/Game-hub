import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import GameGrid from '../Components/GameGrid'
import GameHeading from '../Components/GameHeading'
import GenreList from '../Components/GenreList'
import PlatformSelctor from '../Components/PlatformSelctor'
import SortSelector from '../Components/SortSelector'

function HomePage() {
  return (
    <>
       <Grid
        templateAreas={{
          base: ` " main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        
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
  )
}

export default HomePage
