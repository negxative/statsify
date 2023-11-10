import React, { useState } from "react";
import Doomsday from "../../Assets/Doomsday.mp3";
import MolchatDoma1 from "../../Assets/MolchatDoma-1.mp3";
import MolchatDoma2 from "../../Assets/MolchatDoma-2.mp3";
import MolchatDoma3 from "../../Assets/MolchatDoma-3.mp3";
import MolchatDoma from "../../Assets/MolchatDoma.mp3";
import { BsInfo, BsPlay } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";

const MusicPlayer = ({ play = false }: any) => {
  // Define your list of songs (replace with your actual song URLs)
  const songs = [
    { name: "Molchat Doma ", src: MolchatDoma },
    { name: "Doomsday", src: Doomsday },
    { name: "Molchat Doma 1", src: MolchatDoma1 },
    { name: "Molchat Doma 2", src: MolchatDoma2 },
    { name: "Molchat Doma 3", src: MolchatDoma3 },
  ];

  const [currentSong, setCurrentSong] = useState<any>("");

  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    setCurrentSong(randomSong);
  };
  React.useEffect(() => {
    playRandomSong();
  }, [play]);
  return (
    <div
      className={
        " absolute -bottom-[500px] text-base left-[45%] bottom-20  transition-all duration-300 ease-in-out" +
        ` ${play ? "visible bottom-[100px]" : "invisible"}`
      }
    >
      {play && <audio autoPlay={true} src={currentSong?.src} />}
      <div className="flex justify-center items-center gap-2">
        <BsPlay className="text-green-400" /> {currentSong.name}
      </div>
      <div className="flex items-center text-xs">
        <MdInfoOutline className="mr-2 text-green-400" />
        Browser blocks default autoplay engage with page to operate
      </div>
    </div>
  );
};

export default MusicPlayer;
