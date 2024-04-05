import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({data:genres, isloading:false, error:null})

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 *60 * 1000,
    initialData: {count: genres.length, results: genres}
  });
};

export default useGenres;
