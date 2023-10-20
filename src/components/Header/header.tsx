import { Button } from 'antd';
import React from 'react'
import { BsSpotify } from "react-icons/bs";

export const Header = () => {
  return (
    <div className='flex justify-between items-center gap-2 h-20 bg-zinc-900 p-5'>
        <Button type='link' className='text-4xl flex items-center text-green-500 font-semibold ' onClick={()=>{console.log("clisked")}} icon={<BsSpotify className="mt-1"/>}>
            Statsify    
        </Button>
        <span className='mr-5' >
            Track your music just like your Calories :D 
        </span>
    </div>
  )
  
}

export default Header;