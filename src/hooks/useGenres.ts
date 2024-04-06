// import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIclient from "../services/apiClient";

const apiClient = new APIclient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({data:genres, isloading:false, error:null})

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
