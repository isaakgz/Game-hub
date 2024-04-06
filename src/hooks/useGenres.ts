// import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import genres from "../data/genres";

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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
