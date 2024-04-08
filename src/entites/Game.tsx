import { Platform } from "./Platform";

export interface Game {
  // shaping our game array
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
  rating_top: number;
  slug: string;
}
