import React from "react";
import "./sidebar.css";
import { MdSpatialTracking, MdArtTrack, MdLogout } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { Button, Radio, RadioChangeEvent, Space } from "antd";
import { generateRandomKey } from "../../../../utils/RandomIdGenerator";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../../../utils/Config";

interface SidebarButtonType {
  icon: React.ReactElement;
  title: String;
  onClick: () => void;
}

const timeRangeoptions = [
  {
    rangeType: "Short",
    description: "Till the time you last took a shower (4 weeks)",
    value: "short_term",
  },
  {
    rangeType: "Medium",
    description: "Since you last touched grass (6 months)",
    value: "medium_term",
  },
  {
    rangeType: "Long",
    description: "When it all went wrong (Prolly when u joined spotify)",
    value: "long_term",
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { duration, setToken, setDuration } = React.useContext(
    globalContext
  ) ?? {
    duration: "",
    setToken: () => {},
    setDuration: () => {},
  };

  const onRadioButtonChange = (e: RadioChangeEvent) => {
    setDuration(e.target.value);
  };

  const SidebarButtonsArrays: SidebarButtonType[] = [
    {
      icon: <MdSpatialTracking />,
      title: "Top Artists",
      onClick: () => navigate("topArtists"),
    },
    {
      icon: <MdArtTrack />,
      title: "Top Songs",
      onClick: () => navigate("topSongs"),
    },
    {
      icon: <SiMusicbrainz />,
      title: "Top Genres",
      onClick: () => navigate("topGenres"),
    },
  ];

  return (
    <div className="h-screen w-60">
      <div className="flex flex-col  justify-between items-start sidenav-container gap-4 ">
        <div className="flex flex-col  h-full items-start gap-4">
          <div className="flex flex-col justify-center items-start h-2/5 gap-7 rounded-lg bg-neutral-900 p-4 font-medium ">
            {SidebarButtonsArrays.map((element: SidebarButtonType) => {
              return (
                <Button
                  key={generateRandomKey(10)}
                  type="link"
                  onClick={element.onClick}
                  className="flex items-center gap-6 text-xl text-neutral-400 hover:text-neutral-50 p-3 rounded-md transition ease-in "
                >
                  {element.icon}
                  {element.title}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col w-full justify-start items-center gap-7 h-3/5 rounded-lg bg-neutral-900 p-4 font-medium ">
            <div className="w-full">
              <div className="text-2xl mb-3">Duration</div>
              <Radio.Group onChange={onRadioButtonChange} value={duration}>
                <Space direction="vertical">
                  {timeRangeoptions.map((element) => {
                    return (
                      <>
                        <Radio value={element.value}>
                          <div className="text-neutral-300 text-lg">
                            {element.rangeType}
                          </div>
                        </Radio>
                        <div className="text-neutral-500 text-xs">
                          {element.description}
                        </div>
                        <br />
                        <br />
                      </>
                    );
                  })}
                </Space>
              </Radio.Group>
            </div>

            <Button
              key={generateRandomKey(10)}
              type="link"
              onClick={() => {
                localStorage.removeItem("token");
                setToken(undefined);
              }}
              className="flex items-center absolute bottom-5 left-6 gap-6 mb-5 text-xl text-red-300 hover:text-red-600 p-4  transition ease-in"
            >
              <MdLogout />
              logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
