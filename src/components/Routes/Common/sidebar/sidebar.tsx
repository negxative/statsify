import React from "react";
import "./sidebar.css";
import { MdSpatialTracking, MdArtTrack } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { Button } from "antd";
import { generateRandomKey } from "../../../../utils/RandomIdGenerator";
import { useNavigate } from "react-router-dom";

interface SidebarButtonType {
  icon: React.ReactElement;
  title: String;
  onClick: ()=> void;
}


export const Sidebar = () => {
  const navigate=useNavigate()
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
      <div className="flex flex-col justify-start items-start sidenav-container gap-7 p-4 bg-neutral-900  font-medium rounded-lg">
        {SidebarButtonsArrays.map((element: SidebarButtonType) => {
          return (
            <Button key={generateRandomKey(10)} type="link" onClick={element.onClick}
            className="flex items-center gap-6 text-xl text-neutral-400 hover:text-neutral-50 p-3 rounded-md transition ease-in ">
              {element.icon}
              {element.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
