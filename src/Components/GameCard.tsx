import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCroppedImageUlr from "../services/imageUrl";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image
        src={
          getCroppedImageUlr(game.background_image) ||
          "https://placehold.co/600x400@2x.png"
        }
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
