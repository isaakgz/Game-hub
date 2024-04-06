import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import ms from "ms";


const apiClient = new APIclient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"),
      
  });

export default usePlatforms;
