import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import getCroppedImageUlr from "../services/imageUrl";
import useGenres, { Genre } from "../hooks/useGenres";

interface props {
  onSelect: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onSelect, selectedGenreId }: props) {
  const { isPending, isError, data } = useGenres();

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
                onClick={() => onSelect(genre)}
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
