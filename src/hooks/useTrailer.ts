import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import Trailer from "../entites/Trailer";

const useTrailer = (gameId: number) => {
  const apiClient = new APIclient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
