import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import { Game } from "./useGames";

const apiClient = new APIclient<Game>("/games");


const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });


  export default useGame