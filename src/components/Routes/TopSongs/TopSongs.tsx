import React, { useState } from "react";
import { globalContext } from "../../../utils/Config";
import TopStatsTemplate from "../Common/TopStats/TopStatsTemplate";
import useTopSongsData from "./useTopSongsData";
import { getLimitMap } from "../Common/dropdownMapConstant";

export const TopSongs = () => {
  const { duration, token } = React.useContext(globalContext) ?? {
    duration: "",
    token: undefined,
  };
  const [limit, setlimit] = useState<number>(20);
  const data = useTopSongsData(token, duration, limit);

  return (
    <TopStatsTemplate
      data={data}
      dropdownMap={getLimitMap(setlimit)}
      statsType="Songs"
    />
  );
};
export default TopSongs;
