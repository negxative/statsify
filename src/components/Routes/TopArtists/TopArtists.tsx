import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { MdSportsFootball } from "react-icons/md";
import { globalContext } from "../../../utils/Config";
import axios from "axios"
import "./TopArtist.css"


export const TopArtists = () => {
    const token = React.useContext(globalContext)?.token ?? undefined;
    const [data,setData]= useState<any | undefined>(undefined);
    const fetchUserData = async ()=>{
      try{
          const response = await axios.get("https://api.spotify.com/v1/me/top/artists",{headers:{
              "Authorization": "Bearer " + token
          }})
          console.log(response)
          if(response.status ===200){
            setData(response.data.items)
          }
      }
      catch(e){
          console.log(e)
      }
  }
    React.useEffect(()=>{
       fetchUserData();
    },[token]) 
    
    console.log("fetched data",data);

    return (
    <div className="w-full">
      <div className="flex text-6xl flex-col ml-3 p-4 justify-start items-start sidenav-container rounded-lg bg-neutral-900 ">
        Here are your Top Artists:
        <div className="flex flex-wrap justify-evenly overflow-scroll card-wrapper text-normal mt-5">
            {
              data?.map((element:any)=>{
                let genresString=element.genres.join(", ");
                if (genresString.length > 30) {
                  genresString=genresString.substring(0, 30) + "...";
              }
               return <div className="font-semibold text-xl m-3 h-30 max-w-30 overflow-hidden p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all ease-in-out duration-500">
                <img src={element.images[0].url} height={"200px"} width={"200px"} className="card-image  mb-4 rounded-full pointer-events-none"  />
                <div>{element.name}</div>
                <div className="text-xs text-neutral-400 mb-6">{genresString}</div>
               </div>
              })
            }
        </div>
      </div>
    </div>
  );
};
export default TopArtists;
