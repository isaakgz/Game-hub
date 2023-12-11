import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenre";
import getCroppedImageUlr from "../services/imageUrl";

interface props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelect, selectedGenre }: props) {
  const { data, isloading, error } = useGenres();

  if (error) return null;
  if (isloading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUlr(genre.image_background)}
            />
            <Button
              onClick={() => onSelect(genre)}
              variant="link"
              fontSize="lg"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
