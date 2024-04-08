import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import ms from "ms";
import  Platform  from "../entites/Platform";

const apiClient = new APIclient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"),
  });

export default usePlatforms;
