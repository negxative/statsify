import  React from 'react'
import { globalContext } from '../utils/Config';
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({component}:{component:React.ReactNode}) : React.ReactNode | null  => {
    const token = React.useContext(globalContext)?.token ?? undefined;
    const navigate=useNavigate()
    const navigateToHomepage= ()=>{
        navigate("/")
    return null }
  return (
    token? component :navigateToHomepage()
  )
}
