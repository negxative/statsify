import React from "react";
import { globalContext } from "../../App";
import Login from "../login/Login";
import Header from "../Header/header";
import { BsSpotify } from "react-icons/bs";
import "./homepage.css";
export const Homepage = () => {
  const { token } = React.useContext(globalContext) ?? { undefined };
 
  return (
    <div className="wrapper">
      <div className="body w-full p-20 ">
        <BsSpotify className="disc text-green-500" />
        <div className="text-8xl">
          Welcome to{" "}
          <span className="hover:text-green-500 transition duration-150 ease-in-out">
            Statsify
          </span>
          : <br />
          <div className="text-6xl text-slate-300">
            {" "}
            Your Ultimate Spotify Status App
          </div>
          <div className="text-4xl mt-40 text-slate-300">
           <Login/>with spotify to get started
          </div>
        </div>
      </div>
    </div>
  );
};
