import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";


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
    staleTime: 24 * 60 *60 *1000,
      
  });

export default usePlatforms;
