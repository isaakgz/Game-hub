import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import { Genre } from "../entites/Genre";
import getCroppedImageUlr from "../services/imageUrl";
import useGameQueryStore from "../store/gameQueryStore";

function GenreList() {
  const { isPending, isError, data } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isError) return null;
  if (isPending) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres{" "}
      </Heading>
      <List>
        {data.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUlr(genre.image_background)}
                objectFit="cover"
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
