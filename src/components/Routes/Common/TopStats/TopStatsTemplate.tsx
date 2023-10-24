import { Dropdown, MenuProps, Space } from "antd";
import { BsChevronDown } from "react-icons/bs";
import "./TopStatsTemplate.css";
import { Card, CardInterface } from "../Card/Card";
import { getArtistsData, getSongsData } from "./TopStatsUtilityFunctions";

interface TopStatsTemplateInterface {
  limitMap: MenuProps["items"];
  data: any;
  statsType: string;
}

export const TopStatsTemplate = ({
  limitMap,
  data,
  statsType,
}: TopStatsTemplateInterface) => {
  return (
    <div className="w-full">
      <div className="flex  flex-col ml-3 p-4 justify-start items-start sidenav-container rounded-lg bg-neutral-900 ">
        <div className="flex w-full justify-between items-center">
          <span className="text-6xl">Here are your Top {statsType}:</span>
          <Dropdown menu={{ items: limitMap }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Limit
                <BsChevronDown />
              </Space>
            </a>
          </Dropdown>
        </div>
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
      </div>
    </div>
  );
};

export default TopStatsTemplate;
