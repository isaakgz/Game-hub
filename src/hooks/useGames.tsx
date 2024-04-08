import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIclient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store/gameQueryStore";
import Game from "../entites/Game";

const apiClient = new APIclient<Game>("/games");

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
