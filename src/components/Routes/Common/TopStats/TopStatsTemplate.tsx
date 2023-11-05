import { Dropdown, MenuProps, Space } from "antd";
import { BsChevronDown } from "react-icons/bs";
import "./TopStatsTemplate.css";
import { Card, CardInterface } from "../Card/Card";
import { getArtistsData, getSongsData } from "./TopStatsUtilityFunctions";
import Graphs from "../BarGraph/Graphs";

interface TopStatsTemplateInterface {
  dropdownMap: MenuProps["items"];
  data: any;
  statsType: string;
  chartType?: string;
}
export const TopStatsTemplate = ({
  dropdownMap,
  data,
  statsType,
  chartType = "barChart",
}: TopStatsTemplateInterface) => {
  return (
    <div className="w-full">
      <div className="flex  flex-col ml-3 p-4 justify-start items-start sidenav-container rounded-lg bg-neutral-900 ">
        <div className="flex w-full justify-between items-center">
          <span className="text-6xl">Here are your Top {statsType}:</span>
          <Dropdown menu={{ items: dropdownMap }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {statsType === "Genres" ? "Chart Type" : "Limit"}
                <BsChevronDown />
              </Space>
            </a>
          </Dropdown>
        </div>
        {statsType !== "Genres" ? (
          <div className="flex flex-wrap justify-evenly overflow-scroll card-wrapper text-normal mt-5">
            {data?.map((element: any) => {
              let cardData: CardInterface = {
                imagePath: "",
                title: "",
                subTitle: "",
              };
              if (statsType === "Artists") cardData = getArtistsData(element);
              else if (statsType === "Songs") cardData = getSongsData(element);
              else "";
              const { imagePath, title, subTitle } = cardData;
              return (
                <Card imagePath={imagePath} title={title} subTitle={subTitle} />
              );
            })}
          </div>
        ) : (
          data.length > 0 && <Graphs data={data} chartType={chartType} />
        )}
      </div>
    </div>
  );
};

export default TopStatsTemplate;
