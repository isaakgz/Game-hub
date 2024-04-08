// import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIclient from "../services/apiClient";
import  Genre  from "../entites/Genre";

const apiClient = new APIclient<Genre>("/genres");
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
