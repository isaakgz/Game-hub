import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIclient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store/gameQueryStore";
import { Platform } from "./usePlatforms";

const apiClient = new APIclient<Game>("/games");

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

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24hr"), //24hr
  });
};

export default useGames;
