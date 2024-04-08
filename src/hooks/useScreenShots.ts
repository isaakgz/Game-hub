import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/apiClient";
import { ScreenShot } from "../entites/Screenshouts";

const useScreenShouts = (gameId: number) => {
  const apiClient = new APIclient<ScreenShot>(`/games/${gameId}/screenshouts`);
  return useQuery({
    queryKey: ["screenShots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShouts;
