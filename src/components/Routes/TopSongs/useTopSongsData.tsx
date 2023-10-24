import { useState, useEffect } from "react";
import axios from "axios";

const useTopSongsData = (
  token: string | undefined,
  duration: string,
  limit: number
) => {
  const [data, setData] = useState<any | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/top/tracks",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
            params: {
              time_range: duration,
              limit,
            },
          }
        );
        if (response.status === 200) {
          setData(response.data.items);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchUserData();
  }, [token, duration, limit]);

  return data;
};

export default useTopSongsData;
