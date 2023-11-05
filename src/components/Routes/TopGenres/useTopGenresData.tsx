import { useContext } from "react";
import { globalContext } from "../../../utils/Config";
import useTopSongsData from "../TopSongs/useTopSongsData";
import useTopArtistsData from "../TopArtists/useTopArtistsData";
export const useTopGenresData = (
  token: string | undefined,
  duration: string,
  limit: number
) => {
  let topGenresMap: Record<string, number> = {};
  const topArtistsData = useTopArtistsData(token, duration, limit);
  topArtistsData?.forEach((artist: any) => {
    artist.genres?.forEach((genre: string) => {
      topGenresMap[genre] ? topGenresMap[genre]++ : (topGenresMap[genre] = 1);
    });
  });
  const sortedGenresArray = Object.entries(topGenresMap);
  sortedGenresArray.sort((a, b) => b[1] - a[1]);
  return sortedGenresArray.slice(0, 10);
};
