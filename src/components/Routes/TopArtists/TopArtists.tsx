import React, { useState } from "react";
import { globalContext } from "../../../utils/Config";
import TopStatsTemplate from "../Common/TopStats/TopStatsTemplate";
import useTopArtistsData from "./useTopArtistsData";
import { getLimitMap } from "../Common/limitMapConstant";

export const TopArtists = () => {
  const { duration, token } = React.useContext(globalContext) ?? {
    duration: "",
    token: undefined,
  };
  const [limit, setlimit] = useState<number>(20);
  const data = useTopArtistsData(token, duration, limit);

  return (
    <TopStatsTemplate
      data={data}
      limitMap={getLimitMap(setlimit)}
      statsType="Artists"
    />
  );
};
export default TopArtists;
