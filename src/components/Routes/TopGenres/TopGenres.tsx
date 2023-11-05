import { globalContext } from "../../../utils/Config";
import { useState, useContext } from "react";
import { useTopGenresData } from "./useTopGenresData";
import TopStatsTemplate from "../Common/TopStats/TopStatsTemplate";
import { getChartsMap } from "../Common/dropdownMapConstant";
export const TopGenres = () => {
  const { duration, token } = useContext(globalContext) ?? {
    duration: "",
    token: undefined,
  };
  const [chartType, setChartType] = useState("verticalBar");
  const data = useTopGenresData(token, duration, 50);
  return (
    <TopStatsTemplate
      data={data}
      dropdownMap={getChartsMap(setChartType)}
      statsType="Genres"
      chartType={chartType}
    />
  );
};
export default TopGenres;
