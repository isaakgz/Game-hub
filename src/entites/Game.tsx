import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  // shaping our game array
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  publishers: Publisher[];
  genres: Genre[];
  description_raw: string;
  rating_top: number;
  slug: string;
}
